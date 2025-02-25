import MaternalDataOfApregnantController from "@/adapters/controllers/MaternalDataOfAPregnantController";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GraphicCard } from "../primitive/GraphicCard";
import axios from "axios";
import { BASE_URL, PORT } from "@/config";
import ListAllFetalRegisterController from "@/adapters/controllers/ListAllFetalRegisterController";
import ListAllGlicoseRegisterController from "@/adapters/controllers/ListAllGlicoseRegisterController";
import ListAllPregnantController from "@/adapters/controllers/ListAllPregnantController";
import { PressureGraphicCard } from "../primitive/PressureGraphicCard";
import { Header } from "../primitive/Header";
import GetOnePregnantDataController from "@/adapters/controllers/GetOnePregnantDataController";


function getTimeFromDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function mapHeartRateData(dataArray) {
  let contador = 0;
  const eixoX = dataArray.map((item) => item.Date);
  const eixoY = dataArray.map((item) => item.UserHeartRate);

  return {
    eixoX: eixoX.slice(11),
    eixoY: eixoY.slice(11),
  };
}

export function PregnantDataView() {
  const params = useParams();
  const id = params.id;
  const [dados, setDados] = useState([]);
  const [dadosFetais, setDadosFetais] = useState([]);
  const [dadosGlicose, setDadosGlicose] = useState([]);
  const [paciente, setPaciente] = useState({patientName:'Usuário'})
  const [filtro, setFiltro] = useState(1)


  const getMaternalData = async () => {
    try {
      const response = await MaternalDataOfApregnantController.getData(id);
      setDados(response);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const getFetalData = async () => {
    try {
      const response = await ListAllFetalRegisterController.getData(id, () => {});
      setDadosFetais(response);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const getGlicoseData = async () => {
    try {
      const response = await ListAllGlicoseRegisterController.getData(id, () => {});
      setDadosGlicose(response);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const getPatient = async () => {
    try {
      const responsePregantData = await GetOnePregnantDataController.getData(id, () => {})
      setPaciente(responsePregantData)
      localStorage.setItem("pregnant", id)
      
      console.log(id);
      
      
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    if (!id) return;
    getMaternalData();
    getFetalData();
    getGlicoseData();
    getPatient();
  }, []);
  


  const dadosDoGrafico = dados.slice(0, 47).map((value) => {
    return {
      Date: getTimeFromDate(value.Date),
      UserHeartRate: value.UserHeartRate,
      SystolicPressure: value.SystolicPressure,
      DiastolicPressure: value.DiastolicPressure,
    };
  });
  const dadosDoGraficoFetal = dadosFetais.slice(0, 47).map((value) => {
    return {
      Date: getTimeFromDate(value.Date),
      FetusDisplacement: value.FetusDisplacement,
      BabyHeartRate:value.BabyHeartRate
    };
  });  
  const dadosDoGraficoGlicose = dadosGlicose.slice(0, 6).map((value) => {
    return {
      Date: getTimeFromDate(value.Date),
      BloodGlucose: value.BloodGlucose,
    };
  });

  return (

    <VStack alignContent={"flex-start"}>
    <Header user={{"name": paciente.patientName}}/>
    <VStack>
      <Text textStyle="3xl">Dados da Gestante</Text>
      <Text textStyle="2xl">Paciente: {paciente.patientName}, Gestação: {paciente.babyName}</Text>
      {/* fazer funcao que calcule a semana da gestacao, de acordo com a data inicial da gestacao  */}
      <Text textStyle="2xl">Semana de gestação: </Text> 
    </VStack>



    <HStack gap={30} wrap="wrap" justifyContent="center">
      <GraphicCard
        dadosDoGrafico={dadosDoGrafico}
        eixoX={"Date"}
        eixoY={"UserHeartRate"}
        titulo={"Frequência Cardíaca"}
      />
     
      <PressureGraphicCard
        dadosDoGrafico={dadosDoGrafico}
        eixoX={"Date"}
        eixoYSistolica={"SystolicPressure"}
        eixoYDistolica={"DiastolicPressure"}
        titulo ={"Pressão Arterial"}
      />
      <GraphicCard
        dadosDoGrafico={dadosDoGraficoFetal}
        eixoX={"Date"}
        eixoY={"FetusDisplacement"}
        titulo={"Movimento fetal"}
      />
      <GraphicCard
        dadosDoGrafico={dadosDoGraficoGlicose}
        eixoX={"Date"}
        eixoY={"BloodGlucose"}
        titulo={"Glicose"}
      />
    </HStack>

    </VStack>
  );
}

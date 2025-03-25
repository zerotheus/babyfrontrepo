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
import { PatientCard } from "../primitive/PatientCard";
import { MovementGraphicCard } from "../primitive/MovementGraphicCard";

export function getTimeFromDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function calcularDiferencaSemanas(dataString) {
  const dataFornecida = new Date(dataString);
  const dataAtual = new Date();

  // Calcula a diferença em milissegundos
  const diferencaEmMs = dataAtual - dataFornecida;

  // Converte para semanas (1 semana = 7 dias * 24h * 60m * 60s * 1000ms)
  const semanas = Math.floor(diferencaEmMs / (7 * 24 * 60 * 60 * 1000));

  return semanas;
}

function mapHeartRateData(dataArray) {
  const contador = 0;
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
  const [paciente, setPaciente] = useState({ patientName: "Usuário" });
  const [filtro, setFiltro] = useState(1);

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
      const response = await ListAllFetalRegisterController.getData(
        id,
        () => { }
      );
      setDadosFetais(response);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const getGlicoseData = async () => {
    try {
      const response = await ListAllGlicoseRegisterController.getData(
        id,
        () => { }
      );
      setDadosGlicose(response);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const getPatient = async () => {
    try {
      const responsePregantData = await GetOnePregnantDataController.getData(
        id,
        () => { }
      );
      setPaciente(responsePregantData);
      localStorage.setItem("pregnant", id);
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
      BabyHeartRate: value.BabyHeartRate,
    };
  });
  const dadosDoGraficoGlicose = dadosGlicose.slice(0, 6).map((value) => {
    return {
      Date: getTimeFromDate(value.Date),
      BloodGlucose: value.BloodGlucose,
    };
  });

  return (
    <VStack alignContent={"flex-start"} gap={30}>
      <Header user={{ name: paciente.patientName }} />
      <PatientCard
        patientName={paciente.patientName}
        gestation={paciente.babyName}
        age={paciente.birthday}
        week={calcularDiferencaSemanas(paciente.initialDate)}
      />
      <HStack gap={30} wrap="wrap" justifyContent="center">
        <GraphicCard
          dadosDoGrafico={dadosDoGrafico}
          eixoX={"Date"}
          eixoY={"UserHeartRate"}
          titulo={"Frequência Cardíaca da Mãe"} tipo={"bpm"}
        />
        <GraphicCard
          dadosDoGrafico={dadosDoGraficoFetal}
          eixoX={"Date"}
          eixoY={"BabyHeartRate"}
          titulo={"Frequência cardíaca do Bebê"} tipo={"BPM do Bebê"}
        />
        <PressureGraphicCard
          dadosDoGrafico={dadosDoGrafico}
          eixoX={"Date"}
          eixoYSistolica={"SystolicPressure"}
          eixoYDistolica={"DiastolicPressure"}
          titulo={"Pressão Arterial"}
          tipo={'pressure'}
        />
        <MovementGraphicCard
          dadosDoGrafico={dadosDoGraficoFetal}
          eixoX={"Date"}
          eixoY={"FetusDisplacement"}
          titulo={"Movimento fetal"} tipo={"fetalMovement"} />

        <GraphicCard
          dadosDoGrafico={dadosDoGraficoGlicose}
          eixoX={"Date"}
          eixoY={"BloodGlucose"}
          titulo={"Glicose"} tipo={"Glicose"} />
      </HStack>
    </VStack>
  );
}

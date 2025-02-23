import MaternalDataOfApregnantController from "@/adapters/controllers/MaternalDataOfAPregnantController";
import { HStack, Text } from "@chakra-ui/react";
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
  const [paciente, setPaciente] = useState()

  axios.get(`${BASE_URL}:${PORT}`)

  useEffect(() => {
    if (!id) return;
    const getMaternalData = async () => {
      try {
        const response = await MaternalDataOfApregnantController.getData(id);
        setDados(response);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    getMaternalData();
  }, []);

  const dadosDoGrafico = dados.slice(0, 6).map((value) => {
    return {
      Date: getTimeFromDate(value.Date),
      UserHeartRate: value.UserHeartRate,
      SystolicPressure: value.SystolicPressure,
      DiastolicPressure: value.DiastolicPressure,
    };
  });

  return (
    <HStack gap={30} wrap="wrap" justifyContent="center">
      <GraphicCard
        dadosDoGrafico={dadosDoGrafico}
        eixoX={"Date"}
        eixoY={"UserHeartRate"}
        titulo={"Frequência Cardíaca"}
      />
      <GraphicCard
        dadosDoGrafico={dadosDoGrafico}
        eixoX={"Date"}
        eixoY={"SystolicPressure"}
        titulo={"Pressão sistolica"}
      />
      <GraphicCard
        dadosDoGrafico={dadosDoGrafico}
        eixoX={"Date"}
        eixoY={"DiastolicPressure"}
        titulo={"Pressão Diastolica"}
      />
    </HStack>
  );
}

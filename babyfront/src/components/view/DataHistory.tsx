import GetOnePregnantDataController from "@/adapters/controllers/GetOnePregnantDataController";
import ListAllFetalRegisterController from "@/adapters/controllers/ListAllFetalRegisterController";
import ListAllGlicoseRegisterController from "@/adapters/controllers/ListAllGlicoseRegisterController";
import MaternalDataOfApregnantController from "@/adapters/controllers/MaternalDataOfAPregnantController";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HistoryCard } from "../primitive/HistoryCard";
import { calcularDiferencaSemanas } from "./PregnantDataView";

export function DataHistory() {
  const pregnantId = localStorage.getItem("pregnant");
  const [paciente, setPaciente] = useState();
  const [dados, setDados] = useState([]);
  const params = useParams();
  const type = params.type;

  useEffect(() => {
    getPatient();
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let data;
      if (type === "bpm") {
        data = await MaternalDataOfApregnantController.getData(
          pregnantId,
          console.log()
        );
        const medidaBatimentos = data.map((medida) => {
          return {
            value: medida.UserHeartRate,
            unity: "bpm",
            date: medida.Date,
          };
        });
        setDados(medidaBatimentos);
        return;
      }
      if (type === "pressure") {
        data = await MaternalDataOfApregnantController.getData(
          pregnantId,
          console.log()
        );
        const medidasPressoes = data.map((medida) => {
          return {
            value: `${medida.SystolicPressure}/${medida.DiastolicPressure}`,
            unity: "Pressão",
            date: medida.Date,
          };
        });
        setDados(medidasPressoes);
        return;
      }
      if (type === "fetalMovement") {
        data = await ListAllFetalRegisterController.getData(
          pregnantId,
          console.log()
        );
        const medidasMovimentos = data.map((medida) => {
          return {
            value: medida.FetusDisplacement,
            unity: "Movimento",
            date: medida.Date,
          };
        });
        setDados(medidasMovimentos);
        return;
      }
      if (type === "Glicose") {
        data = await ListAllGlicoseRegisterController.getData(
          pregnantId,
          console.log()
        );
        const medidasGlicose = data.map((medida) => {
          return {
            value: medida.BloodGlucose,
            unity: "Glicose",
            date: medida.Date,
          };
        });
        setDados(medidasGlicose);
        return;
      }
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const getPatient = async () => {
    try {
      const responsePregantData = await GetOnePregnantDataController.getData(
        pregnantId
      );
      console.log(res)
      setPaciente(responsePregantData);
    } catch (error) {
      console.error("Erro ao buscar os dados do paciente:", error);
    }
  };

  return (
    <>

      <HStack
        wrap={"wrap"}
        gap={12}
        alignItems={"center"}
        justifyContent={"center"}
        mt={12}
      >
        {dados.map((medida) => (
          <HistoryCard
            value={medida.value}
            date={medida.date}
            unity={medida.unity}
          />
        ))}
      </HStack>
    </>
  );
}

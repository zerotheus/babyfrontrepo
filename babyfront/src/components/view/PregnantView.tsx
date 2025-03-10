import GetOnePregnantDataController from "@/adapters/controllers/GetOnePregnantDataController";
import { PatientCard } from "../primitive/PatientCard";
import { useEffect, useState } from "react";
import { calcularDiferencaSemanas } from "./PregnantDataView";
import { useNavigate, useParams } from "react-router";
import GetLastGestationOfAPatientController from "@/adapters/controllers/GetLastGestationOfAPatientController";
import { Button, Card, HStack, VStack } from "@chakra-ui/react";
import { Header } from "../primitive/Header";

export default function PregnantView() {
  const params = useParams();
  const [paciente, setPaciente] = useState({ patientName: "Usuário" });
  const navigate = useNavigate();
  const [baby, setBaby] = useState({ gestationID: "0", babynickname: "0" });
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson);
  const id = params.id;

  useEffect(() => {
    if (!id) return;
    getLastGestation();
    getPatient();
  }, []);

  const getPatient = async () => {
    try {
      const responsePregantData = await GetOnePregnantDataController.getData(
        id,
        () => {}
      );
      setPaciente(responsePregantData);
      console.log(id);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const getLastGestation = async () => {
    const res = await GetLastGestationOfAPatientController.getData(
      id,
      () => {}
    );
    setBaby(res);
  };

  return (
    <>
      <VStack justifyContent={"center"} gap={30}>
      <Header user={{ name: user.name }}></Header>
        <PatientCard 
          patientName={paciente.patientName}
          gestation={paciente.babyName}
          week={calcularDiferencaSemanas(paciente.initialDate)}
        />
        <Card.Root>
          <Card.Body>
            <Button
              onClick={() => {
                navigate(`/PregnantData/${baby.gestationID}`);
              }}
            >
              {baby.babynickname}
            </Button>
          </Card.Body>
        </Card.Root>
      </VStack>
    </>
  );
}

import GetOnePregnantDataController from "@/adapters/controllers/GetOnePregnantDataController";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function DataHistory() {
    const pregnantId = localStorage.getItem("pregnant")
    const [paciente,setPaciente] = useState()


    useEffect(() => {
        getPatient(pregnantId)

    },[])

    const getPatient = async () => {
        try {
          const responsePregantData = await GetOnePregnantDataController.getData(id, () => {})
          setPaciente(responsePregantData)
          
        } catch (error) {
          console.error("Erro ao buscar os dados:", error);
        }
     };

return (
    <>
        <Text> {pregnantId}</Text>
        
    </>
);

}
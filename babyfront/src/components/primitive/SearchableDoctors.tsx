import { useEffect, useState } from "react";
import { InputGroup } from "../ui/input-group";
import { HStack, Input, Table, VStack, } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import ListAllDoctorsController from "@/adapters/controllers/ListAllDoctorsController";
import { ListAllDoctorsResponse } from "../../usecases/ListAllDoctorUseCaseImpl/ListAllDoctorsDto";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchableDoctors() {
  const [input, setInput] = useState("");
  const [doctors, setDoctors] = useState<ListAllDoctorsResponse>();
  const navigate = useNavigate()

  const getDoctors = async (dados) => {
    console.log(dados);
    setDoctors(dados);
  };

  useEffect(() => {
    ListAllDoctorsController.list(getDoctors);

  }, []);

  return (
    <VStack gap={30}>
      <InputGroup flex="1" startElement={<LuSearch />} mt={30}>
        <Input
          placeholder="Procure por um médico(a)"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          size={'xl'}
          width={320}
        />
      </InputGroup>
      {doctors ? (
        <Table.Root size="lg" width={400}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Nome</Table.ColumnHeader>
              <Table.ColumnHeader>Especialização</Table.ColumnHeader>
              <Table.ColumnHeader>CRM</Table.ColumnHeader>
              <Table.ColumnHeader fontWeight={'bold'}>Ações</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {doctors
              ?.filter((doctor) =>
                doctor.name.toLowerCase().includes(input.toLowerCase())
              )
              .map((doctor) => (
                <Table.Row key={doctor.doctorID}>
                  <Table.Cell>{doctor.name}</Table.Cell>
                  <Table.Cell>{doctor.specialization}</Table.Cell>
                  <Table.Cell>{doctor.CRM}</Table.Cell>
                  <Table.Cell textAlign={"center"}>
                    <HStack>
                      <FaRegEye cursor={"pointer"} size={24} onClick={() => navigate(`/PregnantData/:${pregnant.userID}`)} />
                      <FaRegTrashAlt cursor={"pointer"} size={24} color="red" />
                    </HStack>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table.Root>
      ) : (
        <></>
      )}
    </VStack>
  );
}

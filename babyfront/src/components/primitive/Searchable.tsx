import { useEffect, useState } from "react";
import { InputGroup } from "../ui/input-group";
import { Input, Table, Text, VStack } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import ListAllDoctorsController from "@/adapters/controllers/ListAllDoctorsController";
import { ListAllDoctorsResponse } from "../../usecases/ListAllDoctorUseCaseImpl/ListAllDoctorsDto";

export default function Searchable() {
  const [input, setInput] = useState("");
  const [doctors, setDoctors] = useState<ListAllDoctorsResponse>();

  const getDoctors = async (dados) => {
    setDoctors(dados);
  };

  useEffect(() => {
    ListAllDoctorsController.list(getDoctors);
  }, []);

  return (
    <>
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          placeholder="Search contacts"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </InputGroup>
      {doctors ? (
        <Table.Root size="sm" width={400}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Nome</Table.ColumnHeader>
              <Table.ColumnHeader>Especialização</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { doctors
              ?.filter((doctor) =>
                doctor.name.toLowerCase().includes(input.toLowerCase())
              )
              .map((doctor) => (
                <Table.Row key={doctor.doctorID}>
                  <Table.Cell>{doctor.name}</Table.Cell>
                  <Table.Cell>{doctor.specialization}</Table.Cell>
                  <Table.Cell textAlign="end">{doctor.CRM}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table.Root>
      ) : (
        <></>
      )}
    </>
  );
}

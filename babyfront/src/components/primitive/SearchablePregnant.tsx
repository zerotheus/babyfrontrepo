import { useEffect, useState } from "react";
import { InputGroup } from "../ui/input-group";
import { Box, HStack, Input, Table, Text, VStack } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import ListAllPregnantController from "@/adapters/controllers/ListAllPregnantController";
import { useNavigate } from "react-router";

export default function SearchablePregnants() {
    const [input, setInput] = useState("");
    const [pregnants, setPregnants] = useState([]);
    const navigate = useNavigate()

    const getPregnants = async (dados) => {

        console.log(dados);
        setPregnants(dados);


    };

    useEffect(() => {
        ListAllPregnantController.getData(getPregnants);
    }, []);

    return (
        <VStack gap={30}>
            <InputGroup flex="1" startElement={<LuSearch />} mt={30}>
                <Input
                    placeholder="Procure por uma paciente"
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    size={'xl'}
                    width={320}
                />
            </InputGroup>
            {pregnants ? (

                <Table.Root size="lg" width={400}  >
                    <Table.Header>
                        <Table.Row >
                            <Table.ColumnHeader fontWeight={'bold'}>Nome</Table.ColumnHeader>
                            <Table.ColumnHeader fontWeight={'bold'} >Email</Table.ColumnHeader>
                            <Table.ColumnHeader fontWeight={'bold'}>Telefone</Table.ColumnHeader>
                            <Table.ColumnHeader fontWeight={'bold'}>Data de nascimento</Table.ColumnHeader>
                            <Table.ColumnHeader fontWeight={'bold'}>Data de cadastro</Table.ColumnHeader>
                            <Table.ColumnHeader fontWeight={'bold'}>Ações</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {pregnants
                            ?.filter((pregnant) =>
                                pregnant.nome.toLowerCase().includes(input.toLowerCase())
                            )
                            .map((pregnant) => (
                                <Table.Row key={pregnant.userID}>
                                    <Table.Cell>{pregnant.nome}</Table.Cell>
                                    <Table.Cell>{pregnant.email}</Table.Cell>
                                    <Table.Cell>{pregnant.telefone}</Table.Cell>
                                    <Table.Cell>{pregnant.birthday}</Table.Cell>
                                    <Table.Cell>{pregnant.registerDate}</Table.Cell>
                                    <Table.Cell >
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

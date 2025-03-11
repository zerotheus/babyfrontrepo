import { useEffect, useImperativeHandle, useState, forwardRef } from "react";
import { InputGroup } from "../ui/input-group";
import { Box, Button, HStack, Input, Kbd, Stack, Table, Text, VStack } from "@chakra-ui/react";
import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
} from "../ui/pagination"
import {
    ActionBarCloseTrigger,
    ActionBarContent,
    ActionBarRoot,
    ActionBarSelectionTrigger,
    ActionBarSeparator,
} from "../ui/action-bar"

import { LuBaby, LuSearch } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import ListAllPregnantController from "@/adapters/controllers/ListAllPregnantController";
import { useNavigate } from "react-router";
import { Checkbox } from "../ui/checkbox";

const SearchablePregnants = forwardRef((props, ref) => {

    const [input, setInput] = useState("");
    const [pregnants, setPregnants] = useState([]);
    const [page, setPage] = useState(1)
    const [selection, setSelection] = useState<string[]>([])
    const hasSelection = selection.length > 0
    const indeterminate = hasSelection && selection.length < pregnants.length

    useImperativeHandle(ref, () => ({
        getPatients: () => selection,
    }));


    const navigate = useNavigate()

    const getPregnants = async (dados) => {

        console.log(dados);
        setPregnants(dados);


    };

    useEffect(() => {
        ListAllPregnantController.getData(getPregnants);
    }, []);
    console.log(pregnants.length);

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
                <Stack gap="5">
                    <Table.Root size="lg" width={400}  >
                        <Table.Header>
                            <Table.Row >
                                {/* <Checkbox
                                    top="1"
                                    aria-label="Select all rows"
                                    checked={indeterminate ? "indeterminate" : selection.length > 0}
                                    onCheckedChange={(changes) => {
                                        setSelection(
                                            changes.checked ? pregnants.map((item) => item.patientID) : [],
                                        )
                                    }}
                                /> */}
                                <Table.ColumnHeader fontWeight={'bold'}>Selecione</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={'bold'}>Nome</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={'bold'}>Email</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={'bold'}>Telefone</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={'bold'}>Data de nascimento</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={'bold'}>Data de cadastro</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={'bold'}>Gestações</Table.ColumnHeader>
                                <Table.ColumnHeader fontWeight={'bold'}>Ações</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {pregnants
                                ?.filter((pregnant) =>
                                    pregnant.nome.toLowerCase().includes(input.toLowerCase())
                                ).slice((10 * page) - 10, 10 * (page))
                                .map((pregnant) => (
                                    <Table.Row key={pregnant.patientID} data-selected={selection.includes(pregnant.patientID) ? "" : undefined}>
                                        <Table.Cell>
                                            <Checkbox
                                                top="1"
                                                aria-label="Select row"
                                                checked={selection.includes(pregnant.patientID)}
                                                onCheckedChange={(changes) => {
                                                    setSelection((prev) => {
                                                        console.log(prev)

                                                        return changes.checked
                                                            ? [...prev, pregnant.patientID]
                                                            : selection.filter((name) => name !== pregnant.patientID)
                                                    }
                                                    )

                                                }}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>{pregnant.nome}</Table.Cell>
                                        <Table.Cell>{pregnant.email}</Table.Cell>
                                        <Table.Cell>{pregnant.telefone}</Table.Cell>
                                        <Table.Cell>{pregnant.birthday}</Table.Cell>
                                        <Table.Cell>{pregnant.registerDate} </Table.Cell>
                                        <Table.Cell> <LuBaby title="Cadastrar gestação" cursor={"pointer"} size={24} color="red" /> </Table.Cell>
                                        <Table.Cell >
                                            <HStack>
                                                <FaRegEye cursor={"pointer"} size={24} onClick={() => navigate(`/Pregnant/${pregnant.patientID}`)} />
                                                <FaRegTrashAlt cursor={"pointer"} size={24} color="red" />
                                            </HStack>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                        </Table.Body>
                    </Table.Root>
                    <ActionBarRoot open={hasSelection}>
                        <ActionBarContent>
                            <ActionBarSelectionTrigger>
                                {selection.length} selected
                            </ActionBarSelectionTrigger>
                            <ActionBarSeparator />
                            <Button variant="outline" size="sm">
                                Delete <Kbd>⌫</Kbd>
                            </Button>
                            <Button variant="outline" size="sm">
                                Share <Kbd>T</Kbd>
                            </Button>
                        </ActionBarContent>
                    </ActionBarRoot>
                    <PaginationRoot
                        count={pregnants.length}
                        pageSize={10}
                        page={page}
                        onPageChange={(e) => setPage(e.page)}
                    >
                        <HStack wrap="wrap">
                            <PaginationPrevTrigger />
                            <PaginationItems />
                            <PaginationNextTrigger />
                        </HStack>
                    </PaginationRoot>
                </Stack>
            ) : (
                <></>
            )}
        </VStack>
    );

}
)

export default SearchablePregnants;
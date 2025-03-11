import { useEffect, useState } from "react";
import { InputGroup } from "../ui/input-group";
import { Button, HStack, Input, Kbd, Stack, Table, VStack, } from "@chakra-ui/react";
import { LuBaby, LuSearch } from "react-icons/lu";
import { ListAllusersResponse } from "../../usecases/ListAllDoctorUseCaseImpl/ListAllDoctorsDto";
import { FaRegEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../ui/checkbox";
import {  
  ActionBarContent,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "../ui/action-bar"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../ui/pagination"
import UserController from "@/adapters/controllers/UserController";
import User from "@/entities/User";



export default function SearchableUsers() {
  const [input, setInput] = useState("");  
  const [page, setPage] = useState(1);
  const [users, setUsers ] = useState<User[]>();
  const [selection, setSelection] = useState<string[]>([])
  const hasSelection = selection.length > 0  
  //const indeterminate = hasSelection && selection.length < doctors.length

  const navigate = useNavigate()

  const getUsers = async (data) => {
    console.log(data?.length);
    setUsers(data);
  };

  useEffect(() => {
    UserController.getAllUsers(getUsers);
  }, []);

  return (
    <VStack gap={30}>
      <InputGroup flex="1" startElement={<LuSearch />} mt={30}>
        <Input
          placeholder="Procure por um Usuário(a)"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          size={'xl'}
          width={320}
        />
      </InputGroup>
      {users ? (
        <Stack gap="5">

          <Table.Root size="lg" width={400}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader fontWeight={'bold'}>Selecione</Table.ColumnHeader>
                <Table.ColumnHeader fontWeight={'bold'}>Nome</Table.ColumnHeader>
                <Table.ColumnHeader fontWeight={'bold'}>Tipo</Table.ColumnHeader>                
                <Table.ColumnHeader fontWeight={'bold'}>Ações</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users?.filter((user) => user.name.toLowerCase().includes(input.toLowerCase()))
                .slice((10 * page) - 10, 10 * (page))
                .map((user) => (
                  <Table.Row key={user.uuid} data-selected={selection.includes(user.uuid) ? "" : undefined}>
                    <Table.Cell>
                      <Checkbox
                        top="1"
                        aria-label="Select row"
                        checked={selection.includes(user.uuid)}
                        onCheckedChange={(changes) => {
                          setSelection((prev) => {
                            console.log(prev)
                            return changes.checked ? 
                              [...prev, user.uuid] : selection.filter((name) => name !== user.uuid)
                            }
                        )}}
              />
                </Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.type==1? "Médico": "Paciente"}</Table.Cell>                                                
                <Table.Cell >
                    <HStack>
                        <FaRegEdit title="Editar" cursor={"pointer"} size={24} onClick={() => navigate(`/form/edit/${user.uuid}`, {state: {...user}})}/>
                        {/* <FaRegEye title="Criar" cursor={"pointer"} size={24} onClick={() => navigate(`/user`)} /> */}
                        <FaRegTrashAlt title="Deletar" cursor={"pointer"} size={24} color="red" />
                    </HStack>
                </Table.Cell>
              </Table.Row>))}
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
            count={users.length}
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

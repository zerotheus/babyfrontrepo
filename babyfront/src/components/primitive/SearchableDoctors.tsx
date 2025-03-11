import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { InputGroup } from "../ui/input-group";
import { Button, HStack, Input, Kbd, Stack, Table, VStack, } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import ListAllDoctorsController from "@/adapters/controllers/ListAllDoctorsController";
import { ListAllDoctorsResponse } from "../../usecases/ListAllDoctorUseCaseImpl/ListAllDoctorsDto";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../ui/checkbox";
import {
  ActionBarCloseTrigger,
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



const SearchableDoctors = forwardRef((props, ref) => {
  const [input, setInput] = useState("");
  const [doctors, setDoctors] = useState<ListAllDoctorsResponse>();
  const [page, setPage] = useState(1)
  const [selection, setSelection] = useState<string[]>([])
  const hasSelection = selection.length > 0
  const indeterminate = hasSelection && selection.length < doctors.length

  const navigate = useNavigate()

  useImperativeHandle(ref, () => ({
    getDoctors: () => selection
  }));



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
        <Stack gap="5">

          <Table.Root size="lg" width={400}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader fontWeight={'bold'}>Selecione</Table.ColumnHeader>
                <Table.ColumnHeader fontWeight={'bold'}>Nome</Table.ColumnHeader>
                <Table.ColumnHeader fontWeight={'bold'}>Especialização</Table.ColumnHeader>
                <Table.ColumnHeader fontWeight={'bold'}>CRM</Table.ColumnHeader>
                <Table.ColumnHeader fontWeight={'bold'}>Ações</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {doctors
                ?.filter((doctor) =>
                  doctor.name.toLowerCase().includes(input.toLowerCase())
                ).slice((10 * page) - 10, 10 * (page))
                .map((doctor) => (
                  <Table.Row key={doctor.doctorID} data-selected={selection.includes(doctor.userID) ? "" : undefined}>
                    <Table.Cell>
                      <Checkbox
                        top="1"
                        aria-label="Select row"
                        checked={selection.includes(doctor.doctorID)}
                        onCheckedChange={(changes) => {
                          setSelection((prev) => {
                            console.log(prev)

                            return changes.checked
                              ? [doctor.doctorID]
                              : selection.filter((name) => name !== doctor.doctorID)
                          }
                          )

                        }}
                      />
                    </Table.Cell>
                    <Table.Cell>{doctor.name}</Table.Cell>
                    <Table.Cell>{doctor.specialization}</Table.Cell>
                    <Table.Cell>{doctor.CRM}</Table.Cell>
                    <Table.Cell textAlign={"center"}>
                      <HStack>
                        <FaRegEye cursor={"pointer"} size={24} onClick={() => navigate(`/Doctor/:${doctor.userID}`)} />
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
            count={doctors.length}
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

export default SearchableDoctors
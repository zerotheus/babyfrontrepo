import { MdOutlinePregnantWoman } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { Button, Card, Group, HStack, Text } from "@chakra-ui/react"
import {
    StepsCompletedContent,
    StepsContent,
    StepsItem,
    StepsList,
    StepsNextTrigger,
    StepsPrevTrigger,
    StepsRoot,
} from "../ui/steps"
import { LuCalendar, LuUser, LuWallet } from "react-icons/lu"
import SearchablePregnants from "../primitive/SearchablePregnant"
import SearchableDoctors from "../primitive/SearchableDoctors"
import { Avatar } from "@/components/ui/avatar"
import SelectMedicCard from "../primitive/SelectMedicCard";
import SelectPatientCard from "../primitive/SelectPatientCard";
import { useNavigate } from "react-router";


export function AssociatePregnantDoctor() {

    const navigate = useNavigate();

    return (
        <StepsRoot defaultValue={1} count={2} width={920} my={16} mx={'auto'}>
            <StepsList>
                <StepsItem index={0} icon={<LuUser />} />
                <StepsItem index={1} icon={<LuWallet />} />
            </StepsList>
            <Group justifyContent={'space-between'} mt={4}>
                <StepsPrevTrigger asChild>
                    <Button variant="outline" size="lg">
                        Voltar
                    </Button>
                </StepsPrevTrigger>
                <StepsNextTrigger asChild>
                    <Button variant="outline" size="lg">
                        Próximo
                    </Button>
                </StepsNextTrigger>
            </Group>

            <StepsContent index={0}>
                <Text textStyle="3xl">
                    Escolher Paciente
                </Text>
                <SearchablePregnants />

            </StepsContent>

            <StepsContent index={1}>
                <Text textStyle="3xl">
                    Escolher Paciente
                </Text>
                <SearchableDoctors />
            </StepsContent>

            <StepsCompletedContent>
                <Text textStyle="3xl">
                    Confirmação
                </Text>
                <HStack gap={20} mt={8}>
                    <Card.Root width="420px">
                        <Card.Body gap="2" >
                            <Card.Title mt="2">Paciente(s)</Card.Title>

                            
                            <SelectPatientCard name={'joana'} babyName={'Jorge'}/>
                        </Card.Body>

                    </Card.Root>

                    <SelectMedicCard name={'joana'} babyName={'Jorge'}/>
                </HStack>

                <Button mt={4} marginLeft={4} onClick={() => navigate('/Home')}>Confirmar</Button>
            </StepsCompletedContent>


        </StepsRoot>
    )
}
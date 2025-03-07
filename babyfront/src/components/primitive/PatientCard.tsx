import { Box, Button, Card, Image, Text } from "@chakra-ui/react"

export const PatientCard = (props) => (
    <Card.Root flexDirection="row" overflow="hidden" width="90%" maxWidth={600} >
        <Image
            objectFit="cover"
            maxW="200px"
            src="https://media.istockphoto.com/id/1424952952/pt/foto/brazilian-ethnicity-pregnant-woman.jpg?s=612x612&w=0&k=20&c=8oayoMWe7f9tidvn1UGlckaTQz5rjhmKt-BGaOrFCl4="
            alt="Paciente"
        />
        <Box>
            <Card.Body >
                <Card.Title fontSize={28} mb="4">Dados da paciente</Card.Title>
                <Card.Description>
                    <Text fontSize={18}> Nome: {props.patientName}</Text>
                    <Text fontSize={18}> Idade: {props.age} </Text>
                    <Text fontSize={18}> Gestação: {props.gestation}</Text>
                    <Text fontSize={18}> Semana de gestação: {props.week} </Text>
                </Card.Description>
            </Card.Body>
            <Card.Footer>
                <Button>Associar medico</Button>
                <Button>Registrar nascimento</Button>
            </Card.Footer>
        </Box>
    </Card.Root >
)

import RegistrationGestationController from "@/adapters/controllers/RegisterGestationController";
import { Field, HStack, Input, StackSeparator, VStack, NumberInput, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router";

export default function FormGestation() {
    const [patientID, setPatientID] = useState("");
    const [babyNickName, setBabyNickName] = useState("");
    const [selectedExpectedBirthDate, setSelectedExpectedBirthDate] = useState(new Date());
    const [pregnancyWeek, setPregnancyWeek] = useState(1);
    const [selectedMenstruationDate, setSelectedMenstruationDate] = useState(new Date());
    const [selectedUltrasoundDate, setSelectedUltrasoundDate] = useState(new Date());
    const [equipament, setEquipament] = useState("");
    const location = useLocation();
    const state = location.state;
    
    async function clickBtnSave(): Promise<void> {
                
        const gestationData: any = {
            gestationID: state.uuid,
            patientID: state.user.uuid,
            babynickname: babyNickName,
            date: new Date(),
            expectedbirthdate: selectedExpectedBirthDate,
            pregnancyweek: pregnancyWeek,
            menstruationdate: selectedMenstruationDate,
            ultrasounddate: selectedUltrasoundDate,
            equipament: equipament
        }
        RegistrationGestationController.save(gestationData, (data) => console.log("data: " + JSON.stringify(data)));
    }
    return (
        <>
            <VStack
                separator={<StackSeparator/>}
                gap="12px"
            >

            <form
                name="myForm"
                id="form"
                >
                <VStack gap="12px" mt={'32px'}>
                    <Field.Root>
                        <Field.Label>Nome do Bebê: </Field.Label>
                        <Input
                            placeholder="Nome do Bebê"
                            type="text"
                            name="name"
                             _focus={{
                                    borderColor: '#fe6070',
                                    boxShadow: '0 0 0 1px #fe6070',
                                    outline: 'none' 
                                    }}
                            value={babyNickName}
                            onChange={(e) => setBabyNickName(e.target.value)}
                            />
                    </Field.Root>
                    
                    <Field.Root>
                        <Field.Label>Data da Última menstruação: </Field.Label>
                        <Input
                            type="datetime-local"
                            name="datetime"
                            _focus={{
                                borderColor: '#fe6070',
                                boxShadow: '0 0 0 1px #fe6070',
                                outline: 'none' 
                                }}
                            value={selectedMenstruationDate}
                            onChange={(e) => setSelectedMenstruationDate(e.target.value)}
                        />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Data da Primeira Ultrassonografia: </Field.Label>
                        <Input
                            type="datetime-local"
                            name="datetime"
                             _focus={{
                                    borderColor: '#fe6070',
                                    boxShadow: '0 0 0 1px #fe6070',
                                    outline: 'none' 
                                    }}
                            value={selectedUltrasoundDate}
                            onChange={(e) => setSelectedUltrasoundDate(e.target.value)}
                        />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Semana de Gestação: </Field.Label>
                        <NumberInput.Root 
                            defaultValue="1"
                            min={1}
                            width={300}
                            
                        >
                            <NumberInput.Control/>
                            <NumberInput.Input
                                 _focus={{
                                    borderColor: '#fe6070',
                                    boxShadow: '0 0 0 1px #fe6070',
                                    outline: 'none' 
                                    }}
                                onChange={(e) => setPregnancyWeek(e.target.value)}
                            />
                        </NumberInput.Root>
                    </Field.Root>

                    <Field.Root>

                    </Field.Root>
                    <Button 
                        onClick={clickBtnSave}
                        bgColor="#fe6070"
                        color="#FAFAFA"
                        loading={false}
                        size="xl"
                    >
                        Salvar
                    </Button>
                </VStack>
            </form>
        </VStack>
        </>
    )
}
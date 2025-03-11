import UserController from "@/adapters/controllers/UserController";

import { HStack, Input, StackSeparator, Button, VStack, Field, NativeSelect, Text  } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { withMask } from "use-mask-input";

export default function Form() {    
    const [uuid, setUuid] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState(0);
    const [type, setType] = useState(1);
    const [address, setAddress] = useState("");    
    const [crm, setCrm] = useState("");
    const [specialization, setSpecialization] = useState("");
    const location = useLocation();
    const [editMode, setEditMode] = useState(location.pathname.includes("edit"));
    const [state, setState] = useState(location.state);
    console.log("state: " + JSON.stringify(state));
    
    
    useEffect(() => {                
        if (editMode) {
            if (state.type == 1) {
                setUuid(state.uuid);
                setName(state.name);
                setEmail(state.email);
                setBirthdate(state.birthdate);
                setPhone(state.phone);
                setGender(state.gender);
                setPassword(state.password);
                setCrm(state.crm);
                setType(state.type);
                setAddress(state.address);
                              
            }
            else if (state.type == 2) {
                setUuid(state.uuid);
                setName(state.name);
                setEmail(state.email);
                setBirthdate(state.birthdate);
                setPhone(state.phone);
                setGender(state.gender);
                setPassword(state.password);                
                setType(state.type);
                setAddress(state.address);
            }
        }
    }, []);

    console.log("Form | After UseEffect");

    function clickBtnSave() {        
        
        let user;
        if (editMode) {
            if (type == 1) {

                user = {
                     uuid: uuid,
                     login: email,
                     password: password,
                     name: name,
                     address: address,
                     phone: phone, 
                     email: email,
                     gender: gender, // 0 - Male, 1 - Female,
                     birthdate: birthdate,
                     date: new Date(),
                     image: "", 
                     type: type, // 0 - Adm, 1 - Doctor, 2 - Pregnant
                     thirdpartyuser: false,
                     isConfirmedEmail: false,
                     CRM: crm,
                     specialization: specialization
                }
                
            }
            else {
                user = {
                    uuid: uuid,
                    login: email,
                    password: password,
                    name: name,
                    address: 'Rua Cristo Redentor',
                    phone: phone, 
                    email: email,
                    gender: gender, // 0 - Male, 1 - Female,
                    birthdate: birthdate,
                    date: new Date(),
                    image: "", 
                    type: type, // 0 - Adm, 1 - Doctor, 2 - Pregnant
                    thirdpartyuser: false,
                    isConfirmedEmail: false,
               }
            }
            
        }
        else {
            if (type == 1) {
    
                user = {
                     uuid: '',
                     login: email,
                     password: password,
                     name: name,
                     address: address,
                     phone: phone, 
                     email: email,
                     gender: gender, // 0 - Male, 1 - Female,
                     birthdate: birthdate,
                     date: new Date(),
                     image: "", 
                     type: type, // 0 - Adm, 1 - Doctor, 2 - Pregnant
                     thirdpartyuser: false,
                     isConfirmedEmail: false,
                     CRM: crm,
                     specialization: specialization
                }
                
            }
            else {
                user = {
                    uuid: '',
                    login: email,
                    password: password,
                    name: name,
                    address: 'Rua Cristo Redentor',
                    phone: phone, 
                    email: email,
                    gender: gender, // 0 - Male, 1 - Female,
                    birthdate: birthdate,
                    date: new Date(),
                    image: "", 
                    type: type, // 0 - Adm, 1 - Doctor, 2 - Pregnant
                    thirdpartyuser: false,
                    isConfirmedEmail: false,
               }
            }
        }
        
        console.log("obj: " + JSON.stringify(user));
        UserController.save(user, (data) => console.log("response data: " + data));
    }

    return (
        <>
            <VStack
                separator={<StackSeparator />}
                gap="12px"
            >
                <Text fontSize="lg" fontWeight="bold" color="#1F2024">Faça seu cadastro</Text>
                <Text fontSize="medium" fontWeight="normal" color="#71727A"> Crie uma conta para aproveitar nossos serviços!</Text>
                <form 
                    name="myForm"
                    id="form"                    
                >
                    <VStack gap="12px">                        
                        <Field.Root>
                            <Field.Label>Nome Completo: </Field.Label>
                            <Input 
                                placeholder="Nome Completo"
                                type="text"
                                name="name"
                                outlineColor="#A78BFA"
                                value={editMode ? name : null}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Field.Root>
                        <HStack>
                            
                            <Field.Root>
                                <Field.Label>Email: </Field.Label>
                                <Input 
                                    placeholder="nome@email.com"
                                    type="email"
                                    name="email"
                                    outlineColor="#A78BFA"
                                    value={editMode ? email : null}
                                    onChange={(e) => setEmail(e.target.value)}
                                    
                                />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>Telefone: </Field.Label>
                                <Input
                                    placeholder="(99) 99999-9999"
                                    type="text"
                                    name="phone"
                                    outlineColor="#A78BFA"
                                    ref={withMask("(99) 99999-9999")}
                                    value={editMode ? phone : null}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Field.Root>

                        </HStack>
                        <Field.Root>
                            <Field.Label>Endereço: </Field.Label>
                            <Input 
                                placeholder="Endereço"
                                type="text"
                                name="address"
                                outlineColor="#A78BFA"
                                value={editMode ? address : null}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label>Senha: </Field.Label>                            
                            <Input 
                                placeholder="Crie uma senha segura"
                                type="password"
                                name="password"
                                outlineColor="#A78BFA"
                                value={editMode ? password : null}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Field.Root>
                        <Field.Root>                            
                            <Input
                                placeholder="Confirme a senha"
                                type="password"
                                outlineColor="#A78BFA"
                                value={editMode ? password : null} 
                            />
                        </Field.Root>
                        <HStack>
                            <Field.Root>
                                <Field.Label>
                                    Data de Nascimento: 
                                </Field.Label>
                                <Input                                     
                                    type="datetime-local"
                                    name="datetime"
                                    outlineColor="#A78BFA"
                                    value={editMode ? birthdate : null}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>
                                    Gênero
                                </Field.Label>
                                <NativeSelect.Root>
                                    <NativeSelect.Field 
                                        name="gender"
                                        outlineColor="#A78BFA"
                                        value={editMode ? gender : 0}
                                        onChange={(e) => setGender(Number(e.target.value))} 
                                    >                                        
                                        
                                        <option value="0">Masculino</option>
                                        <option value="1">Feminio</option>
                                    </NativeSelect.Field>
                                </NativeSelect.Root>
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>
                                    Função
                                </Field.Label>
                                <NativeSelect.Root>
                                    <NativeSelect.Field 
                                        name="type"
                                        outlineColor="#A78BFA"
                                        value={editMode ? type : type}
                                        onChange={(e) => setType(Number(e.target.value))}
                                    >
                                        <option value="1">Médico</option>
                                        <option value="2">Paciente</option>
                                    </NativeSelect.Field>
                                </NativeSelect.Root>
                            </Field.Root>
                        </HStack>
                        
                        
                            <Field.Root
                                disabled={type === 1 ? false : true}
                                hidden={type === 1 ? false : true}
                            >
                                <Field.Label>
                                    CRM
                                </Field.Label>
                                <Input
                                    placeholder="CRM"
                                    type="text"
                                    name="crm"
                                    outlineColor="#A78BFA"                                                                            
                                />
                            </Field.Root> 
                            <Field.Root
                                disabled={type === 1 ? false : true}
                                hidden={type === 1 ? false : true}
                            >
                                <Field.Label>Especialização: </Field.Label>
                                <NativeSelect.Root>
                                    <NativeSelect.Field
                                        name="specialization"
                                        outlineColor="#A78BFA"
                                    >
                                        <option value="1">Pediatra</option>
                                    </NativeSelect.Field>
                                </NativeSelect.Root>
                            </Field.Root>
                          
                        <Button 
                            onClick={clickBtnSave}
                            bgColor="#5B21B6"
                            color="#FAFAFA"
                            loading={false}
                            size="xl"
                        >
                            Click
                        </Button>
                    </VStack>                    
                </form>
            </VStack>
        </>
    )
}   
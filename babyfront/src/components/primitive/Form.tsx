import UserController from "@/adapters/controllers/UserController";
import { getTimeFromDate } from "../view/PregnantDataView";
import { HStack, Input, StackSeparator, Button, VStack, Field, NativeSelect, Text  } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { withMask } from "use-mask-input";

export default function Form() {    
    const [uuid, setUuid] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthdate] = useState(new Date().toISOString().slice(0, 16));
    const [gender, setGender] = useState(0);
    const [type, setType] = useState(1);
    const [address, setAddress] = useState("");    
    const [crm, setCrm] = useState("");
    const [specialization, setSpecialization] = useState("");
    const location = useLocation();
    const [editMode, setEditMode] = useState(location.pathname.includes("edit"));
    const [state, setState] = useState(location.state);
    const navigate = useNavigate();
        
    function convertDate(date: string): string {
        const formattedDate = new Date(date).toISOString().slice(0, 16);
        return formattedDate;
    }


    useEffect(() => {          
        if (editMode) {
            if (state.type == 1) {
                setUuid(state.uuid);
                setName(state.name);
                setEmail(state.email);
                setBirthdate(convertDate(state.birthdate));
                setPhone(state.phone);
                setGender(state.gender);
                
                setCrm(state.crm);
                setType(state.type);
                setAddress(state.address);
                              
            }
            else if (state.type == 2) {
                setUuid(state.uuid);
                setName(state.name);
                setEmail(state.email);
                setBirthdate(convertDate(state.birthdate));
                setPhone(state.phone);
                setGender(state.gender);
                                
                setType(state.type);
                setAddress(state.address);
            }
        }
    }, []);
    

    function clickBtnSave() {        
        
        let _user;
        if (editMode) {
            if (type == 1) {

                _user = {
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
                _user = {
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
               }
            }
            
        }
        else {
            if (type == 1) {
    
                _user = {
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
                _user = {
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
               }
            }
        }
                
        type === 1 ?
            UserController.save(_user, (data) => console.log("response data: " + JSON.stringify(data)))
            : UserController.save(_user, (data) => {
                if (data?.id) {
                    _user.uuid = data?.id
                    navigate("/form/gestation", {
                        state: {
                            user: {..._user},
                        }
                    });
                }
            });
        
    }

    return (
        <>
            <VStack 
                mt={12}
                // separator={<StackSeparator />}
                gap="12px"
            >
                <Text fontSize="3xl" fontWeight="bold" color="#1F2024">Faça seu cadastro</Text>
                <Text fontSize="lg" fontWeight="normal" color="#71727A"> Crie uma conta para aproveitar nossos serviços!</Text>
                <form 
                    name="myForm"
                    id="form"                    
                >
                    <VStack gap="12px" mt={4}>                        
                        <Field.Root>
                            <Field.Label>Nome Completo: </Field.Label>
                            <Input 
                                placeholder="Nome Completo"
                                type="text"
                                name="name"
                               _focus={{
                                    borderColor: '#fe6070',
                                    boxShadow: '0 0 0 1px #fe6070',
                                    outline: 'none' 
                                    }}
                                value={editMode ? name : null}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Field.Root>
                        <HStack>
                            
                            <Field.Root  >
                                <Field.Label>Email: </Field.Label>
                                <Input 
                                    placeholder="nome@email.com"
                                    type="email"
                                    name="email"
                                     _focus={{
                                        borderColor: '#fe6070',
                                        boxShadow: '0 0 0 1px #fe6070',
                                        outline: 'none' 
                                        }}
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
                                    _focus={{
                                    borderColor: '#fe6070',
                                    boxShadow: '0 0 0 1px #fe6070',
                                    outline: 'none' 
                                    }}
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
                                 _focus={{
                                    borderColor: '#fe6070',
                                    boxShadow: '0 0 0 1px #fe6070',
                                    outline: 'none' 
                                    }}
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
                                 _focus={{
                                    borderColor: '#fe6070',
                                    boxShadow: '0 0 0 1px #fe6070',
                                    outline: 'none' 
                                    }}
                                value={editMode ? password : null}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Field.Root>
                        <Field.Root>                            
                            <Input
                                placeholder="Confirme a senha"
                                type="password"
                                _focus={{
                                    borderColor: '#fe6070',
                                    boxShadow: '0 0 0 1px #fe6070',
                                    outline: 'none' 
                                    }}
                                value={editMode ? password : null} 
                            />
                        </Field.Root>
                        <HStack>
                            <Field.Root>
                                <Field.Label>
                                    Data de Nascimento: 
                                </Field.Label>
                                <Input                                     
                                    type="date"
                                    name="datetime"
                                    _focus={{
                                        borderColor: '#fe6070',
                                        boxShadow: '0 0 0 1px #fe6070',
                                        outline: 'none' 
                                    }}
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
                                        _focus={{
                                            borderColor: '#fe6070',
                                            boxShadow: '0 0 0 1px #fe6070',
                                            outline: 'none' 
                                            }}
                                        value={editMode ? gender : gender}
                                        onChange={(e) => setGender(Number(e.target.value))} 
                                    >                                        
                                        
                                        <option value="1">Masculino</option>
                                        <option value="0">Feminino</option>
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
                                        _focus={{
                                    borderColor: '#fe6070',
                                    boxShadow: '0 0 0 1px #fe6070',
                                    outline: 'none' 
                                    }}
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
                                    _focus={{
                                        borderColor: '#fe6070',
                                        boxShadow: '0 0 0 1px #fe6070',
                                        outline: 'none' 
                                        }}                                                                            
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
                                         _focus={{
                                            borderColor: '#fe6070',
                                            boxShadow: '0 0 0 1px #fe6070',
                                            outline: 'none' 
                                            }}
                                            >
                                        <option value="1">Pediatra</option>
                                    </NativeSelect.Field>
                                </NativeSelect.Root>
                            </Field.Root>
                          
                        <Button 
                            onClick={clickBtnSave}
                            bgColor="#fe6070"
                            color="#FAFAFA"
                            loading={false}
                            size="xl"
                        >
                            Avançar
                        </Button>
                    </VStack>                    
                </form>
            </VStack>
        </>
    )
}   
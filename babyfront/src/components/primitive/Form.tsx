import LoginController from "@/adapters/controllers/LoginController";
import UserController from "@/adapters/controllers/UserController";
import User from "@/entities/User";
import { HStack, Input, StackSeparator, Button, VStack, Field, NativeSelect, Text  } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { withMask } from "use-mask-input";

export default function Form() {
    const [activeInputDoctor, setActiveInputDoctor] = useState(1);
    const [user, setUser] = useState();
    const [change, setChange] = useState(true);
    const location = useLocation();
    const [editMode, setEditMode] = useState(location.pathname.includes("edit"))
    
    
    useEffect(() => {                
        if (editMode) {
            LoginController.login({login: "wiiiill97", password: "1234"}, (data: any) => {
                console.log("Response Login Controller: " + JSON.stringify(data));
                if (data?.userData) {
                    console.log("userData: " + JSON.stringify(data?.userData));
                    setUser(data?.userData)
                    console.log("User: " + user);
                }
            });
        }
    }, [change]);

    console.log("Form | After UseEffect");

    function clickBtnSave() {        
        const _name: string = document.forms["myForm"]["name"].value;
        const _phone: string = document.forms["myForm"]["phone"].value
        const _email: string = document.forms["myForm"]["email"].value;
        const _password: string = document.forms["myForm"]["password"].value;
        const _birthdate: number = document.forms["myForm"]["datetime"].value;
        const _gender: number = document.forms["myForm"]["gender"].value;
        const _type: number = document.forms["myForm"]["type"].value;
        const _crm: string = document.forms["myForm"]["crm"].value;
        const _specialization: string = document.forms["myForm"]["specialization"].value;
        const _address: string = document.forms["myForm"]["address"].value;
        let user;
        if (_type == 1) {

            user = {
                 uuid: '',
                 login: _email,
                 password: _password,
                 name: _name,
                 address: _address,
                 phone: _phone, 
                 email: _email,
                 gender: _gender, // 0 - Male, 1 - Female,
                 birthdate: _birthdate,
                 date: new Date(),
                 image: "", 
                 type: _type, // 0 - Adm, 1 - Doctor, 2 - Pregnant
                 thirdpartyuser: false,
                 isConfirmedEmail: false,
                 CRM: _crm,
                 specialization: _specialization
            }
            
        }
        else {
            user = {
                uuid: '',
                login: _login,
                password: _password,
                name: _name,
                address: 'Rua Cristo Redentor',
                phone: _phone, 
                email: _email,
                gender: _gender, // 0 - Male, 1 - Female,
                birthdate: _birthdate,
                date: new Date(),
                image: "", 
                type: _type, // 0 - Adm, 1 - Doctor, 2 - Pregnant
                thirdpartyuser: false,
                isConfirmedEmail: false,
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
                                value={editMode ? user?.name : null}
                            />
                        </Field.Root>
                        <HStack>
                            <Field.Root>
                                <Field.Label>Telefone: </Field.Label>
                                <Input
                                    placeholder="(99) 99999-9999"
                                    type="text"
                                    name="phone"
                                    outlineColor="#A78BFA"
                                    ref={withMask("(99) 99999-9999")}
                                    value={editMode ? user?.phone : null}
                                />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Email: </Field.Label>
                                <Input 
                                    placeholder="nome@email.com"
                                    type="email"
                                    name="email"
                                    outlineColor="#A78BFA"
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
                                value={editMode ? user?.address : null}
                            />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label>Senha: </Field.Label>                            
                            <Input 
                                placeholder="Crie uma senha segura"
                                type="password"
                                name="password"
                                outlineColor="#A78BFA"
                            />
                        </Field.Root>
                        <Field.Root>                            
                            <Input
                                placeholder="Confirme a senha"
                                type="password"
                                outlineColor="#A78BFA"
                            />
                        </Field.Root>
                        <HStack>
                            <Field.Root>
                                <Field.Label>
                                    Data de Nascimento: 
                                </Field.Label>
                                <Input 
                                    placeholder="Confirme a senha"
                                    type="datetime-local"
                                    name="datetime"
                                    outlineColor="#A78BFA"
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
                                        onChange={() => document.forms["myForm"]["type"].value == 1 ? setActiveInputDoctor(1) : setActiveInputDoctor(0)}
                                    >
                                        <option value="1">Médico</option>
                                        <option value="2">Paciente</option>
                                    </NativeSelect.Field>
                                </NativeSelect.Root>
                            </Field.Root>
                        </HStack>
                        
                        
                            <Field.Root
                                disabled={activeInputDoctor === 1 ? false : true}
                                hidden={activeInputDoctor === 1 ? false : true}
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
                                disabled={activeInputDoctor === 1 ? false : true}
                                hidden={activeInputDoctor === 1 ? false : true}
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
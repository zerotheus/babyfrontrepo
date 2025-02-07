import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Text, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import LoginController from "@/adapters/controllers/LoginController";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();  
  
    const login = async () =>  {
      const response = await LoginController.login({ login: email, password }, authentication);
      localStorage.setItem("user",JSON.stringify(response.user));
    };
  
    const authentication = (response) => {
      if (response.status === 0) {
        setError("Login ou senha inválidos!");
      } else if (response.status === 1) {
        navigate("/home"); // Redireciona para o dashboard
      } else if (response.status === 2) {
        navigate("/home"); // Redireciona para o dashboard
      } else if (response.status === 3) {
        navigate("/home"); // Redireciona para o dashboard
      }
      return response.user;
    };
  
    return (
      <VStack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Text textStyle={"5xl"}>Seja bem vindo ao baby move</Text>
        <Text textStyle={"3xl"}>Login</Text>
        <VStack alignItems={"center"}>
          <Field label="Email:" errorText="Campo obrigatório">
            <Input
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </Field>
          <Field label="Senha:" errorText="Campo obrigatório">
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Field>
        </VStack>
        {error && <p>{error}</p>}
          <Button onClick={login}>Entrar</Button>
      </VStack>
    );
  }
  
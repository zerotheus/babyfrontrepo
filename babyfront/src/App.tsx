import { createContext, useState } from "react";
import LoginController from "./adapters/controllers/LoginController";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/view/Home";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import React from "react";
import User from "./entities/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<Dashboard />} />
    </Routes>
  );
}

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user,setUser] = useState("");
  const navigate = useNavigate();

  const login = () => {
    LoginController.login({ login: email, password }, authentication);
  };

  const authentication = (response) => {
    console.log(response);
    if (response.status === 0) {
      setError("Login ou senha inválidos!");
    } else if (response.status === 1) {
      navigate("/home"); // Redireciona para o dashboard
    } else if (response.status === 2) {
      navigate("/home"); // Redireciona para o dashboard
    } else if (response.status === 3) {
      navigate("/home"); // Redireciona para o dashboard
    }
    setUser(response.user)
  };

  return (
    <VStack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Text textStyle={"5xl"}>Seja bem vindo ao baby move</Text>
      <Text  textStyle={"3xl"}>Login</Text>
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

export default App;

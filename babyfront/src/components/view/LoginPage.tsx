import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Image, Input, Text, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import LoginController from "@/adapters/controllers/LoginController";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const response = await LoginController.login({ login: email, password }, authentication);
    localStorage.setItem("user", JSON.stringify(response.user));
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
    <VStack height={"100vh"} gap={18} alignItems={"center"} justifyContent={"center"} >
      <VStack justifyContent={"center"}>
        <Image
          src="src/assets/logo2.svg"
          width={'60vh'}
          borderRadius={20}
        />
        <Text textStyle={"5xl"} mt={4}>
          Seja bem-vindo(a)!
        </Text>
        <Text textStyle={"2xl"} >
          Faça seu login
        </Text>
      </VStack>

      <VStack alignItems={"center"}>
        <Field label="Email:" errorText="Campo obrigatório">
          <Input
            size={'lg'}
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            _focus={{
              borderColor: '#fe6070',
              boxShadow: '0 0 0 1px #fe6070',
              outline: 'none' // Remove a borda preta indesejada
            }}
          />
        </Field>
        <Field label="Senha:" errorText="Campo obrigatório">
          <Input
            size={'lg'}
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            _focus={{
              borderColor: '#fe6070',
              boxShadow: '0 0 0 1px #fe6070',
              outline: 'none' // Remove a borda preta indesejada
            }}
          />
        </Field>
      </VStack>
      {error && <p>{error}</p>}
      <Button onClick={login} bg={'#fe6070'}>
        Entrar
      </Button>
    </VStack>
  );
}

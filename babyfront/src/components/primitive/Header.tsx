import { HStack, Text, Button, Image, useBreakpointValue } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logo2.svg"; // Importando a imagem

export const Header = ({ user }) => {
  const navigate = useNavigate();

  // Responsividade para os botões de navegação
  const buttonSize = useBreakpointValue({ base: "sm", md: "lg" });

  // Responsividade para o nome do usuário
  const showName = useBreakpointValue({ base: false, md: true });
  const showLogo = useBreakpointValue({ base: false, md: true });

  return (
    <HStack
      width="100%"
      height="24"
      boxSizing="border-box"
      padding={5}
      bg="#fe6070"
      justifyContent="space-around"
      alignItems="center"
    >
      {
        showLogo && <Image
          src={Logo}
          alt="Logo"
          width="24"
          cursor="pointer"
          onClick={() => navigate("/home")}
        />
      }

      {/* Botões de Navegação */}
      <HStack >
        <Button
          size={buttonSize}
          color="white"
          variant="ghost"
          onClick={() => navigate("/ListPregnants")}
          _hover={{
            bg: "rgb(214, 80, 93)", // Cor de fundo ao passar o mouse
          }}
        >
          Gestantes
        </Button>
        <Button
          size={buttonSize}
          variant="ghost"
          color="white"
          onClick={() => navigate("/ListDoctors")}
          _hover={{
            bg: "rgb(214, 80, 93)",
          }}
        >
          Médicos
        </Button>
        <Button
          size={buttonSize}
          variant="ghost"
          color="white"
          _hover={{
            bg: "rgb(214, 80, 93)",
          }}
          onClick={() => navigate("/Form")}
        >
          Novo Usuário
        </Button>
      </HStack>

      {/* Nome do Usuário e Avatar */}
      <HStack alignItems="center" >
        {showName && <Text color="white" fontWeight="bold">{user?.name}</Text>}
        <Avatar name={user?.name || "Usuário"} src="https://bit.ly/sage-adebayo" />
      </HStack>
    </HStack>
  );
};

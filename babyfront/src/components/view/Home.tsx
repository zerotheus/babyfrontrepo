import { Button, Card, HStack, Text, VStack } from "@chakra-ui/react";
import { Header } from "../primitive/Header";
import { TaskCard } from "../primitive/TaskCard";

const tasks = [
  {
    title: "Ver todas gestantes",
    icon: "🤰",
    route: "ListPregnants"
  },
  {
    title: "Ver todos os médicos",
    icon: "🩺",
    route: "ListDoctors"
  },
  {
    title: "Associar paciente-médico",
    icon: "🥼",
    route: "AssociatePregnantDoctor"
  },
  {
    title: "Criar perfil de médico ou paciente",
    icon: "🩺",
    route: "Form"
  },
  {
    title: "Ultimos alertas",
    icon: "🤰",
    route: "Form"
  },
  {
    title: "Ver todos os usuários",
    icon: "👤",
    route: "ListUsers"
  }
];



export function Home() {
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson)
  console.log(user.name);
  return (
    <>
      <Header user={{ "name": user.name }}></Header>
      <Text fontSize={'3xl'} mt={8} textAlign={"center"} fontWeight={"bold"}>
        Seja bem-vindo(a) ao BabyMove!
      </Text>
      <Text fontSize={'2xl'} textAlign={"center"} >
        Escolha uma opção
      </Text>
      <HStack my={"10"} justifyContent={"center"} wrap={"wrap"} gap={10}>
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            icon={task.icon}
            route={task.route}
          />
        ))}
      </HStack>
    </>
  );
}

export default Home;

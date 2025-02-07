import { Button, Card, HStack, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Header } from "../primitive/Header";
import { TaskCard } from "../primitive/TaskCard";
import Searchable from "../primitive/Searchable";

const tasks = [
  {
    title: "Gerencia Usuarios",
    icon: "❤️",
  },
  {
    title: "Frequência cardíaca do bebê",
    icon: "🩺",
  },
  {
    title: "Glicemia da gestante",
    icon: "🩸",
  },
  {
    title: "Associar Paciente Médico",
    icon: "🙂",
  },
  {
    title: "Dashboards",
    icon: "💚",
  },
];



export function Home() {
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson)
  console.log(user.name);
  return (
    <>
      <Header user={{"name":user.name}}></Header>
      <HStack my={"20"} justifyContent={"center"} wrap={"wrap"} gap={10}>
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </HStack>
      <Searchable></Searchable>
    </>
  );
}

export default Home;

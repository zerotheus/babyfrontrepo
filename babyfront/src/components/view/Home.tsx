import { Button, Card, HStack, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Header } from "../primitive/Header";

const tasks = [
  {
    day: "Qua",
    date: 10,
    title: "Gerencia Usuarios",
    bpm: 68,
    color: "bg-red-100",
    icon: "❤️",
  },
  {
    day: "Qua",
    date: 10,
    title: "Frequência cardíaca do bebê",
    bpm: 68,
    color: "bg-yellow-100",
    icon: "🩺",
  },
  {
    day: "Qua",
    date: 10,
    title: "Glicemia da gestante",
    bpm: 68,
    min: 78,
    max: 117,
    color: "bg-pink-100",
    icon: "🩸",
  },
  {
    day: "Qui",
    date: 11,
    title: "Associar Paciente Médico",
    bpm: 68,
    unit: "u.m",
    color: "bg-purple-100",
    icon: "🙂",
  },
  {
    day: "Sex",
    date: 12,
    title: "Dashboards",
    bpm: 68,
    color: "bg-green-100",
    icon: "💚",
  },
];

const TaskCard = ({ task }) => {
  return (
    <Card.Root width="320px">
    <Card.Body gap="2">
      <Card.Title mt="2">{task.title} {task.icon}</Card.Title>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button variant="outline">View</Button>
    </Card.Footer>
  </Card.Root>
  );
};

export function Dashboard() {
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
    </>
  );
}

export default Dashboard;

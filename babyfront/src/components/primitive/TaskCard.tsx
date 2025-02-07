import { Button, Card } from "@chakra-ui/react";

export const TaskCard = ({ task }) => {
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
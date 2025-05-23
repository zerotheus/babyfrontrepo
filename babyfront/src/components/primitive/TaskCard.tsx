import { Button, Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const TaskCard = (props) => {
  console.log(props.route);

  const navigate = useNavigate()
  return (
    <Card.Root width="320px" height={150} shadow={"sm"}  >
      < Card.Body gap="2" overflow="hidden">
        <Card.Title mt="2" >
          {props.title} {props.icon}
        </Card.Title>
      </Card.Body >
      <Card.Footer justifyContent="end">
        <Button
          variant="outline"
          onClick={() => navigate(`/${props.route}`)}
          bg={"red.200"}
        >
          Acessar
        </Button>
      </Card.Footer>
    </Card.Root >
  );
};
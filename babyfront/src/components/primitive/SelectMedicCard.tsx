import { Card, HStack, Text } from "@chakra-ui/react";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { Avatar } from "../ui/avatar";

export default function SelectMedicCard(props) {
  return (
    <Card.Root width="420px">
      <Card.Body gap="2">
        <Card.Title mt="2">Médico(a)</Card.Title>
        <HStack>
          <Avatar
            src="https://picsum.photos/200/300"
            name="Nue Camp"
            size="lg"
            shape="rounded"
          />
          <MdOutlinePregnantWoman />
          <Text>{props.name}</Text>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

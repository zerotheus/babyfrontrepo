import { Card, HStack, Text } from "@chakra-ui/react";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { Avatar } from "../ui/avatar";
import { FaBaby } from "react-icons/fa";

export default function SelectPatientCard(props) {
  return (
    <Card.Root>
      <Card.Body>
        <HStack>
          <Avatar
            src="https://picsum.photos/200/300"
            name="Nue Camp"
            size="lg"
            shape="rounded"
          />
          <MdOutlinePregnantWoman />
          <Text>{props.name}</Text>
          <FaBaby />
          <Text> {props.babyName}</Text>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

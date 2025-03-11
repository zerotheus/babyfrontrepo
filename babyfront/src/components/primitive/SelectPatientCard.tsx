import { Card, HStack, Text, VStack } from "@chakra-ui/react";
import { MdOutlinePregnantWoman } from "react-icons/md";
import { TbBabyCarriage } from "react-icons/tb";

import { Avatar } from "../ui/avatar";
import { LuBaby } from "react-icons/lu";

export default function SelectPatientCard(props) {
  return (
    <Card.Root >
      <Card.Body>
        <HStack justifyContent={'center'}>
          <HStack alignItems={'center'} justifyContent={'center'}>
            <Avatar
              src="https://picsum.photos/200/300"
              name="Nue Camp"
              size="lg"
              shape="rounded"
            />
            <Text>{props.name}</Text>
          </HStack>
          <HStack alignItems={'center'} justifyContent={'center'}>
            <TbBabyCarriage size={22} fill="#fe6070" />
            <Text> {props.babyName}</Text>
          </HStack>
        </HStack>
      </Card.Body>
    </Card.Root >
  );
}

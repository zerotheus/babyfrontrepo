import { Card, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";

function getTimeFromDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function HistoryCard(props) {
  return (
    <>
      <Card.Root width={"320px"}>
        <Card.Body>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <VStack alignItems={"center"} justifyContent={"center"}>
              <Text
                fontWeight={"bold"}
                color={"rgba(228,62,98,0.6)"}
                fontSize={16}
              >
                {props.value}
              </Text>
              <Text color={"rgba(228,62,98,0.6)"}>{props.unity}</Text>
            </VStack>
            <VStack alignItems={"center"} justifyContent={"center"} gap={2}>
              <Text
                fontWeight={"bold"}
                color={"rgba(228,62,98,0.6)"}
                fontSize={16}
              >
                {"Normal"}
              </Text>
              <Text color={"rgba(228,62,98,0.6)"}>
                {getTimeFromDate(props.date)}
              </Text>
            </VStack>
            <VStack>
              <Icon fontSize="2xl" color="pink.700">
                <HiHeart />
              </Icon>
            </VStack>
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
}

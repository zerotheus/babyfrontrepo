import { HStack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar"

export const Header = ({ user }) => {
  return (
    <HStack gap={"5"} width={'100%'} height={"20"} boxSizing={"border-box"} padding={5} bg={"pink.500"}>
      <Avatar name="Jalin habei" src="https://bit.ly/sage-adebayo" />
      <Text>{user.name}</Text>
    </HStack>
  );
};

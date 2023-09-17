import {
  Box,
  Button,
  Icon,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";

export const Navigation = () => {
  return (
    <Box
      bg="white"
      borderBottom="2px"
      borderColor="black"
      boxShadow="10px 10px 10px rgba(0, 0, 0, 0.1)"
    >
      <Flex minWidth="max-content" alignItems="center" gap="2" margin={"1rem"}>
        <Box p="5">
          <Heading size="md">Events App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Link to={"/"}>
            <Button
              marginBottom={"0.5rem"}
              variant="outline"
              borderRadius="full"
              borderColor="black"
              boxShadow={useColorModeValue("6px 6px 0 gray", "6px 6px 0 cyan")}
            >
              All events
            </Button>
          </Link>
          <Link to={"/event/addevent"}>
            <Button
              marginBottom={"0.5rem"}
              variant="outline"
              borderRadius="full"
              bgColor={"yellow.200"}
              borderColor="black"
              boxShadow={useColorModeValue("6px 6px 0 gray", "6px 6px 0 cyan")}
            >
              <Icon as={AddIcon} mr={2} color="green.500" />
              Add event
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

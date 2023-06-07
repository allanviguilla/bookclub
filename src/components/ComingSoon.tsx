import "@fontsource/ibm-plex-mono/700.css";
import "@fontsource/roboto-condensed/300.css";

import {
  Flex,
  Box,
  Heading,
  Image,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";

export default function ComingSoon() {
  return (
    <VStack bg="primary">
      <Flex h="100vh" direction="column" align="center">
        <Box m="auto">
          <Box>
            <Heading textAlign="center" color="white" size="3xl">
              BOOK CLUB
            </Heading>
            <Text textAlign="center" color="white" fontSize="2xl">
              COMING SOON <br /> SUMMER 2025
            </Text>
          </Box>
        </Box>
      </Flex>
    </VStack>
  );
}

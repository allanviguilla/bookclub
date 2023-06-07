import "@fontsource/ibm-plex-mono/700.css";
import "@fontsource/roboto-condensed/300.css";
import "@fontsource/roboto-condensed/400.css";

import { Flex, Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function ComingSoon() {
  return (
    <VStack bg="primary">
      <Flex h="100vh" direction="column" align="center">
        <Box m="auto">
          <Box>
            <Heading textAlign="center" color="white" size="3xl">
              B00K CLUB
            </Heading>
            <Text textAlign="center" color="white" fontSize="2xl">
              COMING SOON
            </Text>
            <Text
              textAlign="center"
              color="white"
              fontSize="2xl"
              fontWeight="300"
            >
              SUMMER 2025
            </Text>
          </Box>
        </Box>
      </Flex>
    </VStack>
  );
}

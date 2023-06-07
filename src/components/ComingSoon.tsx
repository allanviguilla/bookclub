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
          <Box position="relative" bottom="-50" left="-100" zIndex="overlay">
            <Heading textAlign="center" color="white" size="3xl">
              BOOK CLUB
            </Heading>
            <Text textAlign="center" color="white" fontSize="2xl">
              COMING SOON <br /> SUMMER 2025
            </Text>
          </Box>
          <Box>
            <Center>
              <Image
                borderRadius="20"
                boxSize="275"
                src="https://imagizer.imageshack.com/img922/8487/fKsV55.jpg"
                alt="Book Club Teaser"
              />
            </Center>
          </Box>
        </Box>
      </Flex>
    </VStack>
  );
}

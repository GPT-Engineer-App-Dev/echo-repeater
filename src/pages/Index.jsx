// Complete the Index page component here
// Use chakra-ui
import { Box, Text } from '@chakra-ui/react';

const Index = () => (
  <Box p={5} maxW="480px" m="auto" mt="20vh" bg="white" boxShadow="md">
    <Text fontSize="2xl" fontWeight="bold">Number Increment</Text>
    <Text fontSize="4xl">2</Text> <!-- Incremented number from 1 to 2 -->
  </Box>
);

export default Index;
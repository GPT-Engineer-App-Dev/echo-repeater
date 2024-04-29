// Complete the Index page component here
// Use chakra-ui
import { Box, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Index = () => {
  const [number, setNumber] = useState(1);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  return (
    <Box p={5} maxW="480px" m="auto" mt="20vh" bg="white" boxShadow="md">
      <Text fontSize="2xl" fontWeight="bold">Number Increment</Text>
      <Text fontSize="4xl">{number}</Text>
      <Button onClick={incrementNumber} mt={4}>Increment Number</Button>
    </Box>
  );
};

export default Index;
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast
} from '@chakra-ui/react';

const CustomerDetailsForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      toast({
        title: "Error",
        description: "Todos los campos son obligatorios",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    onSubmit({ name, email, phone });
  };

  return (
    <Box p="4" borderRadius="md" boxShadow="md" bg="white">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="pepito@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Número de Teléfono</FormLabel>
            <Input
              type="tel"
              placeholder="numero de telefono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit">
            Confirmar Datos
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CustomerDetailsForm;

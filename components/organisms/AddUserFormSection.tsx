import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import axios from "axios";
import { redirect } from "next/navigation";
import BackButton from "../atoms/BackButton";

export default function AddUserFormSection() {
  async function createUser(formData: FormData) {
    "use server";

    const rawFormData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      gender: formData.get("gender"),
      age: formData.get("age"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    const response = await axios
      .post("https://dummyjson.com/users/add", rawFormData)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    if (response) {
      redirect("/user/add/success");
    }
  }

  return (
    <Flex mt="3" direction="column" justifyContent="center">
      <form action={createUser} className="flex flex-col">
        <Flex gap="4" my="2">
          <FormControl id="firstName" isRequired>
            <FormLabel fontSize="sm">First Name</FormLabel>
            <Input
              size="sm"
              type="text"
              name="firstName"
              placeholder="Enter the first name"
            />
          </FormControl>
          <FormControl id="lastName" isRequired>
            <FormLabel fontSize="sm">Last Name</FormLabel>
            <Input
              size="sm"
              type="text"
              name="lastName"
              placeholder="Enter the last name"
            />
          </FormControl>
        </Flex>
        <Flex gap="4" my="2">
          <FormControl id="gender" as="fieldset" isRequired>
            <FormLabel fontSize="sm" as="legend">
              Gender
            </FormLabel>
            <RadioGroup defaultValue="Male" name="gender">
              <HStack spacing="24px">
                <Radio size="sm" value="male">
                  Male
                </Radio>
                <Radio size="sm" value="female">
                  Female
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl id="age" isRequired>
            <FormLabel fontSize="sm">Age</FormLabel>
            <Input
              size="sm"
              type="number"
              name="age"
              placeholder="Enter the age"
            />
          </FormControl>
        </Flex>
        <FormControl id="email" isRequired>
          <FormLabel fontSize="sm">Email</FormLabel>
          <Input
            size="sm"
            type="email"
            name="email"
            placeholder="Enter the email"
          />
        </FormControl>
        <FormControl id="phone" isRequired>
          <FormLabel fontSize="sm">Phone</FormLabel>
          <Input
            size="sm"
            type="tel"
            name="phone"
            placeholder="Enter the phone number"
          />
        </FormControl>
        <Checkbox size="sm" my="4" isRequired>
          I have double checked the data
        </Checkbox>
        <Button type="submit" colorScheme="green" mt="3">
          Add User
        </Button>
      </form>
    </Flex>
  );
}

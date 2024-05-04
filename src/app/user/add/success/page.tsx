import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
} from "@chakra-ui/react";
import BackToUserPageButton from "../../../../../components/atoms/BackToUserPageButton";

export default function AddUserSuccessPage() {
  return (
    <Flex direction="column" gap="2" m="3" alignItems="center">
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Success
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          User added successfully.
        </AlertDescription>
      </Alert>
      <BackToUserPageButton />
    </Flex>
  );
}

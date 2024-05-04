import { Flex } from "@chakra-ui/react";
import PageTitle from "../../../../components/atoms/PageTitle";
import AddUserFormSection from "../../../../components/organisms/AddUserFormSection";
import BackButton from "../../../../components/atoms/BackButton";

export default function AddUserPage() {
  return (
    <Flex direction="column" gap="2" alignItems="center">
      <PageTitle title="Add User" />
      <BackButton />
      <AddUserFormSection />
    </Flex>
  );
}

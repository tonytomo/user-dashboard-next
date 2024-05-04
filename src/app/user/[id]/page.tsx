import { Image, Divider, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import BackButton from "../../../../components/atoms/BackButton";
import PageTitle from "../../../../components/atoms/PageTitle";

export default async function UserPage({ params }: { params: { id: string } }) {
  const userId = params.id;

  const userDetail = await getUserDetail(userId);

  const titleDetail = `User Detail #${userId}`;

  return (
    <Flex direction="column" alignItems="center" gap="2">
      <PageTitle title={titleDetail} />

      <BackButton />

      <Flex direction="column" alignItems="center" gap="4" pt="4">
        <Image
          borderRadius="full"
          boxSize="150px"
          src={userDetail.image}
          alt={userDetail.firstName}
        />
        <Heading fontWeight="bold" fontSize="4xl">
          {userDetail.lastName}, {userDetail.firstName}
        </Heading>
        <Divider />
        <Heading fontSize="xl">
          {userDetail.age} years old | {userDetail.gender.toUpperCase()}
        </Heading>
        <Heading fontSize="xl">{userDetail.email}</Heading>
        <Heading fontSize="xl">{userDetail.phone}</Heading>
      </Flex>
    </Flex>
  );
}

async function getUserDetail(userId: string) {
  const data = await axios
    .get(`https://dummyjson.com/users/${userId}`)
    .then((res) => res.data);

  return data;
}

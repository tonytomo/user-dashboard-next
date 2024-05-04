import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Flex px="4" minWidth="max-content" alignItems="center" gap="2" bgColor="#38A169" textColor="white">
      <Box p="2">
        <Heading size="md">Admin Dashboard</Heading>
      </Box>
      <Spacer />
      <Breadcrumb p="4">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/user">
            User
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}

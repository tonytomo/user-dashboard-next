"use client";

import { Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import AddPageButton from "../atoms/AddPageButton";

export default function FilterBox() {
  const router = useRouter();

  function filterByKeyword(keyword: string) {
    router.push(`/user?keyword=${keyword}`);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterByKeyword(e.target.value);
  };

  return (
    <Flex ml="3" gap="4">
      <Input onChange={handleChange} placeholder="Search users" size="sm" />
      <AddPageButton />
    </Flex>
  );
}

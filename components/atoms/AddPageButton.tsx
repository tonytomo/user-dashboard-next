"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function AddPageButton() {
  const router = useRouter();

  function goToAddPage() {
    router.push(`/user/add`);
  }

  return (
    <Button colorScheme="green" size="sm" onClick={goToAddPage}>
      Add user
    </Button>
  );
}

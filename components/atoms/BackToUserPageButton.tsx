"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function BackToUserPageButton() {
  const router = useRouter();

  function backToUser() {
    router.push("/user");
  }

  return (
    <Button colorScheme="green" size="sm" onClick={backToUser}>
      Back
    </Button>
  );
}

"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <Button colorScheme="green" size="sm" onClick={goBack}>
      Back
    </Button>
  );
}

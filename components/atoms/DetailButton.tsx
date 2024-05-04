"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function DetailButton({ userId }: { userId: number }) {
  const router = useRouter();

  function goToDetailPage() {
    router.push(`/user/${userId}`);
  }

  return (
    <Button colorScheme="green" size="xs" onClick={goToDetailPage}>
      Detail
    </Button>
  );
}

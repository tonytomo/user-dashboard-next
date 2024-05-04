"use client";

import { Button, Flex } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PaginationBox({
  limit,
  skip,
  hasPrevPage,
  hasNextPage,
}: {
  limit: number;
  skip: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}) {
  const router = useRouter();

  const page = skip / limit + 1;

  const allParams = useSearchParams();
  const restParams = new URLSearchParams(allParams.toString());
  restParams.delete("page");

  function goToPreviousPage() {
    const newPage = page - 1;
    router.push(`/user?${restParams}&page=${newPage}`);
  }

  function goToNextPage() {
    const newPage = page + 1;
    router.push(`/user?${restParams}&page=${newPage}`);
  }

  return (
    <Flex justifyContent="center" gap="2">
      <Button
        isDisabled={!hasPrevPage}
        colorScheme="green"
        size="sm"
        onClick={goToPreviousPage}
      >
        Prev
      </Button>
      <Button
        isDisabled={!hasNextPage}
        colorScheme="green"
        size="sm"
        onClick={goToNextPage}
      >
        Next
      </Button>
    </Flex>
  );
}

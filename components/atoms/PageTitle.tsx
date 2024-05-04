import { Heading } from "@chakra-ui/react";

export default function PageTitle({ title }: { title: string }) {
  return (
    <Heading as="h2" size="lg" p="2" textColor="#38A169">
      {title}
    </Heading>
  );
}

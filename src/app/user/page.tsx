import TableSection from "../../../components/organisms/TableSection";
import PageTitle from "../../../components/atoms/PageTitle";
import { Flex } from "@chakra-ui/react";

export default function UsersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const limit = searchParams["limit"] ?? "10";
  const page = searchParams["page"] ?? "1";
  const keyword = searchParams["keyword"] ?? "";

  const skip = (Number(page) - 1) * Number(limit);

  return (
    <Flex alignItems="center" justifyContent="center" direction="column">
      <PageTitle title="Users" />
      <TableSection skip={skip} limit={Number(limit)} keyword={keyword} />
    </Flex>
  );
}

import axios from "axios";
import PaginationBox from "../molecules/PaginationBox";
import TableBox from "../molecules/TableBox";
import FilterBox from "../molecules/FilterBox";
import { Flex } from "@chakra-ui/react";

export default async function TableSection({
  limit,
  skip,
  keyword,
}: {
  limit: number;
  skip: number;
  keyword: string | string[] | undefined;
}) {
  const users = await getData(keyword, skip, limit);

  return (
    <Flex direction="column" gap="2">
      <FilterBox />
      <TableBox users={users} limit={limit} />
      <PaginationBox
        skip={skip}
        limit={limit}
        hasPrevPage={skip > 0}
        hasNextPage={limit < users.length}
      />
    </Flex>
  );
}

async function getData(
  keyword: string | string[] | undefined,
  skip: number,
  limit: number
) {
  const data = await axios
    .get(
      `https://dummyjson.com/users/search?q=${keyword}&limit=${
        limit + 1
      }&skip=${skip}`
    )
    .then((res) => res.data);

  const users = data.users;

  return users;
}

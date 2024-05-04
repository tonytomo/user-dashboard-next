"use client";

import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import DetailButton from "../atoms/DetailButton";

export default function TableBox({
  users,
  limit,
}: {
  users: any[];
  limit: number;
}) {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>{showData(users, limit)}</Tbody>
      </Table>
    </TableContainer>
  );
}

function showData(
  data: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }[],
  limit: number
) {
  if (data.length === 0) {
    return (
      <Tr>
        <Td>No user data</Td>
      </Tr>
    );
  }

  data = data.slice(0, limit);

  return data.map((item) => (
    <Tr key={item.id}>
      <Td>{item.id}</Td>
      <Td>{`${item.firstName} ${item.lastName}`}</Td>
      <Td>{item.email}</Td>
      <Td>{item.phone}</Td>
      <Td>
        <DetailButton userId={item.id} />
      </Td>
    </Tr>
  ));
}

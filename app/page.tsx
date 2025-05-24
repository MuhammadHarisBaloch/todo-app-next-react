"use client";

import TaskModal from "@/components/TaskModal";
import { Card, Stack, Title, Text } from "@mantine/core";

export default function Home() {
  return (
    <Stack px="md" py="md">
      <Title order={1} fw={700}>
        Sticky wall
      </Title>
      <Card
        bg="rgba(137, 132, 132, 0.68)"
        radius="md"
        withBorder
        shadow="sm"
        w="14rem"
        h="14rem"
        onClick={() => {
          TaskModal();
        }}
      >
        <Stack align="center" h="100vh" justify="center">
          <Title order={1} fz="5rem" fw="normal">
            +
          </Title>
        </Stack>
      </Card>
    </Stack>
  );
}

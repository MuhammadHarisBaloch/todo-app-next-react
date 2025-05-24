"use client";

import openTaskModal from "@/components/openTodoModal";
import { Card, Center, Stack, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

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
        w="20%"
        h={250}
        shadow="sm"
        onClick={() => {
          openTaskModal();
        }}
      >
        <Center h="100%" className="pointer">
          <IconPlus size={60} />
        </Center>
      </Card>
    </Stack>
  );
}

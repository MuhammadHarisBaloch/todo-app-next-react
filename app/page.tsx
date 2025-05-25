"use client";

import openTaskModal from "@/components/openTodoModal";
import { Card, Center, Group, Stack, Title, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export interface Todo {
  title: string;
  description: string;
  color: string;
}

export default function Home() {
  const [newTodo, setNewTodo] = useState<Todo[]>([]);

  return (
    <Stack px="md" py="md">
      <Title order={1} fw={700}>
        Sticky wall
      </Title>
      <Group>
        {newTodo.map((task, index) => {
          return (
            <Card
              key={index}
              bg={task.color}
              radius="md"
              withBorder
              w="20%"
              h={250}
              shadow="sm"
            >
              <Stack gap="xs">
                <Title order={3}>{task.title}</Title>
                <Text fz="14px" fw="medium">
                  {task.description}
                </Text>
              </Stack>
            </Card>
          );
        })}

        <Card
          bg="rgba(137, 132, 132, 0.68)"
          radius="md"
          withBorder
          w="20%"
          h={250}
          shadow="sm"
          onClick={() => {
            openTaskModal({
              onUpdateTodo: (todo) => {
                setNewTodo([...newTodo, todo]);
              },
            });
          }}
        >
          <Center h="100%" className="pointer">
            <IconPlus size={60} />
          </Center>
        </Card>
      </Group>
    </Stack>
  );
}

import { modals } from "@mantine/modals";
import NewTodoModal from "./modal";

export default function openTodoModal() {
  modals.open({
    title: "Add Todo",
    children: <NewTodoModal />,
  });
}

import { modals } from "@mantine/modals";
import NewTodoModal from "./modal";
import { Todo } from "@/app/page";

interface openTodoModalProps {
  onUpdateTodo: (todo: Todo) => void;
}
export default function openTodoModal({ onUpdateTodo }: openTodoModalProps) {
  modals.open({
    title: "Add Todo",
    children: <NewTodoModal onUpdateTodo={onUpdateTodo} />,
  });
}

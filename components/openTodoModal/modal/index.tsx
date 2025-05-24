import {
  Button,
  ColorPicker,
  Input,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { useState } from "react";

function NewTodoModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  return (
    <Stack>
      <Input.Wrapper label="Title">
        <Input
          placeholder="Todo title"
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
        />
      </Input.Wrapper>
      <Textarea
        label="Todo Description"
        placeholder="Todo description"
        value={description}
        onChange={(event) => setDescription(event.currentTarget.value)}
      />
      <Stack gap="xs">
        <Text>Select Color</Text>
        <ColorPicker
          format="hex"
          w="100%"
          value={color}
          onChange={setColor}
          swatches={[
            "#2e2e2e",
            "#868e96",
            "#fa5252",
            "#e64980",
            "#be4bdb",
            "#7950f2",
            "#4c6ef5",
            "#228be6",
            "#15aabf",
            "#12b886",
            "#40c057",
            "#82c91e",
            "#fab005",
            "#fd7e14",
          ]}
        />
      </Stack>
      <Button
        onClick={() => {
          console.log("title:", title);
          console.log("description:", description);
          console.log("color:", color);
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}

export default NewTodoModal;

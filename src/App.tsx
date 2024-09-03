import "./App.css";
import { Box } from "@chakra-ui/react";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Input from "./components/input";

function App() {
  return (
    <Box m={2} p={4} bg="blue.200" className="App">
      <h1 className="headingMain">My Todo list: </h1>

      <Input />

      <Box my={4} sx={{ display: "flex", flexDirection: "column" }}>
        <Checkbox value="task_01" isChecked={true} my={2}>
          Task 01
        </Checkbox>
        <Checkbox value="task_02" isChecked={false} my={2}>
          Task 02
        </Checkbox>
      </Box>

      <Button colorScheme="green" variant="solid" sx={{ width: "100%" }} my={4}>
        Button here
      </Button>
    </Box>
  );
}

export default App;

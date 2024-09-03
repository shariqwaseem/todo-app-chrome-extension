import { useState } from "react";
import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {
  inputValue?: string;
}

const Input = ({ inputValue = "", ...props }: CustomInputProps) => {
  const [value, setValue] = useState(inputValue);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <ChakraInput
      variant="filled"
      colorScheme="red"
      size="lg"
      value={value}
      onChange={handleChange}
      placeholder="Enter your task e.g. Need to read book"
      {...props}
    />
  );
};

export default Input;

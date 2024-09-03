import { Checkbox as ChakraCheckbox, CheckboxProps } from "@chakra-ui/react";
import { useState } from "react";

interface CustomCheckboxProps extends CheckboxProps {
  children: string;
  value: string;
  isChecked: boolean;
}

const Checkbox = ({
  children,
  value,
  isChecked,
  ...props
}: CustomCheckboxProps) => {
  const [isCheckedBox, setIsCheckedBox] = useState(isChecked);

  return (
    <ChakraCheckbox
      defaultChecked
      isChecked={isCheckedBox}
      onChange={() => setIsCheckedBox(!isCheckedBox)}
      {...props}
    >
      {children}
    </ChakraCheckbox>
  );
};

export default Checkbox;

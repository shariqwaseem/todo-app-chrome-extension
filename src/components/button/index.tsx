import { Button as ChakraBtn, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  children: string;
}

const Button = ({ children, ...props }: CustomButtonProps) => {
  return (
    <ChakraBtn colorScheme="red" {...props}>
      {children}
    </ChakraBtn>
  );
};

export default Button;

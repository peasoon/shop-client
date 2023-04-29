import { useActions } from "@/redux/hooks";
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

function CartItemQuantity({ quantity, id }: { quantity: number; id: number }) {
  const { changeQuantity } = useActions();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: quantity,
      min: 1,
      max: 6,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="150px">
      <Button
        {...inc}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          changeQuantity({ quantity: Number(input.value), id });
        }}
      >
        +
      </Button>
      <Input {...input} fontSize={10} disabled />
      <Button
        {...dec}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          changeQuantity({ quantity: Number(input.value), id });
        }}
      >
        -
      </Button>
    </HStack>
  );
}

export default CartItemQuantity;

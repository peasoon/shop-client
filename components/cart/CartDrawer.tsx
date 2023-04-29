import { useAppSelector } from "@/redux/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef } from "react";
import CartItem from "./CartItem";

function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const total = useAppSelector((state) => state.cart.total);

  return (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        <Image src="/cart-icon.svg" alt="cart" fill />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your cart items</DrawerHeader>
          <DrawerBody padding={"0px 10px"}>
            {cartItems.map((item) => (
              <CartItem {...item} key={item.product_id} />
            ))}
          </DrawerBody>

          <DrawerFooter>
            <span style={{ marginRight: "auto" }}>
              Total:{" "}
              {Number(total).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Order</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CartDrawer;

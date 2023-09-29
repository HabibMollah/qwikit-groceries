"use client";
import { ReactNode } from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { useCartContext } from "@/contexts/CartContext";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { RxCross1 } from "react-icons/rx";

export default function CartModal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  const { cartItems, setCartItems } = useCartContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleEmptyCart = () => {
    setCartItems([]);
  };
  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-2">
      <Button className={className} onClick={onOpen}>
        {children}
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Cart</ModalHeader>
              <ModalBody>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      className="flex items-center justify-between"
                      key={item.id}
                    >
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleRemoveFromCart(item.id)}>
                          <RxCross1 size={20} color="#f00" />
                        </button>
                        <h6>
                          {item.title.length > 18
                            ? item.title.slice(0, 18) + "..."
                            : item.title}
                        </h6>
                      </div>
                      <Image
                        as={NextImage}
                        alt={item.title}
                        className="h-[50px] w-[50px] rounded-xl object-cover"
                        src={item.imageURL}
                        quality={50}
                        width={50}
                        height={50}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-xl">Your cart is empty.</p>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="danger" onClick={handleEmptyCart}>
                  Empty Cart
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/use-disclosure";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { FiTrash2 } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { useCartContext } from "@/contexts/CartContext";
import ModalForm from "./ModalForm";
import deleteData from "@/requests/deleteData";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  id: number;
  title: string;
  description: string;
  imageURL: string;
};

export default function ProductModal({
  children,
  id,
  title,
  description,
  imageURL,
}: Props) {
  const { cartItems, setCartItems } = useCartContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const handleAddToCart = (itemID: number) => {
    if (cartItems.find((item) => item.id === itemID)) return;
    else {
      const newCartItems = [...cartItems, { id, title, description, imageURL }];
      setCartItems(newCartItems);
    }
  };

  const handleProductDelete = async () => {
    const response = await deleteData(id);
    if (response) {
      router.refresh();
      onOpenChange();
      alert("Success");
    }
  };

  return (
    <>
      <Button
        className="h-[285px] bg-transparent object-contain shadow-none"
        onClick={onOpen}
      >
        {children}
      </Button>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(_onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody className="">
                <div className="flex items-center justify-center">
                  <Image
                    as={NextImage}
                    alt={title}
                    className="block rounded-xl object-cover"
                    src={imageURL}
                    quality={50}
                    width={300}
                    height={200}
                  />
                </div>
                <p className="text-left">{description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={handleProductDelete}>
                  <FiTrash2 /> Remove
                </Button>
                {/* <Button color="success" onPress={onClose}> */}
                <ModalForm
                  title={title}
                  description={description}
                  imageURL={imageURL}
                  id={id}
                  formType="update"
                >
                  <BiEdit />
                  Edit
                </ModalForm>
                {/* </Button> */}
                <Button color="success" onClick={() => handleAddToCart(id)}>
                  <MdAddShoppingCart />
                  Add to Cart
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

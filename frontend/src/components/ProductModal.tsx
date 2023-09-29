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

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  imageURL: string;
};

export default function ProductModal({
  children,
  title,
  description,
  imageURL,
}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
          {(onClose) => (
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
                <Button color="danger" onPress={onClose}>
                  <FiTrash2 /> Remove
                </Button>
                <Button color="success" onPress={onClose}>
                  <BiEdit />
                  Edit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

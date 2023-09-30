import { ReactNode } from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/modal";

import { useDisclosure } from "@nextui-org/use-disclosure";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { BiLink } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import postData from "@/requests/postData";
import { useRouter } from "next/navigation";
import updateData from "@/requests/updateData";

const schema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  imageURL: z
    .string()
    .regex(
      /^https:\/\/(images\.|plus\.)?unsplash\.com\/[^\s?#]+(\?[^#\s]*)?(#[^\s]*)?$/,
      "Invalid format. Please use image URLs only from unsplash: https://images.unsplash.com/{IMAGE ID GOES HERE}",
    ),
});

export type ProductFormData = z.infer<typeof schema>;

export default function ModalForm({
  children,
  formType,
  id,
  title,
  description,
  imageURL,
  className,
}: {
  children: ReactNode;
  formType: "update" | "add";
  id?: number;
  className?: string | undefined;
  title?: string;
  description?: string;
  imageURL?: string;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({ resolver: zodResolver(schema) });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onSubmit = async (data: ProductFormData) => {
    if (formType === "add") {
      const response = await postData(data);
      if (response) {
        reset();
        alert("Success");
        router.refresh();
        onOpenChange();
      }
    }
    if (formType === "update" && id) {
      const response = await updateData(id, data);
      if (response) {
        reset();
        alert("Success");
        router.refresh();
        onOpenChange();
      }
    }
  };

  return (
    <>
      <Button className={className} onClick={onOpen} color="primary">
        {children}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="flex flex-col gap-1">
                  Add A Product
                </ModalHeader>
                <ModalBody>
                  <Input
                    {...register("title")}
                    isRequired
                    autoFocus
                    endContent={
                      <BsBoxSeam className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                    }
                    label="Title"
                    labelPlacement="outside"
                    defaultValue={title}
                    placeholder="Enter product name e.g. Dairy Milk"
                    variant="bordered"
                    errorMessage={errors.title?.message}
                  />
                  <Textarea
                    {...register("description")}
                    isRequired
                    isInvalid={false}
                    variant="bordered"
                    label="Description"
                    labelPlacement="outside"
                    defaultValue={description}
                    placeholder="Enter product details e.g. Farm fresh milk from Austrailia."
                    errorMessage={errors.description?.message}
                    className=""
                  />
                  <Input
                    {...register("imageURL")}
                    isRequired
                    endContent={
                      <BiLink className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
                    }
                    label="Image URL"
                    labelPlacement="outside"
                    defaultValue={imageURL}
                    placeholder="e.g. https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                    variant="bordered"
                    errorMessage={errors.imageURL?.message}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Add
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

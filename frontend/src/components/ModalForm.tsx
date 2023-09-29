import React, { ReactNode } from 'react';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Textarea,
} from '@nextui-org/react';
import { MdLock, MdMail } from 'react-icons/md';
import { BiLink } from 'react-icons/bi';
import { BsBoxSeam } from 'react-icons/bs';

export default function ModalForm({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className={className} onClick={onOpen} color="primary">
        {children}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add A Product
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  autoFocus
                  endContent={
                    <BsBoxSeam className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Title"
                  labelPlacement="outside"
                  placeholder="Enter product name e.g. Dairy Milk"
                  variant="bordered"
                />
                <Textarea
                  isRequired
                  isInvalid={false}
                  variant="bordered"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter product details e.g. Farm fresh milk from Austrailia."
                  errorMessage=""
                  className=""
                />
                <Input
                  isRequired
                  endContent={
                    <BiLink className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Image URL"
                  labelPlacement="outside"
                  placeholder="e.g. https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
                  variant="bordered"
                />
                {/* <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: 'text-small',
                    }}>
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div> */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

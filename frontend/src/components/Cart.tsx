"use client";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import ModalComponent from "./CartModal";
import { Badge } from "@nextui-org/badge";
import { useCartContext } from "@/contexts/CartContext";

export default function Cart() {
  const { cartItems } = useCartContext();
  return (
    <ModalComponent className="bg-[#f1f1f2] dark:bg-[#3f3f46]">
      <Badge content={cartItems.length} color="primary">
        <MdOutlineLocalGroceryStore size={22} />
      </Badge>
    </ModalComponent>
  );
}

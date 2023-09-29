import { MdOutlineLocalGroceryStore } from "react-icons/md";
import ModalComponent from "./CartModal";
import { Badge } from "@nextui-org/badge";

export default function Cart() {
  return (
    <ModalComponent className="bg-[#f1f1f2] dark:bg-[#3f3f46]">
      <Badge content="5" color="primary">
        <MdOutlineLocalGroceryStore size={22} />
      </Badge>
    </ModalComponent>
  );
}

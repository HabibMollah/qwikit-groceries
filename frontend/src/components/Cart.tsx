import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import ModalComponent from './Modal';

export default function Cart() {
  return (
    <ModalComponent className="bg-[#f1f1f2] dark:bg-[#3f3f46]">
      <div className="flex items-center gap-2">
        <p className="text-2xl">0</p>
        <div className="bg-gray-600 dark:bg-gray-400 h-6 w-[2px]"></div>
        <MdOutlineLocalGroceryStore size={26} />
      </div>
    </ModalComponent>
  );
}

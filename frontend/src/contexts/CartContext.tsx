"use client";
import ProductType from "@/types/ProductType";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type CartContextType = {
  cartItems: ProductType[];
  setCartItems: Dispatch<SetStateAction<ProductType[]>>;
};

export const CartContext = createContext<null | CartContextType>(null);

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<ProductType[]>([
    {
      id: 1,
      title: "Fresh Green Lettuce",
      description: "Fresh green lettuce harvested from my garden",
      imageURL:
        "https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    },
    {
      id: 2,
      title: "Dairy Milk",
      description: "Fresh cow's milk collected from my farm.",
      imageURL:
        "https://images.unsplash.com/photo-1576186726115-4d51596775d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80",
    },
    {
      id: 3,
      title: "Chicken's Egg",
      description: "Eggs layed by the chickens of my farm.",
      imageURL:
        "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3280&q=80",
    },
    {
      id: 4,
      title: "Wheat Flour",
      description: "100% organic flour from the finest wheat of my farm.",
      imageURL:
        "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3283&q=80",
    },
    {
      id: 5,
      title: "Natural Honey",
      description:
        "Pure organic honey collected from the tropical forests all around the world.",
      imageURL:
        "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80",
    },
    {
      id: 6,
      title: "Grinded Coffee",
      description: "Grinded coffee beans.",
      imageURL:
        "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2979&q=80",
    },
    {
      id: 7,
      title: "Olive Oil",
      description: "Extra virgin olive oil from spain.",
      imageURL:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2848&q=80",
    },
    {
      id: 8,
      title: "Bread Loaf",
      description: "Homemade bread loaf.",
      imageURL:
        "https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    },
  ]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
}

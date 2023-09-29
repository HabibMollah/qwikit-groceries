"use client";
import ProductType from "@/types/ProductType";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  cartItems: ProductType[];
  setCartItems: Dispatch<SetStateAction<ProductType[]>>;
};

export const CartContext = createContext<null | CartContextType>(null);

const savedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<ProductType[]>(savedItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

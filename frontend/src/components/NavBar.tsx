"use client";
import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { BiAddToQueue } from "react-icons/bi";
import Cart from "./Cart";
import ThemeSwitcher from "./ThemeSwitcher";
import ModalForm from "./ModalForm";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <TfiShoppingCartFull size={24} />
          <p className="font-bold text-inherit sm:text-xl">QwikIT Groceries</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:list-item">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Cart />
        </NavbarItem>
        <NavbarItem>
          {/* <Button className="hidden sm:list-item" color="primary" size="md">
            Add A Product
          </Button> */}
          <ModalForm formType="add" className="hidden sm:flex">
            <BiAddToQueue size={22} />
            Add A Product
          </ModalForm>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <ModalForm formType="add" className="flex w-full">
            <BiAddToQueue size={22} />
            Add A Product
          </ModalForm>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <div className="flex w-full justify-between">
            Dark Mode
            <ThemeSwitcher />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

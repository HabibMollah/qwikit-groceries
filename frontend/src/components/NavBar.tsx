'use client';
import React, { useState } from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { BiAddToQueue } from 'react-icons/bi';
import Cart from './Cart';
import ThemeSwitcher from './ThemeSwitcher';
import ModalForm from './ModalForm';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <TfiShoppingCartFull size={24} />
          <p className="font-bold sm:text-xl text-inherit">QwikIT Groceries</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"></NavbarContent>
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
          <ModalForm className="hidden sm:flex">
            <BiAddToQueue size={22} />
            Add A Product
          </ModalForm>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <ModalForm className="w-full flex">
            <BiAddToQueue size={22} />
            Add A Product
          </ModalForm>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <div className="flex justify-between w-full">
            Dark Mode
            <ThemeSwitcher />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

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
import Cart from './Cart';
import ThemeSwitcher from './ThemeSwitcher';

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
          <TfiShoppingCartFull />
          <p className="font-bold text-inherit">QwikIT Groceries</p>
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
          <Button className="hidden sm:list-item" color="primary" size="md">
            Add A Product
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Button className="w-full" color="primary" size="md">
            Add A Product
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <div className="flex justify-between">
            Dark Mode
            <ThemeSwitcher />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

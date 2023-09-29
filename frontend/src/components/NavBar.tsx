'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import ThemeSwitcher from './ThemeSwitcher';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import Cart from './Cart';

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand className="flex gap-2">
        <TfiShoppingCartFull size={26} />
        <p className="font-extralight tracking-wider text-xl sm:text-2xl">
          QwikIT Groceries
        </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Cart />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

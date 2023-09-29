// 'use client';
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
// } from '@nextui-org/react';
// import ThemeSwitcher from './ThemeSwitcher';
// import { TfiShoppingCartFull } from 'react-icons/tfi';
// import Cart from './Cart';
// import { useState } from 'react';

// export default function NavBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuItems = [
//     'Profile',
//     'Dashboard',
//     'Activity',
//     'Analytics',
//     'System',
//     'Deployments',
//     'My Settings',
//     'Team Settings',
//     'Help & Feedback',
//     'Log Out',
//   ];
//   return (
//     <Navbar onMenuOpenChange={setIsMenuOpen}>
//       <NavbarContent>
//         <NavbarBrand className="flex gap-2">
//           <NavbarMenuToggle
//             aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
//             className="sm:hidden"
//           />
//           <TfiShoppingCartFull size={26} />
//           <p className="font-extralight tracking-wider text-xl sm:text-2xl">
//             QwikIT Groceries
//           </p>
//         </NavbarBrand>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem>
//           <Cart />
//         </NavbarItem>
//         <NavbarItem>
//           <ThemeSwitcher />
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               color={
//                 index === 2
//                   ? 'primary'
//                   : index === menuItems.length - 1
//                   ? 'danger'
//                   : 'foreground'
//               }
//               className="w-full"
//               href="#"
//               size="lg">
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }
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
import { TbCarTurbine } from 'react-icons/tb';
import Cart from './Cart';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <TbCarTurbine />
          <p className="font-bold text-inherit">QwikIT Groceries</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Cart />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

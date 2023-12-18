import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {Logo} from "./Logo";
import { Cart } from "./CartWidget";
import "./NavBarComponent.css"

export default function Nav() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    'Products',
    'Features',
    'Contact',
    'Login'
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="nav">
      <NavbarContent className="gap-6">
        <NavbarMenuToggle 
        color = "primary"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
      <NavbarBrand className="gap-4">
        <Logo />
        <p>Smart Technology</p>
      </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="sm:flex gap-2">
          <Cart />
          <p>0</p>
        </NavbarItem>
        <NavbarItem>
          <Button className="btn hidden lg:flex" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) =>(
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link 
              color='foreground'
              className="w-full"
              href="#"
              sizes="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem> 
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Logo} from "./Logo";
import { Cart } from "./CartWidget";
import "./NavComponent.css"

export default function Nav() {
  return (
    <Navbar className="nav">
      <NavbarBrand className="gap-4">
        <Logo />
        <p>Smart Technology</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
          <Button className="btn" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

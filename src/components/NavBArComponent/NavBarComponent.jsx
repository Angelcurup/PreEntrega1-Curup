import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import {Logo} from "./Logo";
import { ChevronDown } from "./Icons";
import { Cart } from "./CartWidget";
import "./NavBarComponent.css"
import { useCategory } from "../../hooks/useCategory";
import { Link } from "react-router-dom";

export default function Nav() {

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />
  }

  const {Category} = useCategory()

  return (
    <Navbar  className="nav">
      <NavbarContent className="gap-6">
      <NavbarBrand className="gap-4">
        <Logo />
        <a href="/">Smart Technology</a>
      </NavbarBrand>
      </NavbarContent>
      <NavbarContent className=" gap-4" justify="center">
      <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent
                text-white"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Category
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="ACME features" className="w-[340px]" itemClasses={{ base: "gap-4", }} >
            {Category.map(( item, index ) => {
                return (
                  <DropdownItem key={index}>
                    <Link to={`/category/${item}`}>{item}</Link>
                  </DropdownItem>
                )
              })
            }
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="sm:flex gap-2">
          <Cart />
          <p>1</p>
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

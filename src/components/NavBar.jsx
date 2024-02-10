import React, { useState, useEffect } from "react";
import Reveal from "../animations/Reveal";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

function NavBar() {
  let location = useLocation();

  const homePageValidation = location.pathname === "/";

  return (
    <div className="nav-bar">
      <motion.div
        className="nav-bar_brand"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="nav-bar_brand">ArtÉclectique</p>
      </motion.div>

      <div className="nav-bar-dropdown">
      <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new"><Link to='/'>Home</Link></DropdownItem>
        <DropdownItem key="new"><Link to='/styles'>Styles</Link></DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </div>

      <div className="nav-bar_item_container">
        {!homePageValidation && (
          
            <a className="nav-bar_item"><Link to='/'>Home</Link></a>

        )}
        <Reveal customDelay={0.3}>
          <p className="nav-bar_item">Contact</p>
        </Reveal>
        <Reveal customDelay={0.5}>
          <p className="nav-bar_item">Artists</p>
        </Reveal>
        <Reveal customDelay={0.7}>
          <p className="nav-bar_item">Blog</p>
        </Reveal>
        <Reveal customDelay={0.9}>
          <p className="nav-bar_item">Shop</p>
        </Reveal>
      </div>
    </div>
  );
}

export default NavBar;
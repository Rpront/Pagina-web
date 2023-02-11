import { useState } from "react"
import {LogoWhite} from "../assets"
import {navLinks} from '../constants';

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 px-6  justify-between items-center navbar">
      <img src={LogoWhite} alt="hoobank" className="w-[54px]"/>
    </nav>
  )
}

export default Navbar
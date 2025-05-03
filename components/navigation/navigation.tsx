"use client"

import { motion } from "framer-motion"
import Logo from "../custom/logo"
import NavLinksContainer from "./nav-links"

export default function Navigation() {
  return (
    <motion.div
      className="sticky top-0 left-0 right-0 z-50 w-full shadow-md "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-15 flex justify-between items-center py-4 md:py-6">
        <Logo />
        <NavLinksContainer />
      </div>
    </motion.div>
  )
}


"use client"

import Navigation from "../navigation/navigation"

const Header = () => {
  return (
    <header className="sticky top-0 z-[50] mx-auto flex w-full items-center justify-between bg-[#2D2E83]">
      <Navigation />
    </header>
  )
}

export default Header


"use client"

import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
  return (
    <Link href="/" className="block">
      <Image
        src="/logo (2).png"
        alt="Logo"
        width={200}
        height={200}
        className="h-25 w-auto object-contain"
        priority
      />
    </Link>
  )
}

export default Logo


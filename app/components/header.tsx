"use client";

import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function NavbarLinks({ active }: { active: string }) {
  const navItems = [
    { name: "About Us", href: "/aboutus" },
    { name: "Courses", href: "/courses" },
    { name: "Feedback", href: "/feedback" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="flex space-x-6 text-[#FEF9F1] font-[Inknut Antiqua] text-lg bg-[#28303D] px-8 py-2 rounded-full shadow-lg border border-[#FEF9F1]/20">
      {navItems.map((item) => (
        <h4
          key={item.href}
          className={`hover:text-[#F7B6CA] cursor-pointer transition p-1 ${
            active === item.href ? "bg-[#FEF9F1] text-black rounded-md px-2" : ""
          }`}
        >
          <Link href={item.href}>{item.name}</Link>
        </h4>
      ))}
    </nav>
  );
}

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="bg-[#F7B6CA] text-[#28303D] px-5 py-2 rounded-md font-semibold text-lg hover:bg-[#E89AAF] transition shadow-md"
      >
        Logout
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="bg-[#F7B6CA] text-[#28303D] px-5 py-2 rounded-md font-semibold text-lg hover:bg-[#E89AAF] transition shadow-md"
    >
      Sign In
    </button>
  );
}

function BaseHeader({ active }: { active: string }) {
  return (
    <div className="flex items-center justify-between bg-[#212731] py-4 px-8">
      <Link href="/">
        <Image src={logo} alt="logo" width={60} height={60} />
      </Link>
      <NavbarLinks active={active} />
      <AuthButton />
    </div>
  );
}

export default function Header() {
  return <BaseHeader active="" />;
}

export function HeaderCourse() {
  return <BaseHeader active="/courses" />;
}

export function HeaderFeedback() {
  return <BaseHeader active="/feedback" />;
}

export function HeaderAbout() {
  return <BaseHeader active="/aboutus" />;
}

export function HeaderContact() {
  return <BaseHeader active="/contact" />;
}

"use client";
import { usePathname } from "next/navigation";
import { HTMLProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarLinkProps extends HTMLProps<HTMLAnchorElement> {
  href: string;
}

function NavbarLink({ href, className, children, ...props }: NavbarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    href && (
      <Link
        href={href}
        className={cn(
          className,
          isActive && "bg-gradient-to-tr from-background to-neutral-800 border-l-4 ml-2"
        )}
        {...props}
      >
        {children}
      </Link>
    )
  );
}

export default NavbarLink;

import React from "react";
import Link from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface InlineLinkProps extends Omit<NextLinkProps, "as"> {
  children: React.ReactNode;
  className?: string;
}

const InlineLink = ({ children, className, ...props }: InlineLinkProps) => {
  const linkClassName = cn("underline text-primary", className);

  return (
    <Link className={linkClassName} {...props}>
      {children}
    </Link>
  );
};

InlineLink.displayName = "InlineLink";

export default InlineLink;

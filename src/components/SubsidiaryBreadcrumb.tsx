"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface SubsidiaryBreadcrumbProps {
  name: string;
}

export default function SubsidiaryBreadcrumb({ name }: SubsidiaryBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.25em] text-primary/40 mb-6"
    >
      <Link href="/" className="flex items-center gap-1 hover:text-accent transition-colors duration-300">
        <Home className="w-3 h-3" />
        <span>TMT Group</span>
      </Link>
      <ChevronRight className="w-3 h-3 opacity-40" />
      <span className="text-accent font-semibold">{name}</span>
    </nav>
  );
}

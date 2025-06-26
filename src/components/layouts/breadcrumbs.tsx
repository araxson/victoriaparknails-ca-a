"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/shadcn/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter(Boolean);

  if (pathnames.length === 0) {
    return null;
  }

  const breadcrumbLinks = pathnames.map((value, index) => {
    const href = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;
    const label = value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");    return (
      <React.Fragment key={href}>
        <BreadcrumbSeparator className="text-muted-foreground" />
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage className="text-sm sm:text-base font-medium">
              {label}
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link href={href} className="text-sm sm:text-base hover:text-primary transition-colors">
                {label}
              </Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      </React.Fragment>
    );
  });  return (
    <div className="border-b bg-muted">
      <div className="container">
        <div className="py-3 sm:py-4 md:py-6">
          <Breadcrumb>
            <BreadcrumbList className="flex-wrap gap-1 sm:gap-2">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-sm sm:text-base">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbLinks}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
} 
import { memo } from "react";
import Link from "next/link";
import { businessInfo } from "@/data";
import { Image } from "@/components/ui";

/**
 * Header logo component with business name and tagline
 * Displays the business logo and name with proper accessibility
 */
export const HeaderLogo = memo(function HeaderLogo() {  return (
    <Link
      href="/"
      className="flex items-center space-x-3 transition-opacity hover:opacity-80"
      aria-label={`${businessInfo.name} - Home`}
    >
      <div className="relative h-[43px] w-[100px]">
        <Image
          src="/Victoria_Park_Nails_Spa_Logo_Primary_small.png"
          alt={`${businessInfo.name} Logo`}
          fill
          className="object-contain dark:invert"
          sizes="100px"
          priority
        />
      </div>

      <div className="hidden flex-col justify-center lg:flex">
        <h1 className="font-semibold text-foreground text-lg leading-tight">
          {businessInfo.name}
        </h1>
        <span className="text-sm text-muted-foreground leading-tight">
          {businessInfo.tagline}
        </span>      </div>
    </Link>
  );
});

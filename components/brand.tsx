"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { branding, site } from "@/content/site";
import { cn } from "@/lib/utils";

export default function Brand({
  className,
  compact = false
}: {
  className?: string;
  compact?: boolean;
}) {
  const [imgOk, setImgOk] = React.useState(true);

  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div className="relative h-9 w-9 overflow-hidden rounded-2xl bg-slate-900/5 ring-1 ring-slate-900/10">
        {imgOk ? (
          <Image
            src={branding.logoPath}
            alt={`${site.shortName} logo`}
            fill
            sizes="36px"
            className="object-contain p-1.5"
            onError={() => setImgOk(false)}
            priority
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-xs font-bold text-slate-700">
            {site.shortName.slice(0, 2)}
          </div>
        )}
      </div>

      <div className="leading-tight">
        <div className={cn("font-semibold text-slate-900", compact ? "text-sm" : "text-base")}>
          {site.shortName}
        </div>
        {!compact && (
          <div className="text-xs text-slate-600 line-clamp-1">
            {site.tagline}
          </div>
        )}
      </div>
    </Link>
  );
}

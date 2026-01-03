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
      <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-white ring-1 ring-brand/20 shadow-soft">
        <div className="absolute -inset-6 bg-[radial-gradient(circle_at_30%_20%,rgba(12,74,173,0.20),transparent_60%)]" />
        {imgOk ? (
          <Image
            src={branding.logoPath}
            alt={`${site.shortName} logo`}
            fill
            sizes="40px"
            className="relative object-contain p-1.5"
            onError={() => setImgOk(false)}
            priority
          />
        ) : (
          <div className="relative grid h-full w-full place-items-center text-xs font-black text-brand-900">
            {site.shortName.slice(0, 2)}
          </div>
        )}
      </div>

      <div className="leading-tight">
        <div className={cn("font-extrabold tracking-tight text-ink", compact ? "text-sm" : "text-base")}>
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

import Image from "next/image";
import Link from "next/link";
import { brand, site } from "@/content/site";

export default function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3 min-w-0">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-black/10">
        <Image
          src={brand.logoSrc}
          alt={brand.logoAlt}
          fill
          className="object-contain p-1"
          sizes="40px"
          priority
        />
      </div>

      <div className="min-w-0 leading-tight">
        <div className="truncate font-semibold text-slate-900">
          {site.name}
        </div>
        <div className="truncate text-xs text-slate-600">
          {site.tagline}
        </div>
      </div>
    </Link>
  );
}

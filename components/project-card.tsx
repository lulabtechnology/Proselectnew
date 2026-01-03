"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function ProjectCard({
  title,
  subtitle,
  image
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group"
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-[16/10] bg-[radial-gradient(circle_at_20%_20%,rgba(12,74,173,0.10),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(12,165,178,0.10),transparent_55%),linear-gradient(to_bottom,#fff,rgb(var(--brand-50)))]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10" />
        </div>

        <CardContent className="pt-5">
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription className="mt-1 line-clamp-2">{subtitle}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group"
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10" />
        </div>

        <CardContent className={cn("pt-5")}>
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription className="mt-1 line-clamp-2">
            {subtitle}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

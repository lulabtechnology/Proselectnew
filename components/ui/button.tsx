import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 shadow-soft",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200",
  outline:
    "border border-slate-200 bg-white hover:bg-slate-50",
  ghost:
    "bg-transparent hover:bg-slate-100"
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition focus-ring disabled:opacity-50 disabled:pointer-events-none",
          styles[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

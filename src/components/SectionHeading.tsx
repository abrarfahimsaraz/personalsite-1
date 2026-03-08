import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeading({ title, subtitle, children, className }: Props) {
  return (
    <div className={cn("mb-10", className)}>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-1 w-8 rounded-full bg-primary" />
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      </div>
      {subtitle && <p className="mt-1 text-muted-foreground pl-11">{subtitle}</p>}
      {children}
    </div>
  );
}

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function SectionHeading({ title, subtitle, children, className, gradient }: Props) {
  return (
    <div className={cn("mb-10", className)}>
      <div className="flex items-center gap-3 mb-2">
        <div className="h-1 w-8 rounded-full gradient-bg" />
        <h2 className={cn("text-2xl font-bold sm:text-3xl", gradient && "gradient-text")}>
          {title}
        </h2>
      </div>
      {subtitle && <p className="mt-1 text-muted-foreground pl-11">{subtitle}</p>}
      {children}
    </div>
  );
}

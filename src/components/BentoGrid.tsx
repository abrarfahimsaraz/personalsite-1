import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ResearchPaper } from "@/lib/data";

interface BentoGridProps {
  papers: ResearchPaper[];
  className?: string;
}

const gridSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export default function BentoGrid({ papers, className }: BentoGridProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {papers.map((paper, index) => (
        <motion.div
          key={paper.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          onMouseMove={handleMouseMove}
          className={cn("bento-card group", gridSpans[index % gridSpans.length])}
        >
          <div className="flex items-center gap-2 mb-3">
            <Badge
              variant="outline"
              className={cn(
                "text-xs rounded-full",
                paper.status === "Published" && "border-primary/40 text-primary bg-primary/10",
                paper.status === "Under Review" && "border-amber-500/40 text-amber-400 bg-amber-500/10",
                paper.status === "In Preparation" && "border-blue-400/40 text-blue-400 bg-blue-400/10"
              )}
            >
              {paper.status}
            </Badge>
            <span className="text-xs text-muted-foreground">{paper.year}</span>
          </div>

          <h3 className={cn(
            "font-semibold leading-snug mb-2 group-hover:text-primary transition-colors",
            index % gridSpans.length === 0 ? "text-xl" : "text-base"
          )}>
            {paper.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-3">
            {paper.venue}
            {paper.location && `, ${paper.location}`}
          </p>

          {index % gridSpans.length === 0 && (
            <p className="text-sm text-foreground/60 line-clamp-3 mb-4">
              {paper.abstract}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 mb-4">
            {paper.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                {tag}
              </Badge>
            ))}
          </div>

          <Link
            to={`/research/${paper.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
          >
            View Details <ArrowRight size={14} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

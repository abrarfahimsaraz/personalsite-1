import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/blog";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import { SEO } from "@/components/SEO";

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <PageTransition>
      <SEO
        title="Blog"
        description="Articles on AI research, deep learning, power systems optimization, and engineering — by Abrar Fahim."
        path="/blog"
      />

      <PageHero
        eyebrow="Blog"
        title="Latest Articles"
        subtitle="Thoughts on AI research, engineering, and lessons learned along the way."
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-6" data-stagger>
          {sorted.map((post, i) => (
            <article
              key={post.id}
            >
              <Link
                to={`/blog/${post.id}`}
                className="group glass-card rounded-2xl p-6 block"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={13} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={13} />
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h2>

                <p className="text-sm text-foreground/60 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs rounded-full"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </Badge>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogPost, getRecentPosts } from "@/lib/blog";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPost(id ?? "");

  if (!post) {
    return (
      <div className="page-container text-center pt-32">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Button variant="outline" asChild className="mt-4 rounded-xl">
          <Link to="/blog">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  const related = getRecentPosts(3).filter((p) => p.id !== post.id);

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
      />

      {/* Hero band */}
      <div className="bg-accent/50 pt-28 pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={14} /> All Posts
          </Link>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} />
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-snug sm:text-4xl mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  <Tag size={10} className="mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Post body */}
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="prose prose-neutral dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:leading-relaxed prose-p:text-foreground/80
            prose-li:text-foreground/80
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:my-4 prose-ol:my-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-border">
            <h2 className="text-xl font-bold mb-6">More Posts</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/blog/${r.id}`}
                  className="group glass-card p-5 block"
                >
                  <p className="text-xs text-muted-foreground mb-2">
                    {new Date(r.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}

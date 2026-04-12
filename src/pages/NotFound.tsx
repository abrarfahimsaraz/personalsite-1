import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist on Abrar Fahim's portfolio." path="/404" noindex />
      <div className="flex min-h-[60vh] items-center justify-center pt-16">
        <div className="text-center px-6">
          <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            <ArrowLeft className="w-4 h-4" /> Return Home
          </Link>
        </div>
      </div>
    </>
  );
}

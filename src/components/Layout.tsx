import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
import AmbientBackground from "./AmbientBackground";
import ScrollReveal from "./ScrollReveal";

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to content
      </a>
      <AmbientBackground />
      <ScrollReveal />
      <TopNavbar />
      <main id="main-content" tabIndex={-1} className="relative z-10 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

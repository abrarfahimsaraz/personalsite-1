import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
import AmbientBackground from "./AmbientBackground";
import ScrollReveal from "./ScrollReveal";

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <AmbientBackground />
      <ScrollReveal />
      <TopNavbar />
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

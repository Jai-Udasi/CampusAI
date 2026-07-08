import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "../common/Logo";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "features", "about", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

const navButton = (id, label) => (
  <button
    onClick={() => scrollToSection(id)}
    className={`relative pb-1 transition-all duration-300 ${
      activeSection === id
        ? "text-blue-600 font-semibold"
        : "text-slate-700 hover:text-blue-600"
    }`}
  >
    {label}

    <span
      className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
        activeSection === id ? "w-full" : "w-0"
      }`}
    />
  </button>
);

  return (
    <>
      <header
        className="fixed inset-x-0 top-5 z-50 flex justify-center px-4"
      >
      <div
        className={`flex h-20 w-full max-w-7xl items-center justify-between rounded-2xl px-8 transition-all duration-300 ${
          scrolled
            ? "border border-white/40 bg-white/75 shadow-xl backdrop-blur-2xl"
            : "bg-white/10 backdrop-blur-md"
        }`}
      >        

          {/* Logo */}

          <button
            onClick={() => scrollToSection("home")}
            className="transition-all duration-300 hover:scale-105"
          >
            <Logo />
          </button>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navButton("home", "Home")}
            {navButton("features", "Features")}
            {navButton("about", "About")}
            {navButton("contact", "Contact")}
          </nav>

          {/* Desktop Buttons */}

          <div className="hidden items-center gap-4 lg:flex">

        <button
          className="
            rounded-2xl
            border
            border-blue-600
            bg-white
            px-6
            py-2.5
            font-semibold
            text-blue-600
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-blue-600
            hover:text-white
            hover:shadow-lg
          "
        >
          Register Institution
        </button>

        <button
          className="
            group
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-6
            py-2.5
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          <span className="flex items-center gap-2">
            Launch CampusAI

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="fixed top-20 z-40 w-full bg-white shadow-xl lg:hidden">

          <div className="flex flex-col gap-4 p-6">

            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("features")}>
              Features
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>

            <hr />

            <button className="rounded-xl border border-blue-600 py-3 text-blue-600">
              Register Institution
            </button>

            <button className="rounded-xl bg-blue-600 py-3 text-white">
              Launch CampusAI
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default Navbar;
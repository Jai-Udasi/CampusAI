import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/ui/HeroSection";
import CampusSnapshot from "../components/ui/CampusSnapshot";
import FeaturesSection from "../components/ui/FeaturesSection";
import InstitutionShowcase from "../components/ui/InstitutionShowcase";
import StatisticsSection from "../components/ui/StatisticsSection";
import ComparisonSection from "../components/ui/ComparisonSection";
import HowItWorks from "../components/ui/HowItWorks";
import CallToAction from "../components/ui/CallToAction";
import Footer from "../components/layout/Footer";
import FadeInSection from "../components/common/FadeInSection";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Home */}
      <section id="home">
        <HeroSection />
      </section>

      <FadeInSection>
        <CampusSnapshot />
      </FadeInSection>

      {/* Features */}
      <section id="features">
        <FadeInSection delay={0.1}>
          <FeaturesSection />
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <InstitutionShowcase />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <StatisticsSection />
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <ComparisonSection />
        </FadeInSection>
      </section>

      {/* About */}
      <section id="about">
        <FadeInSection delay={0.5}>
          <HowItWorks />
        </FadeInSection>
      </section>

      {/* Contact */}
      <section id="contact">
        <FadeInSection delay={0.6}>
          <CallToAction />
        </FadeInSection>

        <Footer />
      </section>
    </>
  );
}

export default HomePage;
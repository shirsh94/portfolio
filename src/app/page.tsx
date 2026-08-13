/**
 * Main entry point for the Shirsh Shukla Portfolio application.
 * This component orchestrates the various sections of the portfolio.
 *
 * Git push test: This comment is added to verify the git push workflow.
 */
import Masthead from "@/components/Masthead";
import LeadStory from "@/components/LeadStory";
import ServiceRecord from "@/components/ServiceRecord";
import Deployments from "@/components/Deployments";
import Plugins from "@/components/Plugins";
import Articles from "@/components/Articles";
import Community from "@/components/Community";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Manifesto from "@/components/Manifesto";
import MetricCards from "@/components/MetricCards";
import { getDynamicMetrics } from "@/lib/metrics";

export default async function Home() {
  const metrics = await getDynamicMetrics();

  return (
    <div className="min-h-screen paper-texture px-4 md:px-8 lg:px-12 py-8 max-w-7xl mx-auto overflow-x-hidden">
      <Masthead />

      <main>
        <LeadStory />
        <Manifesto />
        <MetricCards data={metrics} />
        <Deployments data={metrics.projects} />
        <Plugins />
        <Articles data={metrics.articles} />
        <Community />
        <ServiceRecord />
        <Education />
        <TechStack />
      </main>

      <Footer />
    </div>
  );
}

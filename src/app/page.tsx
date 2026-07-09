import { HeroIntelligent } from "@/components/home/hero-intelligent";
import { SignalStrip } from "@/components/home/signal-strip";
import { IntelligenceCore } from "@/components/home/intelligence-core";
import { SystemSolutions } from "@/components/home/system-solutions";
import { ArchitectureFlow } from "@/components/home/architecture-flow";
import { UseCaseWall } from "@/components/home/use-case-wall";
import { IndustryStory } from "@/components/home/industry-story";
import { ContactCta } from "@/components/home/contact-cta";
import { TrustStrip } from "@/components/home/trust-strip";

export default function Home() {
  return (
    <>
      <HeroIntelligent />
      <SignalStrip />
      <TrustStrip />
      <IntelligenceCore />
      <SystemSolutions />
      <ArchitectureFlow />
      <UseCaseWall />
      <IndustryStory />
      <ContactCta />
    </>
  );
}

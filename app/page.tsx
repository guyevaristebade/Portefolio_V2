import Stats from "@/components/Stats";
import Hero from "../components/Hero";
import Section from "@/components/Section";
import Spacing from "@/components/Spacing";

export default function Home() {
  return (
    <Section className="flex-1">
      <Hero />
      <Spacing size="sm" />
      <div className="flex justify-between items-center flex-col md:flex-row  gap-4">
        <Stats title="Years of experiences " value="10" />
        <Stats title="Project completed" value="5" />
        <Stats title="Technologies mastered" value="3" />
        <Stats title="Code commits" value="2" />
      </div>
    </Section>
  );
}

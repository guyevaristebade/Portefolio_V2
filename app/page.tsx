import Stats from "@/components/Stats";
import Hero from "../components/Hero";
import Spacing from "@/components/Spacing";

export default function Home() {
  const statsData = [
    {
      title: "Years of experience",
      value: "1",
    },
    {
      title: "Projects completed",
      value: "8",
    },
    {
      title: "Technologies mastered",
      value: "5",
    },
    {
      title: "Code commits",
      value: "100+",
    },
  ];

  return (
    <div>
      <Hero />
      <Spacing size="sm" />
      <div className="flex justify-between items-center flex-col md:flex-row gap-4">
        {statsData.map((stat, index) => (
          <Stats key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
      <Spacing size="md" />
    </div>
  );
}

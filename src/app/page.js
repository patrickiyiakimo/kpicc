import AboutUs from "@/components/home/AboutUs";
import Events from "@/components/home/Events";
import Hero from "@/components/home/Hero";
import Ministries from "@/components/home/Ministries";
import Sermons from "@/components/home/Sermons";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Ministries />
      <Events />
      <Sermons />
    </div>
  );
}

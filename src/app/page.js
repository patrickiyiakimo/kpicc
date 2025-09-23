import AboutUs from "@/components/home/AboutUs";
import ConnectWithUs from "@/components/home/ConnectWithUs";
import Events from "@/components/home/Events";
import Hero from "@/components/home/Hero";
import JoinUsOnline from "@/components/home/JoinUsOnline";
import Ministries from "@/components/home/Ministries";
import Sermons from "@/components/home/Sermons";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ConnectWithUs />
      <JoinUsOnline />
      <Ministries />
      <Events />
      <Sermons />
    </div>
  );
}

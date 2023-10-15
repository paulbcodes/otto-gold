import About from "@/components/About";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";

export default function Home() {
  const data = [
    {
      title: "Miner Booster",
      description:
        "These NFTs will provide boosts to the Pybot.Tech multi / cross chain miner and give hub access.",
    },
    {
      title: "Limited Supply",
      description:
        "There are only 10000 Otto Gold NFT's available to buy. Once they are gone, they are gone forever.",
    },
    {
      title: "PyBot Tech",
      description:
        "PyBot.Tech multi chain token miner and hub along with booster NFTs presently on OttoChain testnet.",
    },
  ];

  return (
    <div id="top">
      
      <Hero />
      <About data={data} />
      <Steps />
      <Footer />
    </div>
  );
}

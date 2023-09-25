import About from "@/components/About";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";

export default function Home() {
  const data = [
    {
      title: "Returning Rewards",
      description:
        "If this Dapp is voted in Dapp builder campaign then 25% of the airdrop recieved will be returned to holders.",
    },
    {
      title: "Limited Supply",
      description:
        "There are only 10000 Otto Gold NFT's available to buy. Once they are gone, they are gone forever.",
    },
    {
      title: "The Project",
      description:
        "These NFT's return more than their mint value. Mr Otto Gold will build into a Meme Project that will reward NFT holders.",
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

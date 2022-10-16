import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import VideoIntroductionSection from "../components/VideoIntroductionSection";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header initialBg="bg-inherit" />
      <VideoIntroductionSection />
      <main className="font-lato text-[1.05rem] leading-[1.4] text-[#444] ">
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;

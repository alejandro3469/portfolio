import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "./components/Banner";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Footer from "./components/Footer";
import MediumNavbar from "./components/MediumNavbar";
import Navbar from "./components/Navbar";
import SmallNavbar from "./components/SmallNavbar";
import UpperBanner from "./components/UpperBanner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alejandro Pérez - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar activeLink={"home"} />
      <MediumNavbar />
      <SmallNavbar />

      <main>
        <Banner />
        <div className="cards-container">
          <div>
            <h2 style={{ "text-align": "center", "margin-top": "32px" }}>
              Some of my personal projects
            </h2>
          </div>
          <Card1 />
          <Card2 />
        </div>
      </main>

      <Footer />
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Sourdough from "@/components/Sourdough";
import DoughVideo from "@/components/DoughVideo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Masa Madre Pizza</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Layout>
          <Hero />
          <Menu />
          <DoughVideo />
          <Services />
          <Sourdough />
        </Layout>
      </>
    </>
  );
}

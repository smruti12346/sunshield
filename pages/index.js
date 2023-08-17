import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });
const Banner = dynamic(() => import("@/components/Banner"));
const About = dynamic(() => import("@/components/AboutUs"));
const Catagory = dynamic(() => import("@/components/Catagory"));
const WhychooseUs = dynamic(() => import("@/components/WhychooseUs"));
const Support = dynamic(() => import("@/components/Support"));
// const Blog = dynamic(() => import("@/components/Blog"));
const Testimonial = dynamic(() => import("@/components/Testimonial"));
export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Banner />
      <About />
      <Catagory />
      <WhychooseUs />
      <Support />
      {/* <Blog /> */}
 
    </React.Fragment>
  );
}

import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import banner from "./../../public/assets/banner.png";
import HeaderLink from "@/components/HeaderLink";

function HeroBanner() {
  return (
    <section className="container mx-auto mt-[6rem] grid w-screen grid-cols-1 items-center justify-center px-5 md:mt-0 md:grid-cols-2 md:px-0">
      <div className="flex flex-col gap-3">
        <h1>Generate Icons with the click of a botton.</h1>
        <h4 className="">
          Use AI to generate icons in seconds instead of paying a designer and
          wait weeks for them to create them for you
        </h4>
        <div className="flex justify-center md:justify-start">
          <HeaderLink
            className=" my-8 animate-pulse text-xl shadow-lg shadow-green-300 hover:animate-none hover:shadow-2xl hover:shadow-cyan-300   md:my-0 "
            href={"/generate"}
          >
            Generate Icon
          </HeaderLink>
        </div>
      </div>
      <div className="flex justify-center md:justify-start">
        <Image
          alt="banner image"
          src={banner}
          width={500}
          height={500}
          className="rounded-lg shadow-2xl shadow-zinc-700 transition-all"
        />
      </div>
    </section>
  );
}

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>alw | Icon Generator</title>
        <meta name="description" content="Generate incredible icons with AI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <HeroBanner />
      </main>
    </>
  );
};

export default HomePage;

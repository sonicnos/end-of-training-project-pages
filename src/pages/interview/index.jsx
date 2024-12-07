import Cards from "@/components/Card/Cards";
import Interview from "@/components/Interview/Interview";
import Curve from "@/components/Layout/Curve";
import Head from "next/head";

export default function InterviewSection() {
  return (
    <>
      <Head>
        <title>Interview</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve backgroundColor={"#BCF366"}>
        <Interview />
        <Cards />
      </Curve>
    </>
  );
}
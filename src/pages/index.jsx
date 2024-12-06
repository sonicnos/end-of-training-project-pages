"use client";
import Head from "next/head";
import Curve from "@/components/Layout/Curve";
import Hero from "@/components/Hero/Hero";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  let changePath = router.route == "/";
  const [mounted, setMounted] = useState(false);
  useEffect((changePath) => {
    setTimeout(() => setMounted(false), 1);
  }),
    [changePath];

  useEffect(() => {
    setTimeout(() => setMounted(true), 600);
  });

  return (
    <>
      <Head>
        <title>Projet de fin préformation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve backgroundColor={"#B0AD98"}>{mounted ? <Hero /> : ""}</Curve>
    </>
  );
}
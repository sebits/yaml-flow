import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import Hero from "../components/Hero/Hero";
import HeroButtonGroup from "../components/Hero/HeroButtonGroup";
import HeroHeader from "../components/Hero/HeroHeader";
import HeroTagline from "../components/Hero/HeroTagline";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { trpc } from "../utils/trpc";

export default function Home() {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Hero>
        <HeroHeader primaryText="A Powerful Editor" secondaryText="for your CI/CD Pipelines!" />
        <HeroTagline text="The days of manually writing YAML for your GitHub and GitLab CI/CD pipelines is over." />
        <HeroButtonGroup primaryButtonText="Start for free" secondaryButtonText="Learn more" />
      </Hero>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

import React from "react";
import { Metadata } from "next";

import StickyBottomCTA from "../components/StickyBottomCTA";
import CourseInstructor from "../components/CourseInstructor";
import SimillarCourses from "../components/SimillarCourses";
import CourseDetail from "../components/CourseDetail";

export const metadata: Metadata = {
  title: "Next js Fullstack Course with Typescript",
  description:
    "Learn how to build Fullstack Production ready applications with Next.js and typescript, From auth to production, we build together a 3 systems in 1 app that you can use for your own projects. Get access to the course for only $100.",
  openGraph: {
    title: "Next js Fullstack Course with Typescript",
    description:
      "Learn how to build Fullstack Production ready applications with Next.js and typescript, From auth to production, we build together a 3 systems in 1 app that you can use for your own projects. Get access to the course for only $100.",
    images: [
      {
        url: "https://utfs.io/f/HLxTbDBCDLwfh3EZFBvu4JxgI1Ei3wHj6FV5GmcsPADLybTr", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Next js Fullstack Course with Typescript",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next js Fullstack Course with Typescript",
    description:
      "Learn how to build Fullstack Production ready applications with Next.js and typescript, From auth to production, we build together a 3 systems in 1 app that you can use for your own projects. Get access to the course for only $100.",
    images: [
      "https://utfs.io/f/HLxTbDBCDLwfh3EZFBvu4JxgI1Ei3wHj6FV5GmcsPADLybTr",
    ], // Replace with your actual image URL
  },
};
export default async function Course({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <>
      <CourseDetail />
      <StickyBottomCTA />
      <SimillarCourses />
      <CourseInstructor />
    </>
  );
}

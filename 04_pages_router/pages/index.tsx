import { Geist, Geist_Mono } from "next/font/google";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";
import { BlogCard as BlogCardType } from "@/types";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const getStaticProps = (async (context) => {
  const res = await fetch("http://localhost:3000/api/blog")
  const data = await res.json()
  return { props: { blogs: data } }
}) satisfies GetStaticProps<{
  blogs: BlogCardType[]
}>

export default function Home({
  blogs
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div
      className={ `${geistSans.className} ${geistMono.className} font-sans` }
    >
      <div className="flex gap-16 p-8 justify-around mt-4 flex-wrap">
        { blogs.map((blog: BlogCardType, i: number) => (
          <BlogCard key={ i } id={ blog.id } imageUrl={ blog.imageUrl } title={ blog.title } desc={ blog.desc } />
        )) }
      </div>
    </div>
  );
}

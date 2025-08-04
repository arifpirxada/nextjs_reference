import { Geist, Geist_Mono } from "next/font/google";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


interface BlogCard {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
}

export default function Home() {

  const [blogs, setBlogs] = useState<BlogCard[]>([])

  const getBlogs = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/blog")
      const data = await res.json()

      setBlogs(data)
    } catch (error) {
      console.log("Error while fetching data", error)
    }
  }

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div
      className={ `${geistSans.className} ${geistMono.className} font-sans` }
    >
      <div className="flex gap-16 p-8 justify-around mt-4 flex-wrap">
        { blogs.map((blog, i) => (
          <BlogCard key={ i } id={ blog.id } imageUrl={ blog.imageUrl } title={ blog.title } desc={ blog.desc } />
        )) }
      </div>
    </div>
  );
}

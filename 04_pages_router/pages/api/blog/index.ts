import type { NextApiRequest, NextApiResponse } from "next";
import shortBlogCardsData from "@/blog_data/short";
import { BlogCard } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogCard[]>
) {
  res.status(200).json(shortBlogCardsData);
}

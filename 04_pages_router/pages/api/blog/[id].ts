import { NextApiRequest, NextApiResponse } from "next";
import longBlogCardsData from "@/blog_data/long";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const blogId = Number(id);

  const blog = longBlogCardsData.filter((item) => item.id == blogId);
  if (blog.length === 0) {
    res.status(400).json({ message: `No blog found` });
  }
  res.status(200).json({ message: `Blog fetched successfully`, blog: blog[0] });
}

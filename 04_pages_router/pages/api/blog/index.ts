import type { NextApiRequest, NextApiResponse } from "next";

interface BlogCard {
  imageUrl: string;
  title: string;
  desc: string;
}

const blogCardsData: BlogCard[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Top Cloud Mergers of 2021",
    desc: "Explore the most discussed cloud technology acquisitions that shaped 2021."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Biggest AI Deals Last Year",
    desc: "A look back at the most influential AI mergers and buyouts in 2021."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Security Sector Mega-Deals",
    desc: "Key cybersecurity firms acquired in 2021 and what it means for the industry."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Enterprise SaaS Acquisitions",
    desc: "Major SaaS company consolidations and purchases that dominated headlines in 2021."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Notable Hardware Tech Mergers",
    desc: "Important hardware sector acquisitions that redefined the landscape last year."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Healthcare Tech: 2021 Acquisitions",
    desc: "Key deals and integrations within the healthcare technology sector in 2021."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Networking Giants’ New Assets",
    desc: "Who acquired whom in the world of networking and connectivity tech in 2021."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Data Analytics M&A",
    desc: "Major data analytics company acquisitions that stood out in 2021."
  }
];


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogCard[]>
) {
  res.status(200).json(blogCardsData);
}

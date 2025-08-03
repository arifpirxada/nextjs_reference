"use client"
import CardSkeletonList from '@/components/CardSkeletonList';
import { useQuery } from '@tanstack/react-query';

interface Post {
  id: number | string;
  title: string;
  desc: string
}

async function fetchPosts() {
  const res = await fetch("http://localhost:3000/api/", {
    cache: "no-store",
  })

  return res.json()
}

const ReactQueryPage = () => {

  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <CardSkeletonList />;
  if (error) return <p>Error loading posts</p>;

  return (
    <div className="p-2">
      <h1>React Query (Tanstack)</h1>
      <div className="flex flex-wrap justify-center mt-2">
        { data.posts.map((post: Post) => (
          <div key={ post.id } className="p-2 flex-30 t-c">
            <h3>{ post.title }</h3>
            <p>{ post.desc }</p>
          </div>
        )) }
      </div>
    </div>
  )
}

export default ReactQueryPage
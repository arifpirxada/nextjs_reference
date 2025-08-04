import { BlogCard } from '@/types'
import Image from 'next/image'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps<{ blog: BlogCard }> = async (context) => {
  const { id } = context.params as { id: string }

  const res = await fetch(`http://localhost:3000/api/blog/${id}`)
  const data: {
    message: string
    blog: BlogCard
  } = await res.json()

  return { props: { blog: data.blog } }
}

const SingleBlogPage = ({
  blog,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="p-8">
      <h1 className="text-center text-2xl font-bold mb-4">{blog.title}</h1>
      <div className="flex mt-12 gap-4 lg:gap-16 flex-wrap-reverse lg:flex-nowrap">
        <p className="mt-6 w-3/4">{blog.desc}</p>
        <Image
          className="rounded-lg mx-auto"
          src={blog.imageUrl}
          alt={`Image for blog titled ${blog.title}`}
          width={600}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}

export default SingleBlogPage
import { BlogCard } from '@/types'
import Image from 'next/image'
import type { InferGetServerSidePropsType, GetServerSideProps, GetStaticPropsContext } from 'next'
import type { GetStaticPaths, GetStaticProps } from 'next'

interface Props {
  post: BlogCard
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch('http://localhost:3000/api/blog').then((res) =>
    res.json()
  )
  const paths = posts.map((post: BlogCard) => ({
    params: { id: String(post.id) },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {

  const { params } = context;

  if (!params?.id) {
    return {
      notFound: true,
    };
  }

  console.log(params)

  const post: {
    message: string,
    blog: BlogCard
  } = await fetch(`http://localhost:3000/api/blog/${params.id}`).then(
    (res) => res.json()
  )

  return {
    props: { post: post.blog },
    revalidate: 60,
  }
}

const SingleISRBlogPage = ({ post }: Props) => {

  return (
    <div className="p-8">
      <h1 className="text-center text-2xl font-bold mb-4">{ post.title }</h1>
      <div className="flex mt-12 gap-4 lg:gap-16 flex-wrap-reverse lg:flex-nowrap">
        <p className="mt-6 w-3/4">{ post.desc }</p>
        <Image
          className="rounded-lg mx-auto"
          src={ post.imageUrl }
          alt={ `Image for blog titled ${post.title}` }
          width={ 600 }
          height={ 300 }
          style={ { objectFit: 'cover' } }
        />
      </div>
    </div>
  )
}

export default SingleISRBlogPage
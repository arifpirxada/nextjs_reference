import { BlogCard } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const SingleBlogPage = () => {
    const router = useRouter()
    const { id } = router.query

    const [blog, setBlog] = useState<BlogCard | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!id) return
        setLoading(true)
        setError(null)

        fetch(`http://localhost:3000/api/blog/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch blog with id ${id}`)
                }
                return res.json()
            })
            .then((data) => {
                setBlog(data.blog)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [id])

    if (loading) return <p className='text-center mt-4'>Loading...</p>
    if (error) return <p>Error: { error }</p>
    if (!blog) return <p>No blog found.</p>

    return (
        <div className="p-8">
            <h1 className="text-center text-2xl font-bold mb-4">{ blog.title }</h1>
            <div className="flex mt-12 gap-4 lg:gap-16 flex-wrap-reverse lg:flex-nowrap">
                <p className="mt-6 flex-3/4">{ blog.desc }</p>
                <Image
                    className="rounded-lg mx-auto"
                    src={ blog.imageUrl }
                    alt={ `Image for blog titled ${blog.title}` }
                    width={ 600 }
                    height={ 300 }
                    objectFit="cover"
                />
            </div>

        </div>
    )
}

export default SingleBlogPage
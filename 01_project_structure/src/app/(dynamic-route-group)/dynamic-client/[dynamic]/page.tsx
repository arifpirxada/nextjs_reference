'use client'
import { use } from 'react'

export default function BlogPostPage({
    params,
}: {
    params: Promise<{ dynamic: string }>
}) {
    const { dynamic } = use(params)

    return (
        <div className='py-2'>
            <p className='text-center py-2'>{ dynamic }</p>
        </div>
    )
}
import CardSkeletonList from "@/components/CardSkeletonList"
import Posts from "@/components/client/Posts"
import { Suspense } from "react"

const UseHookPage = () => {

  const getPosts = async () => {
    const res = await fetch("http://localhost:3000/api/", {
      cache: "no-store",
    })

    return res.json()
  }

  const posts = getPosts() // Don't await the data fetching function

  return (
    <div className="p-2">
      <h1>Use Hook Page</h1>
      <Suspense fallback={<CardSkeletonList />}>
        <Posts posts={ posts } />
      </Suspense>
    </div>
  )
}

export default UseHookPage
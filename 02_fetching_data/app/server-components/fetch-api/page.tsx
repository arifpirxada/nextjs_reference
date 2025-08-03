import Posts from "@/components/server/Posts"

const FetchApiPage = async () => {

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/", {
      cache: "no-store",
    })

    return res.json()
  }

  const posts = await fetchData()

  return (
    <div className="p-2">
      <h1>Server Fetch API</h1>
      <Posts posts={ posts.posts } />
    </div>
  )
}

export default FetchApiPage
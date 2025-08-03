interface Post {
  id: number | string;
  title: string;
  desc: string
}

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className="flex flex-wrap justify-center mt-2">
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="p-2 flex-30 t-c">
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;

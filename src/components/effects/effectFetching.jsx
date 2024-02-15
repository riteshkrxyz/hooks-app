import { useEffect, useState } from "react";

const EffectFetching = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(response, "here ");
      console.log(data);
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            {post.id}
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EffectFetching;

// fetch('');
// await
// pending promise

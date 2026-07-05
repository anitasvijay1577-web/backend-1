import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  
useEffect(() => {
  axios
    .get("http://localhost:3000/posts")
    .then((res) => {
      
      setPosts(res.data.posts); // ✅ correct if backend sends {posts: []}
    })
    .catch((err) => console.log(err));
}, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-80 object-cover"
            />

            <div className="p-4">
              <p className="text-gray-700">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
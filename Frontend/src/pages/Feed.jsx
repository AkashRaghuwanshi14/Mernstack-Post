import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios';

const Feed = () => {

    const [post, setPost] = useState([
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000",
    caption: "Finding peace in the whispers of the morning mist. 🌲✨"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000",
    caption: "City lights and neon nights. The hustle never sleeps. 🏙️🌃"
  }
]);

useEffect(() => {
  axios.get("http://localhost:3000/post-file")
    .then((res) => {
      // We use a functional update to get the 'prev' state
      setPost((prevPosts) => {
        // Merge the existing posts with the new ones from the API
        return [...prevPosts, ...res.data.data];
      });
    })
    .catch(err => console.error("Error fetching posts:", err));
}, []);


  return (
  
     <section className='feed-container'>
  <div className='feed-grid'>
    {post.map((item) => (
      <div key={item.id} className='post-card'>
        <div className="image-wrapper">
          <img src={item.image} alt={item.caption} loading="lazy" />
        </div>
        <div className="post-info">
          <p>{item.caption}</p>
        </div>
      </div>
    ))}
  </div>
</section>
     
 
  )
}

export default Feed

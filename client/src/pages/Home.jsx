import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "lorem ipsum dolor sit amet consectetur",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deleniti odit delectus hic facilis quae ea similique quidem ipsam quia dolore, earum voluptatibus corporis dolorum ad fugiat, eveniet nihil voluptas? Doloremque, quod sunt. Laboriosam quia a inventore veritatis alias ipsa consequuntur omnis voluptates similique et ipsam repellat asperiores deleniti dicta, ullam ex iusto nesciunt pariatur dolores nemo voluptatum beatae!",
      img: "https://picsum.photos/200",
    },
    {
      id: 2,
      title: "lorem ipsum dolor sit amet consectetur",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deleniti odit delectus hic facilis quae ea similique quidem ipsam quia dolore, earum voluptatibus corporis dolorum ad fugiat, eveniet nihil voluptas? Doloremque, quod sunt. Laboriosam quia a inventore veritatis alias ipsa consequuntur omnis voluptates similique et ipsam repellat asperiores deleniti dicta, ullam ex iusto nesciunt pariatur dolores nemo voluptatum beatae!",
      img: "https://picsum.photos/230",
    },
    {
      id: 3,
      title: "lorem ipsum dolor sit amet consectetur",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deleniti odit delectus hic facilis quae ea similique quidem ipsam quia dolore, earum voluptatibus corporis dolorum ad fugiat, eveniet nihil voluptas? Doloremque, quod sunt. Laboriosam quia a inventore veritatis alias ipsa consequuntur omnis voluptates similique et ipsam repellat asperiores deleniti dicta, ullam ex iusto nesciunt pariatur dolores nemo voluptatum beatae!",
      img: "https://picsum.photos/212",
    },
    {
      id: 4,
      title: "lorem ipsum dolor sit amet consectetur",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deleniti odit delectus hic facilis quae ea similique quidem ipsam quia dolore, earum voluptatibus corporis dolorum ad fugiat, eveniet nihil voluptas? Doloremque, quod sunt. Laboriosam quia a inventore veritatis alias ipsa consequuntur omnis voluptates similique et ipsam repellat asperiores deleniti dicta, ullam ex iusto nesciunt pariatur dolores nemo voluptatum beatae!",
      img: "https://picsum.photos/245",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

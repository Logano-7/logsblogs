import React from 'react'

const Menu = () => {
        const posts = [
          {
            id: 1,
            title: "lorem ipsum dolor sit amet consectetur",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deleniti odit delectus hic facilis quae ea similique quidem ipsam quia dolore, earum voluptatibus corporis dolorum ad fugiat, eveniet nihil voluptas? Doloremque, quod sunt. Laboriosam quia a inventore veritatis alias ipsa consequuntur omnis voluptates similique et ipsam repellat asperiores deleniti dicta, ullam ex iusto nesciunt pariatur dolores nemo voluptatum beatae!",
            img: "https://picsum.photos/234",
          },
          {
            id: 2,
            title: "lorem ipsum dolor sit amet consectetur",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deleniti odit delectus hic facilis quae ea similique quidem ipsam quia dolore, earum voluptatibus corporis dolorum ad fugiat, eveniet nihil voluptas? Doloremque, quod sunt. Laboriosam quia a inventore veritatis alias ipsa consequuntur omnis voluptates similique et ipsam repellat asperiores deleniti dicta, ullam ex iusto nesciunt pariatur dolores nemo voluptatum beatae!",
            img: "https://picsum.photos/231",
          },
          {
            id: 3,
            title: "lorem ipsum dolor sit amet consectetur",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deleniti odit delectus hic facilis quae ea similique quidem ipsam quia dolore, earum voluptatibus corporis dolorum ad fugiat, eveniet nihil voluptas? Doloremque, quod sunt. Laboriosam quia a inventore veritatis alias ipsa consequuntur omnis voluptates similique et ipsam repellat asperiores deleniti dicta, ullam ex iusto nesciunt pariatur dolores nemo voluptatum beatae!",
            img: "https://picsum.photos/210",
          },
          {
            id: 4,
            title: "lorem ipsum dolor sit amet consectetur",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim deleniti odit delectus hic facilis quae ea similique quidem ipsam quia dolore, earum voluptatibus corporis dolorum ad fugiat, eveniet nihil voluptas? Doloremque, quod sunt. Laboriosam quia a inventore veritatis alias ipsa consequuntur omnis voluptates similique et ipsam repellat asperiores deleniti dicta, ullam ex iusto nesciunt pariatur dolores nemo voluptatum beatae!",
            img: "https://picsum.photos/156",
          },
        ];
  return (
    <div className='menu'>
        <h1>Other logs you may like</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
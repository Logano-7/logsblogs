import React from "react";
import Trashi from "../img/trash.webp";
import Editi from "../img/edit.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="content">
        <img src="https://picsum.photos/300" alt="" />
        <div className="user">
          <img src="https://picsum.photos/301" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days Ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={`/log?edit=2`}>
              <img src={Editi} alt="" />
            </Link>
            <img src={Trashi} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni odio
          asperiores nemo
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus,
          excepturi ea quam dolor saepe, itaque eum corporis voluptatum tempore
          dolores. Aut rerum quaerat minus distinctio qui explicabo unde. In!
          Debitis maxime eaque ut inventore distinctio officiis pariatur quidem
          eum sapiente aliquam, sunt error beatae dignissimos facere? Ea neque
          inventore cumque, saepe aut mollitia repellat hic eaque quasi fugiat
          dolore!
        </p>
        <p>
          Corporis, consectetur cupiditate rem illo, asperiores tempora sapiente
          ut beatae ipsum inventore quas optio laboriosam esse facere recusandae
          perspiciatis quasi, animi maiores architecto iure eius! Incidunt
          molestias sapiente modi. Temporibus. Error exercitationem quae
          suscipit optio molestias, tenetur nulla molestiae itaque dolore
          nesciunt. Natus libero quae doloremque consequuntur? Expedita
          doloribus, consequuntur dolor temporibus recusandae molestiae mollitia
          cumque tenetur non autem ab. Impedit quibusdam tempora ipsa possimus
          reiciendis eveniet aspernatur, explicabo perspiciatis autem alias
          magni tempore maiores nulla repellat, similique, cum corporis dolor
          expedita laboriosam nemo asperiores! Velit adipisci culpa quis
          eveniet!
        </p>
        <p>
          Facere quo harum accusamus quis officiis laudantium atque doloremque
          culpa illum explicabo dolorem ipsa velit quas, et nulla officia
          quaerat qui doloribus esse, ex iste. Molestiae repudiandae laudantium
          quae omnis? Sint sit, culpa repudiandae officiis maiores ipsum aliquid
          minus inventore dolor minima voluptas quibusdam, suscipit assumenda
          esse perferendis. Aperiam cum ipsum amet dolor illo voluptatum debitis
          nobis quo recusandae suscipit. Optio, voluptatum veritatis pariatur
          minima nisi totam eveniet placeat dolorem, quis doloremque aliquid ad
          in odit? Officia quam facere amet a suscipit delectus! Dolorum
          recusandae adipisci, unde veritatis iure iste! Quo magnam est
          obcaecati cumque odit laboriosam aperiam et sapiente a voluptatem
          necessitatibus eum id animi maiores, porro laudantium adipisci
          suscipit quae, dolor, modi tempore aliquam. Ducimus officia officiis
          quod. Corrupti, laudantium. Fugit quaerat nemo quisquam veniam
          voluptatem? Beatae magni magnam aperiam, nemo iure dolorum fugiat,
          enim laudantium inventore reprehenderit perferendis sed facilis
          molestias nulla odit, repellat tempora accusamus officiis? Deserunt
          odit qui, ab ex totam ipsum repellat nostrum dolorum magni alias in
          porro cum dignissimos dolor iusto iste, fugiat impedit numquam quasi
          accusamus? Nemo dolorem consequuntur possimus saepe officia.
        </p>
        <p>
          Quis in eius, sit officiis dicta iusto consequatur earum, magni culpa
          impedit quidem nostrum ipsam nam pariatur accusantium voluptatem eum
          est quod? Suscipit placeat recusandae iste iusto laboriosam magni
          quos! Dicta quaerat quas ut iusto beatae quod accusantium incidunt
          natus itaque eos? Quaerat similique possimus et libero magnam
          praesentium reprehenderit voluptate officiis asperiores nobis ex illum
          earum, recusandae atque cumque. Distinctio eligendi vitae asperiores,
          vel deserunt provident voluptate quidem fuga quis mollitia id tenetur?
          Molestias optio quisquam beatae cupiditate, ut ducimus. Aliquid nobis
          esse eveniet tempora vel iusto, dignissimos consequatur.
        </p>
        <p>
          Laboriosam exercitationem fugit quidem odio ratione quis debitis
          dolorum incidunt rerum laudantium natus veritatis est, corporis,
          voluptatum hic accusamus molestiae quae fuga earum ab maxime
          reiciendis. Voluptas laborum illum tenetur.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default SinglePost;

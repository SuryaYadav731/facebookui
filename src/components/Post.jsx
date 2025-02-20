// import React from 'react'
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { FaHeart } from "react-icons/fa";
// import { FaRegComments } from "react-icons/fa";
// import { FaShareAlt } from "react-icons/fa";

// function Post({data}) {
//   return (
//     <>
//       <div className="post_container">
//         <div className="person">
//             <div className="author">
//                 <div className="img">
//                     <img src={data.pImg} alt="" />
//                 </div>
//                 <div className="text">
//                     <h3>{data.userName}</h3>
//                     <p>{data.title}</p>
//                 </div>
//             </div>
//             <div className="dot"><BsThreeDotsVertical /></div>
//         </div>
//         <p>{data.description} </p>
//         <div className="post_img">
//             <img src={data.mImg} height="300px" alt="" />
//         </div>
//         <div className="like_comment">
//           <div className="likes"><FaHeart  className='items'/>{data.like}{" "}k</div>
//           <div className="comments"><FaRegComments  className='items'/>{data.comment}{" "}k</div>
//           <div className="share"><FaShareAlt className='items' />{data.share}{" "}k</div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Post

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
const Post = ({data,bgColor, color}) => {
  return (
    <>
      <div
        className="post_container"
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
        }}
      >
        <div className="person">
          <div className="author">
            <div className="img">
              <img src={data.pImg} alt="" />
            </div>
            <div className="text">
              <h3>{data.userName}</h3>
              <p>{data.title}</p>
            </div>
          </div>
          <div className="dot">
            <BsThreeDotsVertical />
          </div>
        </div>
        <p>{data.description}</p>
        <div className="post_img">
          <img src={data.mImg} alt="" />
        </div>
        <div className="like_comment">
          <div className="likes">
            <FaHeart className="items" /> {data.like} K
          </div>
          <div className="comments">
            <FaComment className="items" /> {data.comment} K
          </div>
          <div className="share">
            <FaShare className="items" />
            {data.share} K
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
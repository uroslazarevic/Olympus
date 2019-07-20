import React from "react";

const AsideBtns = ({ post }) => {
  return (
    <ul className="post-aside-btns">
      {post.highlight && (
        <li className="aside-btn trophy-btn">
          <span>
            <i className="fas fa-trophy" />
          </span>
        </li>
      )}
      <li className="aside-btn like-btn">
        <span>
          <i className="far fa-heart" />
        </span>
      </li>
      <li className="aside-btn comment-btn">
        <span>
          <i className="far fa-comment" />
        </span>
      </li>
      <li className="aside-btn share-btn">
        <span>
          <i className="fas fa-share" />
        </span>
      </li>
    </ul>
  );
};

export default AsideBtns;

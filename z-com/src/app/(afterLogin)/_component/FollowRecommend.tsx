"use client";

import style from "./FollowRecommend.module.css";

export default function FollowRecommend() {
  const user = {
    nickname: "재훈",
    id: "jaehoon",
    image: "/jeno.png",
  };
  const onFollow = () => {};
  return (
    <div className={style.container}>
      <div className={style.userLogo}>
        <div>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.title}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}

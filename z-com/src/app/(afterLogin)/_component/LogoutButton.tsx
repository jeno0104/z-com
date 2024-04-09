import style from "./LogoutButton.module.css";

export default function LogoutButton() {
  const onLogout = () => {};
  const me = {
    id: "jeno0104",
    nickname: "안재훈",
    image: "/jeno.png",
  };

  return (
    <button className={style.logOutButton}>
      <div className={style.logOutUserImage} onClick={onLogout}>
        <img src={me.image} alt="me" className={style.meImg} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}

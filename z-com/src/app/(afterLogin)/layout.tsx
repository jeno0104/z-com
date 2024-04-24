"use client";
import { ReactNode } from "react";
import style from "@/app/(afterLogin)/layout.module.css";
import Link from "next/link";
import Image from "next/image";
import ZLogo from "../../../public/zlogo.png";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecommend";
import RightSearchZone from "./_component/RightSearchZone";
type Props = {
  children: ReactNode;
  modal: ReactNode;
};
export default function AfterLoginLayout({ children, modal }: Props) {
  const me = {
    id: "jaehoon",
    image: "asd",
    nickname: "재훈",
  };
  const onLogout = () => {};
  return (
    <div>
      <div className={style.container}>
        <header className={style.leftSectionWrapper}>
          <section className={style.leftSection}>
            <div className={style.leftSectionFixed}>
              <Link href={"/home"} className={style.logo}>
                <div className={style.logoPill}>
                  <Image src={ZLogo} alt={"logo"} width={40} />
                </div>
              </Link>
              <nav>
                <ul className={style.ul}>
                  <NavMenu />
                </ul>
                <Link href="/compose/tweet" className={style.postButton}>
                  게시하기
                </Link>
              </nav>
              <LogoutButton />
            </div>
          </section>
        </header>
        <div className={style.rightSectionWrapper}>
          <div className={style.rightSectionInner}>
            <main className={style.main}>{children}</main>
            <section className={style.rightSection}>
              <RightSearchZone />
              <TrendSection />
              <div className={style.followRecommend}>
                <h3>팔로우 추천</h3>
                <FollowRecommend />
                <FollowRecommend />
                <FollowRecommend />
              </div>
            </section>
          </div>
        </div>
      </div>
      {modal}
    </div>
  );
}

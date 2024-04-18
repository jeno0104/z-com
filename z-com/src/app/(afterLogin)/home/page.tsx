import style from "@/app/(afterLogin)/home/home.module.css";
import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}

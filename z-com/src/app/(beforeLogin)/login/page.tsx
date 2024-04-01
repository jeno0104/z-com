"use client";

import { redirect, useRouter } from "next/navigation";
import styles from "@/app/page.module.css";
import Image from "next/image";
import zlogo from "../../../../public/zlogo.png";
import Link from "next/link";
import Main from "../_component/Main";
export default function LoginRedirect() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

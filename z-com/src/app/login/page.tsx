import { redirect } from "next/navigation";

export default function LoginRedirect() {
  redirect("i/flow/login");
}

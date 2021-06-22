import Head from "next/head";
import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";

import { HomePage } from "./posts/hompage/homepage";

export default function Home() {
  return <HomePage />;
}

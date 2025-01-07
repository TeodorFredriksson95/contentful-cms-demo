import Link from "next/link";
import React from "react";
import styles from "../styles/404.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div className={styles.NotFound}>
      <h1>404</h1>
      <h2>Ooops! That page cannot be found :(</h2>
      <p>
        Redirecting to <Link href="/">Homepage</Link>
      </p>
    </div>
  );
}

"use client";

import { Nova_Round } from "next/font/google";
import styles from "./styles/pages/Index.module.css";
import { Button } from "@mantine/core";
import Link from "next/link";
const novafont = Nova_Round({ weight: "400", subsets: ["latin"] });

const IndexPage = () => (
  <>
    <div className={styles.title_thumb}>
      <div className={styles.title_text}>
        <p
          className={novafont.className}
          style={{
            textAlign: "center",
            fontSize: "30vh",
            top: "50%",
            left: "50%",
          }}
        >
          Stera
        </p>
        <p
          className={novafont.className}
          style={{ fontSize: "3vw", bottom: "20vh" }}
        >
          ν
        </p>
      </div>
    </div>
    <Link href="/login">
      <Button component="a" variant="default">
        ログイン
      </Button>
    </Link>
    <Link href="/signup">
      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
      >
        新規登録
      </Button>
    </Link>
  </>
);

export default IndexPage;

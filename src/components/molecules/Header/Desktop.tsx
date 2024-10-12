import Link from "next/link";

import styles from "./desktop.module.css";
import settings from "./settings";

export default function Mobile() {
  return (
    <div className={styles.desktop}>
      <Link className={styles.logo} href={"/"}>
        abcissa
      </Link>

      <div className={styles.links}>
        <ul>
          {settings.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

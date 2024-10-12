import { createClient } from "@/prismicio";

import styles from "./sobre.module.css";
import { PrismicRichText } from "@prismicio/react";

export default async function About() {
  const client = createClient();
  const about = await client.getByType("sobre");

  return (
    <div className={styles.about}>
      <h1>Sobre</h1>
      {about.results.map((result) => (
        <PrismicRichText field={result.data.content} key={result.id} />
      ))}
    </div>
  );
}

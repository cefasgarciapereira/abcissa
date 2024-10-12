import Image from "next/image";

import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";

import { convertDatetimeToDate } from "@/utils";

import styles from "./post.module.css";

interface Params {
  slug: string;
}

interface PageProps {
  params: Params;
  searchParams: object;
}

export default async function Post(props: PageProps) {
  const client = createClient();
  const page = await client.getByUID("post", props.params.slug);

  if (!page || !page.data || !page.data) return <h1>{"Erro :("}</h1>;

  return (
    <div className={styles.post}>
      <time dateTime={page.data.datetime?.toString()}>
        {convertDatetimeToDate(`${page.data.datetime}`)}
      </time>
      <h1>{page.data.title}</h1>
      <div className={styles.content}>
        <Image
          src={`${page.data.cover.url}`}
          alt={page.data.cover.alt || ""}
          width={500}
          height={500}
          className={styles.cover}
        />
        <PrismicRichText field={page.data.content} />
      </div>
    </div>
  );
}

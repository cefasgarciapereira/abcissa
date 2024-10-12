import Link from 'next/link'

import { convertDatetimeToDate } from '@/utils'
import styles from "./postcard.module.css"

interface PostCardProps {
  title: string
  slug: string
  datetime: string
  description: string
}

export default function PostCard(props: PostCardProps) {
  return (
    <div className={styles.postCard}>
      <time dateTime={props.datetime}>{convertDatetimeToDate(props.datetime)}</time>
      <div>
        <Link className={styles.title} href={`/posts/${props.slug}`}>{props.title}</Link>
        <p className={styles.description}>
          {props.description}
        </p>
      </div>
    </div>
  )
}
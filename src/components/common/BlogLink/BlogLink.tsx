import styles from "./BlogLink.module.css";
import { Tag } from "@/components/common/Tag";

export function BlogLink({
  text,
  url,
  tags,
}: {
  text: string;
  url: string;
  tags: Array<string>;
}) {
  return (
    <>
      <a href={url}>{text}</a>
      <Tag tags={tags} className={styles.container} />
    </>
  );
}

import styles from "./Tag.module.css";

export function Tag({ tags }: { tags: Array<string> }) {
  return (
    <div className={styles.container}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

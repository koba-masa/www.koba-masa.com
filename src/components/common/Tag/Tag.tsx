import styles from "./Tag.module.css";
import classNames from "classnames";

export function Tag({
  tags,
  className,
}: {
  tags: Array<string>;
  className?: string;
}) {
  return (
    <div className={classNames(className, styles.container)}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

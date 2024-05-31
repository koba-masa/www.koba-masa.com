import { type Term } from "@/components/SkillSheet/Project/Project";
import styles from "./Basic.module.css";
import classnames from "classnames";

export function Basic({term, industry, title, className}: {
  term: Term,
  industry: string,
  title: string,
  className: string
}) {
  return (
    <div className={classnames(className, styles["project-basic-container"])}>
      <div className={styles["project-term"]}>
        <div className={styles.heading}><div>期間</div></div>
        <div className={styles.body}>
          <span>
            <div className={styles["project-term-body-start"]}>{term.start} 〜 </div>
            <div className={styles["project-term-body-end"]}>{term.end}</div>
          </span>
        </div>
      </div>
      <div className={styles["project-industry"]}>
        <div className={styles.heading}><div>業界</div></div>
        <div className={styles.body}><span>{industry}</span></div>
      </div>
      <div className={styles["project-title"]}>
        <div className={styles.heading}><div>案件概要</div></div>
        <div className={styles.body}><span>{title}</span></div>
      </div>
    </div>
  );
}

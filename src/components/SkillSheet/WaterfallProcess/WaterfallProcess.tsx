import styles from './WaterfallProcess.module.css';
import classnames from "classnames";

export type WaterfallProcessType = {
  analysis: boolean;
  design: boolean;
  development: boolean;
  testing: boolean;
  deployment: boolean;
  operation_and_maintenance: boolean;
}

export function WaterfallProcess({className, process}: {className: string, process: WaterfallProcessType}) {
  function displayProcess(isDisplay: boolean) {
    return isDisplay ? "○" : "";
  }

  return (
    <div className={classnames(className, styles["wf-process-container"])}>
      <div className={styles["wf-process-heading"]}>分析</div>
      <div className={styles["wf-process-body"]}>{displayProcess(process.analysis)}</div>
      <div className={styles["wf-process-heading"]}>設計</div>
      <div className={styles["wf-process-body"]}>{displayProcess(process.design)}</div>
      <div className={styles["wf-process-heading"]}>開発</div>
      <div className={styles["wf-process-body"]}>{displayProcess(process.development)}</div>
      <div className={styles["wf-process-heading"]}>テスト</div>
      <div className={styles["wf-process-body"]}>{displayProcess(process.testing)}</div>
      <div className={styles["wf-process-heading"]}>デプロイ</div>
      <div className={styles["wf-process-body"]}>{displayProcess(process.deployment)}</div>
      <div className={styles["wf-process-heading"]}>運用/保守</div>
      <div className={styles["wf-process-body"]}>{displayProcess(process.operation_and_maintenance)}</div>
    </div>
  );
}

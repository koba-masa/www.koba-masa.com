import styles from "./Project.module.css";
import { WaterfallProcess } from "@/components/SkillSheet/WaterfallProcess/WaterfallProcess";
import { type WaterfallProcessType } from "@/components/SkillSheet/WaterfallProcess/WaterfallProcess";
import { Basic } from "./Basic";

export type Project = {
  term: Term;
  industry: string;
  title: string;
  methods: "Waterfall" | "Agile";
  process: WaterfallProcessType | undefined;
  technology: Technology;
  remark: string;
}

export type Term = {
  start: string;
  end: string;
}

export type Technology = {
  tools: string[];
  languages: string[];
  frameworks: string[];
  platforms: string[];
}


export function Project({project}: {project: Project}) {
  return (
    <div > {/* className={styles["project-container"]}> */}
      <Basic term={project.term} industry={project.industry} title={project.title} className="" />
      {/* {
        (project.methods === "Waterfall" && project.process) &&
          <WaterfallProcess className={styles["project-waterfall-process"]} process={project.process}/>
      } */}
    </div>
  );
}

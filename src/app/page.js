import { Task } from "@/components/Task";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Task name="Example" description="This is an example task">
        <Task name="Example" description="This is an example task">
          <Task name="Example" description="This is an example task" />
        </Task>
        <Task name="Example" description="This is an example task" />
      </Task>
    </div>
  );
}

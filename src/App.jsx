import { Header, Sidebar } from "./components";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Cristian"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, perferendis! Quo praesentium assumenda delectus corrupti, libero sequi repellat tempora explicabo fugiat error, asperiores, sapiente aliquid expedita. Aperiam exercitationem esse vel!"
          />
        </main>
      </div>
    </div>
  );
}

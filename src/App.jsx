import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Cristian"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, perferendis! Quo praesentium assumenda delectus corrupti, libero sequi repellat tempora explicabo fugiat error, asperiores, sapiente aliquid expedita. Aperiam exercitationem esse vel!"
      />
    </div>
  );
}

import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import typia from "typia";
import {MyType} from "src/types/mytype";
import {MyType2} from "@/types2/mytype2";
import {MyType3} from "./types3/mytype3";

console.log(
  "Path relative to baseUrl: import from \"src/types/mytype\", expected to be",
  false,
  "while returned",
  typia.is<MyType>(null),
  "<- Bad result"
);
console.log(
  "Path mapped from tsconfig.compilerOptions.paths: import from \"@/types2/mytype2\", expected to be",
  false,
  "while returned",
  typia.is<MyType2>(null),
  "<- Bad result"
);
console.log(
  "Relative path: import from \"./types3/mytype3\", expected to be",
  false,
  "while returned",
  typia.is<MyType3>(null),
  "<- Good result"
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

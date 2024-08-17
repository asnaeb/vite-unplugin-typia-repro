import './App.css'
import typia from "typia";
import type {MyType} from "@/types/mytype";

const originalType = `interface MyType {
  email: string & tags.Format<"email">
  date: string & tags.Format<"date">;
  uri: string & tags.Format<"uri">;
  int: number & tags.Type<"int32">;
  double: number & tags.Type<"double">;
}`;


const case1 = `import {MyType} from "@/types/mytype";
typia.random<MyType>();
`

function App() {
  return (
    <div>
      <h1>
        unplugin-typia test
      </h1>
      <div>
        <h4>
          Sample type
        </h4>
      <code>
        <pre>
          {originalType}
        </pre>
      </code>
      </div>
        <h4>
          Imported with alias
        </h4>
        <code>
          <pre>
            {case1}
          </pre>
        </code>
        <h4>
          Produces
        </h4>
        <code>
          <pre>
            {JSON.stringify(typia.random<MyType>(), null, 2)}
          </pre>
        </code>
    </div>
  )
}

export default App

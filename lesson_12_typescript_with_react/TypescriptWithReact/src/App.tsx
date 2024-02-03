import { useState } from "react"
import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

function App() {

  const [count,setCount] = useState(0)

  return (
    <div>
      <Heading title="Heading"/>
      <Section title="Section Title">
        <h1>Children 1</h1>
        <p>Children 2</p>
      </Section>
      <Counter setCount={setCount}>
        Count is {count}
      </Counter>
      <List items={["Coffee","Taco","Code"]} render={(item: string) => <span className="gold">{item}</span>}/>
    </div>
  )
}

export default App

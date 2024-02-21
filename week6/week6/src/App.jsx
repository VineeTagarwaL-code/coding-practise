import { useState, React, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeaderButton />
      <Header title={"vineet loves here"}></Header>
      <Header title={"vineet loves here"}></Header>
      <Header title={"vineet loves here"}></Header>

      <Header title={"vineet loves here"}></Header>
      <Header title={"vineet loves here"}></Header>
    </div>
  )
}

function HeaderButton() {
  const [title, setTitle] = useState("pritika baby");

  function handleClick(e) {
    e.preventDefault();
    setTitle("vineet loves pritika much " + Math.random())

  }
  return (
    <>
      <button onClick={handleClick}>Click me bitch</button>
      <Header title={title}></Header>

    </>
  )


}

const Header = memo(function Header({ title }) {
  return (
    <h1>{title}</h1>
  )
})
export default App

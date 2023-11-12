import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'


//function App() {
//   const name = "Elizabeth Mbugua";
//   const education = [
//     "B.Ed in French and CRE",
//     "Currently studying Frontend Development at Azubi Africa"
//   ];
//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Article Writing" 
//   ];
//   const professionalBackground = 'Freelance Article Writer'; 
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Hello World</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>  
//         <p>I am {name}. I am excited to share my journey in education and front-end development, enhanced by my experience in article writing.</p>
//       <h2>Educational Background</h2>
//       <ul>
//         {education.map((item, index) => <li key={index}>{item}</li>)}
//       </ul>
//       <h2>Skills</h2>
//       <ul>
//         {skills.map((skill, index) => <li key={index}>{skill}</li>)}
//       </ul>
//       <h2>Professional Background</h2>
//       <p>{professionalBackground}</p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <ButtonJS/>
//     </>
//   )
// }
function App () {
  return (
    <>
     
      <Button name= 'Login'/>
      <Button name= 'Signin'/>
    </>
  )
}
export default App


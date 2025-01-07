import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

function MyApp(){
  return(
    <div>
      <h1>Custom React App we made </h1>
    </div>
  )
}
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser = "daksh"

const reactElement = React.createElement(
  'a',
  {href:'https://youtube.com',target:'_blank'},
  'click me to visit youtube',
  anotherUser 
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)

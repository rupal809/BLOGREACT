import React from 'react'

const App = () => {
  return (
    <div>
      Tecjhnology BLOG
     <ul>
  <li>React Basics</li>
  <li>Introduction to JavaScript</li>
  <li>HTML </li>
  <li>CSS </li>
  <li>Understanding JSX</li>
  <li>React Components</li>
  <li>Props in React</li>
  <li>State </li>
  <li>React </li>
  <li>Bootstrap </li>
</ul> 
<form >
    
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" placeholder="Enter your name"/><br/><br/>

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" placeholder="Enter your email"/><br/><br/>

    <label htmlFor="message">Message:</label><br/>
    <textarea id="message" rows="5" cols="30"></textarea><br/><br/>

    <button type="submit" id="submitBtn">Send</button>

</form>
    </div>
  )
}

export default App

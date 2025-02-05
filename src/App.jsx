import { useState } from 'react'
import axios from 'axios'
import './App.css'
import ReactMarkdown from 'react-markdown';

const App = () => {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");

  async function APICall(){
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyALreEffrbW8UC_b0Q5ntUNjivH3CDF0d0",
      method: "post",
      data : {"contents":[{"parts":[{"text":question}]}]}
    });
    console.log(setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']));
}

  return (
    <>
    <header>
      <nav>
        <a href='#'> Home </a>
        <a href='#'> Links </a>
        <a href='#'> Contact </a>
      </nav>
    </header>
    <body>
      <div className='div1'>
      <h1> (Ai-Powered ChatBot) by Aarez</h1>
      <textarea className='textside' value={question} onChange={(e) => setquestion(e.target.value)} cols = "30" rows = "10"> Type Question </textarea>
      <button className='generatebutton' onClick={APICall}>Search</button>
      <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </body>
    </>
  );
}

export default App
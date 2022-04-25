import React, { useState } from 'react'
import axios from 'axios'
function Kanye() {
    const [quote, setQuote] = useState("")
    function getQuote(){
        axios.get('https://api.kanye.rest')
        .then(res => setQuote(res.data))
    }
  return (
    <>
    <button onClick={() => getQuote}>Get Kanye</button>
    <p>{quote}</p>
    </>
  )
}

export default Kanye
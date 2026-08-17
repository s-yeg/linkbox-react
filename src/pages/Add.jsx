import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {

    const navigation = useNavigate()

    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")

    async function clickAdd() {

        const response = await fetch('http://localhost:8080/api/links',
             { method: 'POST',
               credentials: 'include',
               headers: { 'Content-Type': 'application/json'},
               body: JSON.stringify({ title: title, url: url })
             })

        const data = await response.text()


        if (data === "add success") { navigation("/") }
    }

    return (
        <div className='container'>

            <h1>URL +</h1>

            <div className='loginBox'>

                <input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                <input type='text'placeholder='URL'onChange={(e) => setUrl(e.target.value)}/>

                <button onClick={clickAdd}> ADD </button>

            </div>

        </div>
    )
}

export default Add
import { useNavigate } from 'react-router-dom'
import '../App.css'

function Home() {

    const navigation = useNavigate()

    async function clickLogout() {

        const response = await fetch('http://localhost:8080/api/logout', { method: 'POST', credentials: 'include' })

        const data = await response.text()

        if (data === "logout success") { navigation("/login")}
    }


    return (
        <div className='container'>

            <h1>LINK BOX</h1>

            <div className='menuBox'>

                <button onClick={() => navigation("/links")}> MY URL </button>

                <button onClick={() => navigation("/add")}> URL + </button>

                <button onClick={() => navigation("/delete")}> URL - </button>


                <button onClick={clickLogout}> LOGOUT </button>

            </div>

        </div>
    )
}

export default Home
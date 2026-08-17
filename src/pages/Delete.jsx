import { useEffect, useState } from 'react'

function Delete() {

    const [links, setLinks] = useState([])

    async function loadLinks() {

        const response = await fetch(
            'http://localhost:8080/api/links',
            {
                method: 'GET',
                credentials: 'include'
            }
        )

        const data = await response.json()

        console.log(data)

        setLinks(data)
    }


    async function clickDelete(id) {

        const response = await fetch(
            `http://localhost:8080/api/links/${id}/delete`,
            {
                method: 'POST',
                credentials: 'include'
            }
        )

        const data = await response.text()

        console.log(data)

        if (data === "delete success") {
            loadLinks()
        }
    }


    useEffect(() => {

        loadLinks()

    }, [])


    return (
        <div className='container'>

            <h1>URL -</h1>

            {links.map((link) => (

                <div key={link.id}>

                    <h3>{link.title}</h3>

                    <p>{link.url}</p>

                    <button onClick={() => clickDelete(link.id)}> DELETE </button>

                </div>

            ))}

        </div>
    )
}

export default Delete
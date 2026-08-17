import { useEffect, useState } from 'react'

function Links() {

    const [links, setLinks] = useState([])

    useEffect(() => {

        async function loadLinks() {

            const response = await fetch( 'http://localhost:8080/api/links', { method: 'GET',credentials: 'include' })

            const data = await response.json()

            setLinks(data)
        }

        loadLinks()

    }, [])

    return (
        <div className='container'>

            <h1>MY URL</h1>

            {links.map((link) => (
                <div key={link.id}>
                    <h3>{link.title}</h3>
                    <a href={link.url} target="_blank"> {link.url} </a>
                </div>
            ))}

        </div>
    )
}

export default Links
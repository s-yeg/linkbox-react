import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function LoginCheck() {

    const [login, setLogin] = useState(null)

    useEffect(() => {

        async function checkSession() {

            const response = await fetch('http://localhost:8080/api/session', {
                credentials: 'include'
            })

            const data = await response.text()

            if (data === 'login') {
                setLogin(true)
            } else {
                setLogin(false)
            }
        }

        checkSession()

    }, [])

    if (login === null) {
        return null
    }

    if (login === false) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default LoginCheck
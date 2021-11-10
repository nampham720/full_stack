import React from 'react'

const Notification = ({ message, error }) => {
    console.log(error)
    if (message !== null & error === null) {
        return (
            <div className="message">
            {message}
            </div>
        )
    }
    else if (error !== null) {
        return (
            <div className="error">
            {error}
            </div>
        )
    }
    return null
}

export { Notification }
import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "./LanguageContext"

export function Clock() {
    const [date, setDate] = useState(new Date())
    const language = useContext(LanguageContext)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return (
        <div>
            <h2>{language === 'en' ? `Current time: ${date.toLocaleTimeString()}` : `Ora corrente: ${date.toLocaleTimeString()}`}</h2>
        </div>

    )
}
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"


export default function MyCart() {
    const { test, count, setCount } = useContext(AuthContext)
    return (
        <div>MyCart {count}</div>
    )
}

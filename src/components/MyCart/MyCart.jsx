import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"


export default function MyCart() {
    const { test, count, setCount, cart, setCart } = useContext(AuthContext)
    return (
        <div>MyCart</div>
    )
}

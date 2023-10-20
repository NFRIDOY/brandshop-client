import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"


export default function Footer() {
    const { isDarkModeFunc } = useContext(AuthContext)

    return (
        <footer className={ isDarkModeFunc ? "footer footer-center p-4 text-white  bg-violet-800":" footer footer-center p-4 bg-base-300 text-base-content"}>
            <aside>
                <p>Copyright © 2023 - All right reserved by NF Technology</p>
            </aside>
        </footer>
    )
}

import { useContext, useState } from "react";
import Banner from "../Banner/Banner";
import { AuthContext } from "../Provider/AuthProvider";
import { data } from "autoprefixer";
import BrandNameCard from "../BrandNameCard/BrandNameCard";


export default function Home() {
    const { test, currentUser, setCurrentUser, createUserByEmail, signInGoogle } = useContext(AuthContext)
    const [brandNames, setBrandNames] = useState([])
    fetch("http://localhost:5000/brandNames")
        .then(res => res.json())
        .then(data => {
            setBrandNames(data)
            console.log(data)
        })
    return (
        <div>
            <Banner></Banner>
            {/* Home {test} */}
            <div className="max-w-7xl mx-auto p-8 text-center ">
                <h1 className="my-8 text-8xl font-bold">Our Brands</h1>
                <div className="grid grid-cols-3 gap-y-16">
                    {
                        brandNames.map(brand => <BrandNameCard key={brand._id} brand={brand} ></BrandNameCard>)
                    }
                </div>
            </div>

        </div>
    )
}

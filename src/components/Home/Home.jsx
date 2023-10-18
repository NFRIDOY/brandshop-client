import { useContext, useState } from "react";
import Banner from "../Banner/Banner";
import { AuthContext } from "../Provider/AuthProvider";
import { data } from "autoprefixer";
import BrandNameCard from "../BrandNameCard/BrandNameCard";
import { useLoaderData } from "react-router-dom";
import Loading from "../Loading/Loading";


export default function Home() {
    const brandsLoaderData = useLoaderData()
    const { test, currentUser, setCurrentUser, createUserByEmail, signInGoogle, loading, setLoading } = useContext(AuthContext)
    const [brandNames, setBrandNames] = useState(brandsLoaderData)
    if (brandNames) {
        setLoading(false)
    }
    else {
        setLoading(true)
    }
    // fetch("http://localhost:5000/brandNames")
    //     .then(res => res.json())
    //     .then(data => {
    //         setBrandNames(data)
    //         console.log(data)
    //     })
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto p-8 text-center ">
                <h1 className="my-8 text-8xl font-bold">Our Brands</h1>
                {
                    brandsLoaderData && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
                        {
                            brandNames ? brandNames?.map(brand => <BrandNameCard key={brand._id} brand={brand} ></BrandNameCard>) : <Loading></Loading>
                        }
                    </div>
                }

            </div>

        </div>
    )
}
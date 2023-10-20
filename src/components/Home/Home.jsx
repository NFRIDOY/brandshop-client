import { useContext, useState } from "react";
import Banner from "../Banner/Banner";
import { AuthContext } from "../Provider/AuthProvider";
import { data } from "autoprefixer";
import BrandNameCard from "../BrandNameCard/BrandNameCard";
import { useLoaderData } from "react-router-dom";
import Loading from "../Loading/Loading";
import DarkModeToggle from "react-dark-mode-toggle";


export default function Home() {
    // const [isDarkMode, setIsDarkMode] = useState(() => false);
    const brandsLoaderData = useLoaderData()
    const { test, currentUser, setCurrentUser, createUserByEmail, signInGoogle, loading, setLoading, isDarkModeFunc, setIsDarkModeFunc } = useContext(AuthContext)
    const [brandNames, setBrandNames] = useState(brandsLoaderData)
    if (brandNames) {
        setLoading(false)
    }
    else {
        setLoading(true)
    }
    // fetch("https://brandshop-server-three.vercel.app/brandNames")
    //     .then(res => res.json())
    //     .then(data => {
    //         setBrandNames(data)
    //         console.log(data)
    //     })

    return (
        <div className={isDarkModeFunc ? "bg-violet-950" : ""}>
            {/* <div> */}
            {/* <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
            /> */}
            <Banner></Banner>
            {/* <input type="checkbox" className="toggle" checked /> */}

            <div className="max-w-7xl mx-auto p-8 text-center ">
                <h1 className={isDarkModeFunc ? "my-8 text-8xl font-bold text-white" : "my-8 text-8xl font-bold "} >Our Brands</h1>
                {
                    !loading ? (brandNames && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-16">
                        {
                            brandNames && brandNames?.map(brand => <BrandNameCard key={brand._id} brand={brand} ></BrandNameCard>) // : <div className='mx-auto w-fit'><span className="loading loading-ring loading-lg text-center "></span></div>
                        }
                    </div>) : <div className='mx-auto w-fit'><span className="loading loading-ring loading-lg text-center "></span></div>
                }

            </div>
            <div className={isDarkModeFunc ? "max-w-7xl mx-auto p-8 text-center text-gray-400" : "max-w-7xl mx-auto p-8 text-center"}>
                <h1 className="my-8 text-5xl font-bold">
                    Top Brands
                </h1>
                <div className="mx-auto">
                    {
                        !loading ? (brandNames && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16  ">
                            {
                                brandNames && brandNames.slice(2, 5)?.map(brand => <BrandNameCard key={brand._id} brand={brand} ></BrandNameCard>) // : <div className='mx-auto w-fit'><span className="loading loading-ring loading-lg text-center "></span></div>
                            }
                        </div>) : <div className='mx-auto w-fit'><span className="loading loading-ring loading-lg text-center "></span></div>
                    }
                </div>
            </div>
            <div className={isDarkModeFunc ? "max-w-7xl mx-auto p-8 text-center text-gray-400" : "max-w-7xl mx-auto p-8 text-center"}>
                <h1 className="my-8 text-3xl font-bold">
                    Leading Computer, Laptop & Gaming PC Retail & Online Shop In The World
                </h1>
                <p>
                    Technology has become a part of our daily lives, and we depend on tech products daily for a vast portion of our lives. There is hardly a home In The World without a tech product. This is where we come in. NF Technology Ltd. started as a Tech Product Shop  in March 2007. We focus on giving the best customer service In The World, following our motto of “Customer Comes First.” This is why NF Technology is the most trusted computer shop In The World today, capturing the loyalty of a large customer base. After a long 16-year journey, NF Technology Ltd. was certified with the renowned &quot;ISO 9001:2015 certification&quot; as a recognition for the best Quality Control Management System. As an ISO-certified organization, NF Technology Ltd. is now up to the international standards that specify a Quality Management System (QMS). This Certification denotes that the organization strictly maintains all sorts of regulatory requirements to provide customers with products and services of a global standard.
                </p>
            </div>
            <div className={isDarkModeFunc ? "max-w-7xl mx-auto p-8 text-center text-gray-400" : "max-w-7xl mx-auto p-8 text-center"}>
                <h1 className="my-8 text-5xl font-bold">
                    Why We Are Best
                </h1>
                <p>
                    <ul>
                        <li>
                            <h3 className="my-8 text-xl font-bold">
                                Best Laptop Shop In The World
                            </h3>
                            <p>
                                NF Technology is the most popular Laptop Brand Shop in BD. NF Technology Laptop Shop has the perfect device, whether you are a freelancer, officegoer, or student. Gamers love our collection of Gaming Laptops because we always bring the latest laptops In The World. As the best laptop shop in BD, a customer’s budget is our first concern. We bring the latest Intel Laptop and AMD Laptop under budget for every customer - from starters to expert users. NF Technology is considered the most trusted laptop shop in BD, allowing you to buy the best laptops from top laptop brands in the world. Along with the best laptop brands, our experts provide you with the best buying decisions base on your needs and budget - making NF Technology the most trusted laptop shop In The World. NF Technology lets you buy an official Apple MacBook Air or MacBook Pro from Apple Store In The World. NF Technology sells the latest models of the most popular laptop brands, such as - Razer, HP, Dell, Apple MacBook, Asus, Acer, Lenovo, Microsoft Surface, MSI, Gigabyte, i-Life, Walton, Xiaomi MI, Huawei, Chuwi, etc.
                            </p>
                        </li>
                        <li>
                            <h3 className="my-8 text-xl font-bold">
                                Best Gaming PC Shop In The World
                            </h3>
                            <p>
                                We at NF Technology love gaming. Therefore, we aim to provide a holistic gaming experience with our best gaming PC shop In The World, “NF Technology Rig House.” The Rig House is a specialized shop for PC builds with high-end PC components. NF Technology Rig House is highly decorated with the best gaming PC parts for customers to build online Gaming or editing PC. Our gaming PC shop In The World offers the broadest range of Gaming PC, Gaming Laptops, and Game Consoles from XBOX & PlayStation. NF Technology’s largest Gaming PC shop consists of Gaming Motherboards, Liquid Coolers, Custom Water Cooling for PC, Gaming Casings, high-performance RAM Kits, Graphics Cards, etc. Our exceptional Gaming accessories cover Gaming Chairs, Gaming Sofas, RGB Mousepads, Gaming Headphones, Headphone Stands, RGB Gaming PC Light-Strips and many more. We have strategic partnerships with many world-renowned computer Gaming brands like Razer, PNY, ASRock, Asus, Zadak, GALAX, Noctua, Antec, Lian Li, CRYORIG, EKWB, Gamdias, KWG, XFX, etc. Our gaming concern extends to leading gaming brands, including A4Tech Bloody, SteelSeries, Logitech, Corsair, Redragon, Cooler Master, Fantech, DeepCool, Cougar, Gigabyte & Elgato products at our exclusive Gaming PC Shop.
                            </p>
                        </li>
                    </ul>
                </p>
            </div>

        </div>
    )
}
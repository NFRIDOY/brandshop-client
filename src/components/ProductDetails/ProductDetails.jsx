import { useContext } from "react"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider"


export default function ProductDetails() {
    const productDetailsData = useLoaderData()
    console.log(productDetailsData)
    const { _id, image, name, brandName, type, price, shortDescription, rating } = productDetailsData
    const {cart, setCart, cartList} = useContext(AuthContext)
    const handleAddToCart = () => {
        cartList.push(productDetailsData)
        setCart(cartList)
        alert("Add To Cart")
    }
    return (
        <div>
            
            <h1 className="text-4xl">Cart List  {cart}</h1>
            {/* <h1 className="text-4xl">ProductDetails {productDetailsData?._id} {cartList.legnth} </h1> */}
            <div className="max-w-7xl mx-auto my-10 ">
                <div><img className=" object-cover h-96 w-full rounded-t-lg" src={image} alt="" /></div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    {/* <th>{cartList.length}</th> */}
                                    <th>Name</th>
                                    <th>Brand Name</th>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Short Description</th>
                                    <th>Rating</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {/* row 1 */}
                                <tr className="bg-base-200">
                                    <th>{name}</th>
                                    <th>{brandName}</th>
                                    <th>{type}</th>
                                    <th>{price}</th>
                                    <th>{shortDescription}</th>
                                    <th>{rating}</th>
                                    <th>
                                        <button onClick={handleAddToCart}>Add To Cart </button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

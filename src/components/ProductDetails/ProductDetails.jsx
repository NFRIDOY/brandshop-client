import { useContext } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider"
import { data } from "autoprefixer"
import toast from "react-hot-toast"


export default function ProductDetails() {
    const productDetailsData = useLoaderData()
    console.log(productDetailsData)
    const { _id, image, name, brandName, type, price, shortDescription, rating } = productDetailsData
    const { cart, setCart, cartList } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleAddToCart = () => {
        // cartList.push(productDetailsData)
        // console.log(productDetailsData)
        const addProductToCart = { product_id:_id, image, name, brandName, type, price, shortDescription, rating}
        // setCart(cartList)
        // alert("Add To Cart Btn")

        fetch("https://brandshop-server-three.vercel.app/myCart", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProductToCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // alert("Tring To Add To Cart")
                if(data.insertedId) {
                    // alert("Add To Cart Successfull")
                    toast.success('Add To Cart Successfull')
                    navigate(-1);
                }
                else {
                    toast.error('Add To Cart Failed')
                    // alert("Add To Cart Failed")
                }
            })

    }
    return (
        <div>

            {/* <h1 className="text-4xl">Cart List  {cart}</h1> */}
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
                                        <button className="btn btn-primary text-white hover:btn-error" onClick={handleAddToCart}>Add To Cart </button>
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

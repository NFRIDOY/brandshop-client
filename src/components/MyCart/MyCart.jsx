import { useContext, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { useLoaderData } from "react-router-dom"
import toast from "react-hot-toast";


export default function MyCart() {
    const { test, count, setCount, cart, setCart } = useContext(AuthContext)
    const cartLoaderData = useLoaderData();
    const [cartList, setCartList] = useState(cartLoaderData)
    console.log(cartList)
    // const { _id, image, name, brandName, type, price, shortDescription, rating } = cartList;
    // console.log(name)

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myCart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log("Tring To Delete")
                // console.log(data)
                // console.log(data.deletedCount)
                if (data.deletedCount > 0) {
                    toast.success("Deleted")
                    const remainings = cartList.filter(product => product._id !== id)
                    setCartList(remainings)
                }
                else {
                    toast.error("Failed To Delete")

                }
            })

    }

    // const handleBuyAll = (e) => {
    //     e.preventDefault()
    //     // const form = e.taget
    //     toast.success("Congratulations")
    // }


    return (
        <div>
            {/* < onSubmit={handleBuyAll}> */}
            <div>
                {/* <h1 className="text-5xl font-bold text-center mb-16">CART</h1> */}
                <div className="overflow-x-hidden max-w-7xl mx-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th></th> */}
                                <th className="text-center ">Image</th>
                                <th className="text-center ">Name</th>
                                <th className="text-center ">Brand Name</th>
                                <th className="text-center hidden lg:visible">Type</th>
                                <th className="text-center ">Price</th>
                                <th className="text-center hidden lg:visible">Short Description</th>
                                <th className="text-center hidden lg:visible">Rating</th>
                                <th className='text-center '>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartLoaderData && cartList?.map(cartItem => <tr key={cartItem._id} className="bg-base-200">
                                    {/* <th></th> */}
                                    <th>
                                        <img className="object-cover h-20" src={cartItem?.image} alt="" />
                                    </th>
                                    <th className="text-center ">{cartItem?.name}</th>
                                    <th className="text-center ">{cartItem?.brandName}</th>
                                    <th className="text-center hidden lg:visible">{cartItem?.type}</th>
                                    <th className="text-center ">{cartItem?.price}</th>
                                    <th className="text-center hidden lg:visible">{cartItem?.shortDescription}</th>
                                    <th className="text-center hidden lg:visible">{cartItem?.rating}</th>
                                    <th className="text-center ">
                                        <button className="btn bg-red-500 text-white hover:bg-red-600" onClick={() => handleDelete(cartItem._id)}>
                                            Delete
                                        </button>
                                    </th>
                                </tr>)

                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* {
                    !cartLoaderData && <div className="text-center my-12">
                        <button className="btn btn-success text-white" type="submit">Buy All</button>
                    </div>
                }
                {
                    cartLoaderData && <div className="h-full"></div>
                } */}

            {/* </> */}
        </div>
    )
}

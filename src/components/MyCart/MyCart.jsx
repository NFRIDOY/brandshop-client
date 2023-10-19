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
                if(data.deletedCount>0) {
                    toast.success("Deleted")
                    const remainings = cartList.filter(product => product._id !== id)
                    setCartList(remainings)
                } 
                else {
                    toast.error("Failed To Delete")

                }
            })

    }
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th></th> */}
                                <th>Image</th>
                                <th>Name</th>
                                <th>Brand Name</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Short Description</th>
                                <th>Rating</th>
                                <th className=''>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartLoaderData && cartList?.map(cartItem => <tr key={cartItem._id} className="bg-base-200">
                                    {/* <th></th> */}
                                    <th>
                                        <img className="object-cover h-20" src={cartItem?.image} alt="" />
                                    </th>
                                    <th>{cartItem?.name}</th>
                                    <th>{cartItem?.brandName}</th>
                                    <th>{cartItem?.type}</th>
                                    <th>{cartItem?.price}</th>
                                    <th>{cartItem?.shortDescription}</th>
                                    <th>{cartItem?.rating}</th>
                                    <th>
                                        <button className="btn bg-red-500 text-white hover:bg-red-600" onClick={() => handleDelete(cartItem._id)}>Delete {cartItem._id} </button>
                                    </th>
                                </tr>)

                            }
                            {/* row 1

                            {/* row 2 */}
                            {/* <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr> */}
                            {/* row 3 */}
                            {/* <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                {

                }
            </div>
        </div>
    )
}

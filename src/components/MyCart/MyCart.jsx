import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { useLoaderData } from "react-router-dom"


export default function MyCart() {
    const { test, count, setCount, cart, setCart } = useContext(AuthContext)
    const cartLoaderData = useLoaderData();
    console.log(cartLoaderData)
    const { _id, image, name, brandName, type, price, shortDescription, rating } = cartLoaderData;
    return (
        <div>
            MyCart
            <div>
                Cart
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Brand Name</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Short Description</th>
                                <th>Rating</th>
                                <th className='col-span-2'>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartLoaderData && cartLoaderData?.map(cartItem => <tr key={cartItem._id} className="bg-base-200">
                                    <th>1</th>
                                    <th>{image}</th>
                                    <th>{name}</th>
                                    <th>{brandName}</th>
                                    <th>{type}</th>
                                    <th>{price}</th>
                                    <th>{shortDescription}</th>
                                    <th>{rating}</th>
                                    <th>
                                        <button className="btn btn-primary text-white hover:btn-error" onClick={handleAddToCart}>Add To Cart </button>
                                    </th>
                                    <th>
                                        <button className="btn btn-primary text-white hover:btn-error" onClick={handleAddToCart}>Add To Cart </button>
                                    </th>
                                </tr>)

                            }
                            {/* row 1 */}

                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
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

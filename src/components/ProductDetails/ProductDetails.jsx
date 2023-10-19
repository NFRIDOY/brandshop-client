import { useLoaderData } from "react-router-dom"


export default function ProductDetails() {
    const productDetailsData = useLoaderData()
    console.log(productDetailsData)
    const { _id, image, name, brandName, type, price, shortDescription, rating } = productDetailsData
    return (
        <div>
            {/* <h1 className="text-8xl">ProductDetails {productDetailsData?._id}</h1> */}
            <div className="max-w-7xl mx-auto my-10 ">
                <div><img className=" object-cover h-96 w-full rounded-t-lg" src={image} alt="" /></div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Brand Name</th>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Short Description</th>
                                    <th>Rating</th>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

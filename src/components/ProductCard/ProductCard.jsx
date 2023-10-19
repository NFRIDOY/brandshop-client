import { Link, Navigate } from "react-router-dom"

// BrandProductCard
export default function ProductCard({ product }) {
    const { _id, image, name, brandName, type, price, shortDescription, rating } = product
    // console.log(product)
    const handleUpdate = () => {
        <Navigate to={`/products/${_id}`}></Navigate>
    }
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                <img
                    src={image}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {name}

                    </p>
                    <p>
                        {type}
                    </p>

                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        ${price}
                    </p>
                </div>
                <p className="mb-5 block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {shortDescription}
                </p>

            </div>
            <div className="p-6 pt-auto pb-4 space-y-2">
                <hr />
                <span className="">
                    Rating: {rating} <svg className="inline" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                </span>
                <div className="block">
                    Brand: {brandName}
                </div>
                <div className="block">
                    Brand: {type}
                </div>
                <button
                    className="border-2 block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Details
                </button>
                <button
                    className="border-2 block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    <Link to={`/updateProducts/${_id}`}>
                        Update
                    </Link>
                </button>
            </div>
        </div>
        // <div className="w-[50vh]">
        //     <div className="card w-full bg-base-200 shadow-xl">
        //         <figure className="px-10 pt-10">
        //             <img src={image} alt="Product" className="rounded-xl object-cover h-72" />
        //         </figure>
        //         <div className="card-body items-center text-center">
        //             <h2 className="card-title text-4xl">{name}</h2>
        //             <p className="text-gray-500 overflow-auto">{shortDescription}</p>
        //             <div className="card-title flex justify-between w-full px-8 my-4">
        //                 <h2 className="flex justify-start">Brand: {brandName}</h2>
        //                 <h2 className="flex justify-end">Type: {type}</h2>
        //             </div>
        //             <div className=" card-title flex w-full px-8 my-4">

        //                 <p className="flex items-center justify-start">
        //                     <span>
        //                         Rating: {rating}
        //                     </span>
        //                     <span>
        //                         <svg className="inline" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
        //                     </span>
        //                 </p>
        //                 <h2 className=" justify-end text-primary">Price : ${price}</h2>
        //             </div>

        //             <div className="card-actions">
        //                 <button className="btn btn-secondary text-white">Details</button>
        //                 <Link to={`/updateProducts/${_id}`}>
        //                     <button className="btn btn-success text-white" >Update</button>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

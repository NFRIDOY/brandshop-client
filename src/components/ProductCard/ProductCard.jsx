
// BrandProductCard
export default function ProductCard({ product }) {
    const { image, name, brandName, type, price, shortDescription, rating } = product
    console.log(product)
    return (
        <div>
            <div className="card w-fit bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Product" className="rounded-xl object-cover h-96 w-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl">{name}</h2>
                    <h2 className="card-title">Brand: {brandName}</h2>
                    <h2 className="">Type: {type}</h2>
                    <p className="text-gray-500">{shortDescription}</p>
                    <div className=" card-title flex w-full px-8 my-4">
                        
                        <p className="flex items-center justify-start">
                            <span>
                                Rating: {rating}
                            </span>
                            <span>
                                <svg className="inline" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                            </span>
                        </p>
                        <h2 className=" justify-end text-primary">Price : ${price}</h2>
                    </div>

                    <div className="card-actions">
                        <button className="btn btn-secondary text-white">Details</button>
                        <button className="btn btn-success text-white">Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Link } from "react-router-dom"


export default function BrandNameCard({ brand }) {
    const { _id, brandId, brandImage, brandName } = brand

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <Link to={`/products/${brandName}`}>
                    <img src={brandImage} className="object-cover h-80" alt="Product" />
                </Link>
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center text-3xl font-bold">{brandName}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    )
}

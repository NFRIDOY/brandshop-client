import { useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import BrandNameCard from "../BrandNameCard/BrandNameCard"
import ProductCard from "../ProductCard/ProductCard"


export default function BrandProducts() {
    // const {brandName} = params
    const brandProductsLoaderData = useLoaderData()
    // const { data } = useParams();
    // console.log(params)
    // fetch(`http://localhost:5000/products/${brandName}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    const [brandProducts, setBrandProducts] = useState(brandProductsLoaderData)
    console.log(brandProducts)
    return (
        <div>
            {/* {brandProducts.length} */}
            <div>
                <div className=" flex justify-center my-10">
                    <div className="carousel h-[500px] max-w-7xl w-11/12 ">
                        {/* Slide1 */}
                        <div id="slide1" className="carousel-item relative w-full ">
                            <img src={brandProducts[0]?.image} className="w-full  object-cover" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={brandProducts[1]?.image} className="w-full object-cover" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={brandProducts[2]?.image} className="w-full object-cover" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="max-w-7xl mx-auto">
                    <h1 className="my-8 text-7xl text-center font-bold">{brandProducts[0].brandName} Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
                        {
                            brandProducts?.map(brand => <ProductCard key={brand} brand={brand}></ProductCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

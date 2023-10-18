import { useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"


export default function BrandProducts() {
    // const {brandName} = params
    const brandProductsLoaderData = useLoaderData()
    // const { data } = useParams();
    // console.log(params)
    // fetch(`http://localhost:5000/products/${brandName}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    const [brandProducts, setBrandProducts] = useState(brandProductsLoaderData)
    return (
        <div>
            {brandProducts.length}
            
        </div>
    )
}

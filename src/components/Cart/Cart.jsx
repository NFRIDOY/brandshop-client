import React from 'react'

export default function Cart() {
    
    return (
        <div>
            Cart
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
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
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
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
                        </tr>
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
    )
}

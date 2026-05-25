import React from 'react'

export const ProductList = ({ data, handlePrdDetail, handleAddToCart }) => {
    
    // Hàm sửa link ảnh trực tiếp
    const fixImageUrl = (url) => {
        if (!url) return ''
        return url.replace('http://svcy3.myclass.vn', 'https://apistore.cybersoft.edu.vn')
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.map((shoe) => (
                <div key={shoe.id} className="p-4 border rounded-md shadow-sm bg-white flex flex-col justify-between">
                    <div className="text-center">
                        {/* Gọi hàm fixImageUrl ở đây */}
                        <img 
                            src={fixImageUrl(shoe.image)} 
                            alt={shoe.name} 
                            className="mx-auto max-h-48 object-contain mb-4" 
                        />
                        <h2 className="font-semibold text-lg h-14 overflow-hidden">{shoe.name}</h2>
                        <p className="text-gray-600 my-2">{shoe.price} $</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button 
                            className="w-1/2 bg-black text-white py-2 rounded text-sm font-medium"
                            onClick={() => handlePrdDetail(shoe)}
                        >
                            Detail
                        </button>
                        <button 
                            className="w-1/2 bg-green-500 text-white py-2 rounded text-sm font-medium"
                            onClick={() => handleAddToCart(shoe)}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
import React, { useState } from 'react'
import dataShoes from './data.json'
import { ProductList } from './ProductList'
import { ProductDetail } from './ProductDetail'
import { ProductCart } from './ProductCart'

export const BTShoes = () => {
    // Sửa lỗi crash '.join()' bằng cách lấy phần tử đầu tiên làm mặc định đầy đủ thuộc tính
    const [prdDetail, setPrdDetail] = useState(dataShoes[0] || {})

    const [cart, setCart] = useState([
        {
            ...dataShoes[0],
            cartQuantity: 1 // Số lượng mặc định ban đầu trong giỏ hàng
        }
    ])

    const handlePrdDetail = (newPrd) => {
        setPrdDetail(newPrd)
    }

    const handleAddToCart = (prd) => {
        const index = cart.findIndex((item) => item.id === prd.id)

        if (index === -1) {
            // Nếu chưa có, clone object ra và gán số lượng bằng 1 để tránh lỗi tham chiếu trực tiếp dataJson
            setCart([...cart, { ...prd, cartQuantity: 1 }]) 
        } else {
            const newCart = [...cart]
            newCart[index].cartQuantity += 1
            setCart(newCart)
        }
    }

    const handleDeleteCartItem = (prdId) => {
        setCart(cart.filter((item) => item.id !== prdId))
    }

    // --- HÀM TĂNG GIẢM SỐ LƯỢNG CHO ĐÚNG YÊU CẦU ---
    const handleQuantityChange = (id, amount) => {
        const newCart = [...cart]
        const index = newCart.findIndex((item) => item.id === id)

        if (index !== -1) {
            // Tăng hoặc giảm dựa trên amount (1 hoặc -1), tối thiểu luôn là 1 sản phẩm
            newCart[index].cartQuantity = Math.max(1, newCart[index].cartQuantity + amount)
            setCart(newCart)
        }
    }

    return (
        <div className="mt-10 container mx-auto">
            <h1 className="text-center text-2xl font-medium">Shoes Shop</h1>

            <ProductDetail product={prdDetail} />

            {/* QUAN TRỌNG: Phải truyền hàm handleQuantityChange vào đây để file ProductCart nhận được */}
            <ProductCart 
                cart={cart} 
                handleDeleteCartItem={handleDeleteCartItem} 
                handleQuantityChange={handleQuantityChange}
            />

            <button
                data-bs-toggle="modal"
                data-bs-target="#product-cart-modal"
                className="btn btn-success mb-5"
            >
                Cart
            </button>

            <ProductList
                data={dataShoes}
                handlePrdDetail={handlePrdDetail}
                handleAddToCart={handleAddToCart}
            />
        </div>
    )
}
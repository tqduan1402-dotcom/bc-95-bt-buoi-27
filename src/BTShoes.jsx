import React, { useState } from 'react'
import dataShoes from './data.json'
import { ProductList } from './ProductList'
import { ProductDetail } from './ProductDetail'
import { ProductCart } from './ProductCart'

export const BTShoes = () => {
    // State quản lý chi tiết sản phẩm đang xem
    const [prdDetail, setPrdDetail] = useState({
        sizes: [32, 33, 34, 35],
        id: 2,
        name: 'vans old school',
        alias: 'vans-old-school',
        price: 200,
        description: 'about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        size: '[32,33,34,35]',
        shortDescription: 'about this shoe:Lorem ipsum dolor sit amet...',
        quantity: 200,
        deleted: false,
        categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
        relatedProducts: '[3,2,1]',
        feature: true,
        image: 'https://apistore.cybersoft.edu.vn/images/van-old-school.png',
        imgLink: 'https://apistore.cybersoft.edu.vn/images/van-old-school.png',
    })

    // State quản lý danh sách sản phẩm trong giỏ hàng
    const [cart, setCart] = useState([
        {
            ...prdDetail,
            cartQuantity: 1,
        },
    ])

    // Thay đổi sản phẩm hiển thị ở bảng chi tiết
    const handlePrdDetail = (newPrd) => {
        setPrdDetail(newPrd)
    }

    // Thêm sản phẩm vào giỏ hàng
    const handleAddToCart = (prd) => {
        const index = cart.findIndex((item) => item.id === prd.id)

        if (index === -1) {
            const newCartItem = { ...prd, cartQuantity: 1 }
            setCart([...cart, newCartItem])
        } else {
            const newCart = [...cart]
            newCart[index].cartQuantity += 1
            setCart(newCart)
        }
    }

    // Xóa sản phẩm khỏi giỏ hàng
    const handleDeleteCartItem = (prdId) => {
        setCart(cart.filter((item) => item.id !== prdId))
    }

    // Tăng / giảm số lượng sản phẩm trực tiếp trong giỏ hàng
    const handleQuantityChange = (id, amount) => {
        const newCart = [...cart]
        const index = newCart.findIndex((item) => item.id === id)

        if (index !== -1) {
            newCart[index].cartQuantity = Math.max(1, newCart[index].cartQuantity + amount)
            setCart(newCart)
        }
    }

    return (
        <div className="mt-10 container mx-auto">
            <h1 className="text-center text-2xl font-medium mb-5">Shoes Shop</h1>

            <ProductDetail product={prdDetail} />

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
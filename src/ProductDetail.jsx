import React from 'react'

export const ProductDetail = (props) => {
    const { product } = props

    return (
        <div className="row mb-5 p-4 border rounded shadow-sm">
            <div className="col-md-4 text-center">
                <img src={product.image} alt={product.name} className="img-fluid" style={{ maxHeight: '300px' }} />
            </div>
            <div className="col-md-8">
                <h3>{product.name}</h3>
                <p className="text-danger font-weight-bold">Giá: {product.price} $</p>
                <p><b>Mô tả:</b> {product.description}</p>
                <p><b>Mô tả ngắn:</b> {product.shortDescription}</p>
                <p><b>Số lượng kho:</b> {product.quantity}</p>
                {/* Đoạn code phòng vệ lỗi: Nếu có mảng sizes thì mới .join(), không thì hiện Free Size */}
                <p><b>Kích cỡ:</b> {product.sizes ? product.sizes.join(', ') : '36, 37, 38, 39, 40 (Free Size)'}</p>
            </div>
        </div>
    )
}    
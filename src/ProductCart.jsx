import React from 'react'

export const ProductCart = (props) => {
    // Nhận các state và hàm xử lý được truyền từ BTShoes xuống
    const { cart, handleDeleteCartItem, handleQuantityChange } = props

    return (
        <div id="product-cart-modal" className="modal" tabIndex={-1}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Giỏ hàng</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                                        </td>
                                        <td>{item.price}</td>
                                        <td>
                                            {/* Nút giảm số lượng */}
                                            <button 
                                                className="btn btn-outline-danger" 
                                                onClick={() => handleQuantityChange(item.id, -1)}
                                            >-</button>
                                            
                                            <span className="mx-2">{item.cartQuantity}</span>
                                            
                                            {/* Nút tăng số lượng */}
                                            <button 
                                                className="btn btn-outline-success" 
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                            >+</button>
                                        </td>
                                        <td>{item.price * item.cartQuantity}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteCartItem(item.id)}
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
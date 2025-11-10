import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center gap-2">
                      <label>Кількість:</label>
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, Number(e.target.value))
                        }
                        className="w-16 border rounded text-center"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:underline"
                >
                  ❌ Delete
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              Total: ${total.toFixed(2)}
            </h3>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
            >
              Clear cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

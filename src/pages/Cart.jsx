import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비었습니다.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border p-2 mb-2">
              <h3>{item.title}</h3>
              <p>가격: ₩{item.price.toLocaleString()}</p>
              <p>수량: {item.quantity}</p>
              <p>합계: ₩{(item.price * item.quantity).toLocaleString()}</p>
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
              >
                삭제
              </button>
            </div>
          ))}
          <p className="mt-2 text-lg font-semibold">
            총 합계: ₩{total.toLocaleString()}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white"
            onClick={() => {
              dispatch({ type: "CLEAR_CART" });
              navigate("/checkout-success");
            }}
          >
            결제하기
          </button>
        </>
      )}
    </div>
  );
}

import { useParams } from "react-router-dom";
import { dummy } from "../movieDummy";
import { useCart } from "../contexts/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const movie = dummy.results.find((item) => item.id === parseInt(id));
  const { dispatch } = useCart();

  const handleAdd = () => {
    dispatch({ type: "ADD_ITEM", item: movie });
  };

  if (!movie) return <div>영화를 찾을 수 없습니다.</div>;

  return (
    <div className="p-4">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <h2 className="text-2xl font-bold mt-2">{movie.title}</h2>
      <p>{movie.overview}</p>
      <p className="text-lg mt-2">가격: ₩{movie.price.toLocaleString()}</p>
      <button
        onClick={handleAdd}
        className="mt-4 px-4 py-2 bg-blue-500 text-white"
      >
        장바구니 담기
      </button>
    </div>
  );
}

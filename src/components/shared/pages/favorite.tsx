import { useAppSelector, useAppDispatch } from "../../../hooks/redux-hooks";
import { removeFavorite } from "../../../store/slices/favoritesSlice";
import { X } from "lucide-react";

const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet :c </p>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="border p-3 rounded-xl shadow relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 mx-auto"
              />
              <h4 className="mt-2 text-center">{item.title}</h4>
              <p className="text-center text-gray-600">${item.price}</p>

              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                onClick={() => handleRemove(item.id)}
              >
                <X />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

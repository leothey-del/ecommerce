import useCartStore from '../store/useCartStore';

const AddToCartButton = ({ item }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      onClick={() => addItem(item)}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Add to Cart
    </button>
  );
};

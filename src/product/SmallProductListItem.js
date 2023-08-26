export const SmallProductListItem = ({ product }) => {
    const { name, price } = product;

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-700">${price}</p>
        </div>
    );
};

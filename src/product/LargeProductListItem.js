export const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-700 mb-1">Price: ${price}</p>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex items-center">
                <p className="text-gray-500 mr-2">Average Rating:</p>
                <div className="flex items-center">
                    <span className="text-yellow-500">{rating}</span>
                    <svg className="h-4 w-4 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 1.167l1.77 3.564 4.14.6a1 1 0 01.556 1.705l-2.993 2.92.706 4.12a1 1 0 01-1.45 1.054L10 13.52l-3.687 1.932a1 1 0 01-1.45-1.053l.706-4.121-2.993-2.92a1 1 0 01.556-1.705l4.14-.6L10 1.168z" clipRule="evenodd"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;
    return (
        <>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <p>Average Rating: {rating}</p>
        </>
    )
}
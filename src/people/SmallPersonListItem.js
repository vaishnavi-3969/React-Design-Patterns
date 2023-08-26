export const SmallPersonListItem = ({ person }) => {
    const { name, age } = person;

    return (
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <p className="text-lg font-semibold">Name: {name}</p>
            <p className="text-sm">Age: {age} years</p>
        </div>
    );
}
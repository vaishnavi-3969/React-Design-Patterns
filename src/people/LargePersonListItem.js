export const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;

    return (
        <div className="border p-4 rounded-md shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600">Age: {age} years</p>
            <p className="text-gray-600">Hair Color: {hairColor}</p>
            <h3 className="text-lg font-semibold mt-4">Hobbies:</h3>
            <ul className="list-disc pl-6">
                {hobbies.map((hobby, index) => (
                    <li key={index} className="text-gray-600">{hobby}</li>
                ))}
            </ul>
        </div>
    );
}

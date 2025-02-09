function PersonDetails({ person, onEdit, onDelete }) {
  return (
    <>
      {/* Profile Icon */}
      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto">
        {person.name && <p>{person.name.charAt(0).toUpperCase()}</p>}
      </div>

      {/* Name and Category */}
      <h2 className="text-xl font-semibold text-gray-100 mb-4 text-center">
        {person.name} <br />
        <span className="text-sm">({person.category})</span>
      </h2>

      {/* Contact Details */}
      <div className="space-y-4 text-gray-200">
        <p>
          <span className="font-medium">Phone:</span> {person.phone}
        </p>
        <p>
          <span className="font-medium">Email:</span> {person.email}
        </p>
        <p>
          <span className="font-medium">Address:</span> {person.address}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={onEdit}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(person._id)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </>
  );
}
export default PersonDetails;

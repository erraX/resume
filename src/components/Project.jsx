const Project = ({ name, desc, items }) => (
  <div className="my-5">
    <h2 className="font-bold text-lg">{name}</h2>
    <div className="italic mb-2 border-gray-800 rounded pl-3 py-3 bg-gray-100">
      {desc}
    </div>
    <ul className="list-circle pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Project;

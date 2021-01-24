const Company = ({ name, rank, beginTime, endTime, desc }) => (
  <>
    <div className="flex items-center mb-2">
      <span className="text-xl font-bold flex-none">{name}</span>
      <span className="flex-grow italic ml-4">{rank}</span>
      <span className="flex-none text-sm">
        {beginTime} ~ {endTime}
      </span>
    </div>
    <div className="mb-2 border-l-4 border-gray-800 rounded pl-3 py-3 bg-gray-100">
      {desc}
    </div>
  </>
);

export default Company;

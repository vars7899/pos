const AllEmployeeList = () => {
  return (
    <div className="w-[100%] bg-white p-6 px-8">
      <table className="w-[100%] text-left">
        <thead className="border-b-[1px]">
          <tr>
            <th className="py-3 uppercase">Song</th>
            <th className="py-3 uppercase">Artist</th>
            <th className="py-3 uppercase">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="py-3">Malcolm Lockyer</td>
            <td className="py-3">1961</td>
          </tr>
          <tr>
            <td className="py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="py-3">Malcolm Lockyer</td>
            <td className="py-3">1961</td>
          </tr>
          <tr>
            <td className="py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="py-3">Malcolm Lockyer</td>
            <td className="py-3">1961</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployeeList;

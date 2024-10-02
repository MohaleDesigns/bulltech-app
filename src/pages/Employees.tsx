import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Employees({ employees }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees =
    employees?.filter((e) =>
      e?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-[10px] bg-white rounded-md shadow-black/10 shadow-lg p-[10px] -mb-[30px]">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            className="outline-none text-darkGrey"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
          />
          <CiSearch size="24px" color="#5F5F5F" />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            {/* <th>Username</th> */}
            <th>Email</th>
            <th className="hidden md:block">Phone</th>
            <th className="hidden md:block">Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                {/* <td>{e.username}</td> */}
                <td>{e.email}</td>
                <td className="hidden md:block">{e.phone}</td>
                <td className="hidden md:block">{e.address.street}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colspan="5" className="w-full shadow-black/10 shadow-lg">
                <h4 className="mx-auto text-center text-darkGrey">
                  No employees found
                </h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Employees;

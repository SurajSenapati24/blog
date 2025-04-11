import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const categories = [
    {
      id: 1,
      name: "Preventive Healthcare",
    },
    {
      id: 2,
      name: "Women's Health",
    },
    {
      id: 3,
      name: "Child Health",
    },
    {
      id: 4,
      name: "Mental Health",
    },
    {
      id: 5,
      name: "Common Diseases & Conditions",
    },
    {
      id: 6,
      name: "Nutrition & Diet",
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-8">Information from all fields</h2>
        {categories.map((data) => (
          <div key={data.id}>
            <Link to={`/category/${data.name}`}>
              <h3 className="text-lg font-semibold bg-gray-100 dark:bg-neutral-900 rounded-xl px-4 py-4 mb-3 shadow-sm">
                {data.name}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;

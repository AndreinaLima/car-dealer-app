import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FilterForm = () => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_MAKES_URL}?format=json`)
      .then((response) => response.json())
      .then((data) => setVehicleTypes(data.Results));
  }, []);

  useEffect(() => {
    setIsButtonDisabled(!(selectedType && selectedYear));
  }, [selectedType, selectedYear]);

  const years = Array.from(
    { length: new Date().getFullYear() - 2015 + 1 },
    (_, i) => 2015 + i,
  );
  const handleNavigation = () => {
    if (selectedType && selectedYear) {
      router.push(`/result/${selectedType}/${selectedYear}`);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="vehicleType"
          >
            Vehicle Type
          </label>
          <select
            id="vehicleType"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a type</option>
            {vehicleTypes.map((type) => (
              <option key={type.MakeId} value={type.MakeId}>
                {type.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="modelYear"
          >
            Model Year
          </label>
          <select
            id="modelYear"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleNavigation}
            disabled={isButtonDisabled}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;

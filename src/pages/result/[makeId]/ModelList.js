import React from 'react';

const ModelList = ({ models }) => {
  return (
    <ul className="w-full max-w-md">
      {models.length > 0 ? (
        models.map((model) => (
          <li key={model.Model_ID} className="border-b border-gray-300 py-2">
            {model.Model_Name}
          </li>
        ))
      ) : (
        <li className="border-b border-gray-300 py-2">No models found</li>
      )}
    </ul>
  );
};

export default ModelList;

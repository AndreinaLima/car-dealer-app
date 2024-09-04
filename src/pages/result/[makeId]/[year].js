import React from 'react';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { makeId, year } = params;

  console.log(process.env.NEXT_PUBLIC_API_MODELS_URL);
  console.log(process.env.NEXT_PUBLIC_API_MAKES_URL);
  
  // Fetch models
  const resModels = await fetch(
    `${process.env.NEXT_PUBLIC_API_MODELS_URL}/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const dataModels = await resModels.json();

  // Fetch makes to get the make name
  const resMakes = await fetch(`${process.env.NEXT_PUBLIC_API_MAKES_URL}?format=json`);
  const dataMakes = await resMakes.json();

  // Map makes to get make names
  const makes = dataMakes.Results;
  const selectedMake = makes.find(make => make.MakeId === parseInt(makeId));

  return {
    props: {
      models: dataModels.Results || [],
      makeId,
      makeName: selectedMake ? selectedMake.MakeName : 'Marca não encontrada',
      year,
    },
  };
}

const ResultPage = ({ models,makeName, year }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-8">
        Modelos de {makeName} do ano {year}
      </h1>
      <ul className="w-full max-w-md">
        {models.length > 0 ? (
          models.map((model) => (
            <li key={model.Model_ID} className="border-b border-gray-300 py-2">
              {model.Model_Name}
            </li>
          ))
        ) : (
          <li className="border-b border-gray-300 py-2">
            Nenhum modelo encontrado
          </li>
        )}
      </ul>
    </div>
  );
};

export default ResultPage;

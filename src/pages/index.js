import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Componente de formulário carregado dinamicamente
const FilterForm = dynamic(() => import('../components/FilterForm'), {
  suspense: true,
});

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FilterForm />
    </Suspense>
  );
}

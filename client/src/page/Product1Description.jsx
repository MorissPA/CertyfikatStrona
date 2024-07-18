import React from 'react';

const Product1Description = () => {
  return (
<div className="max-w-3xl mx-auto mt-12 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-blue-600 mb-6">Writer (alternatywa dla Microsoft Word):</h2>
      <ul className="list-disc list-inside ml-5 mb-8">
        <li className="mb-2">Przejdź przez wszystkie funkcje programu Writer, aby móc swobodnie tworzyć dokumenty tekstowe, artykuły i raporty.</li>
        <li className="mb-2">Naucz się korzystać z narzędzi formatowania, tabel, grafik oraz narzędzi do edycji tekstu.</li>
      </ul>

      <h2 className="text-2xl text-blue-600 mb-6">Calc (alternatywa dla Microsoft Excel):</h2>
      <ul className="list-disc list-inside ml-5 mb-8">
        <li className="mb-2">Zdobądź umiejętności potrzebne do tworzenia arkuszy kalkulacyjnych za pomocą programu Calc.</li>
        <li className="mb-2">Naucz się tworzyć formuły, analizować dane, tworzyć wykresy i generować raporty.</li>
      </ul>

      <h2 className="text-2xl text-blue-600 mb-6">Impress (alternatywa dla Microsoft PowerPoint):</h2>
      <ul className="list-disc list-inside ml-5 mb-8">
        <li className="mb-2">Opanuj sztukę tworzenia profesjonalnych prezentacji za pomocą programu Impress.</li>
        <li className="mb-2">Poznaj techniki projektowania slajdów, dodawania animacji i multimedia, oraz prezentowania w sposób przekonujący i efektywny.</li>
      </ul>

      <p className="text-center mt-8 leading-7">
        Z naszymi kursami zdobędziesz nie tylko wiedzę teoretyczną, ale również praktyczne umiejętności, które będziesz mógł od razu wykorzystać w praktyce. Nasz zespół doświadczonych nauczycieli pomoże Ci osiągnąć sukces w każdym z tych obszarów. Sprawdź nasz harmonogram kursów i zapisz się już dziś!
      </p>
    </div>
  );
};

export default Product1Description;

import React from 'react';

const Product3Description = () => {
  return (
    <div className="font-sans text-gray-700 bg-gray-100 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold text-red-600 mb-6">Obsługa programów Microsoft Office</h2>

    <div className="mb-8">
      <h2 className="text-xl font-bold text-red-600 mb-3">Microsoft Word:</h2>
      <ul className="list-disc ml-8">
        <li className="mb-2">Poznaj wszystkie funkcje programu Microsoft Word, aby tworzyć profesjonalne dokumenty i raporty.</li>
        <li className="mb-2">Naucz się formatować tekst, dodawać grafiki, tabelki, oraz wykorzystywać zaawansowane funkcje edycji.</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-xl font-bold text-red-600 mb-3">Microsoft Excel:</h2>
      <ul className="list-disc ml-8">
        <li className="mb-2">Zdobądź umiejętności potrzebne do efektywnego zarządzania danymi i tworzenia skomplikowanych arkuszy kalkulacyjnych.</li>
        <li className="mb-2">Naucz się tworzyć formuły, wykresy, analizować dane oraz tworzyć raporty.</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-xl font-bold text-red-600 mb-3">Microsoft PowerPoint:</h2>
      <ul className="list-disc ml-8">
        <li className="mb-2">Opanuj sztukę tworzenia dynamicznych i przekonujących prezentacji.</li>
        <li className="mb-4">Dowiedz się, jak efektywnie wykorzystywać funkcje animacji, dodawać multimedia i projektować atrakcyjne slajdy.</li>
      </ul>
    </div>

    <p className="text-lg leading-relaxed text-center">
      Z naszymi kursami zdobędziesz nie tylko wiedzę teoretyczną, ale również praktyczne umiejętności, które będziesz mógł od razu wykorzystać w praktyce. Nasz zespół doświadczonych nauczycieli pomoże Ci osiągnąć sukces w każdym z tych obszarów. Sprawdź nasz harmonogram kursów i zapisz się już dziś!
    </p>
  </div>
  );
};

export default Product3Description;

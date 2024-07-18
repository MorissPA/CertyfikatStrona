import React from 'react';

const Cennik = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-6xl font-bold mb-8 text-blue-900">Cennik</h1>
      <h1 className="text-2xl font-bold mb-8">Ceny za kursy</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Zajęcia idywidualne</h2>
          <p className="text-3xl font-bold mb-4">120 ZŁ</p>
          <ul className="list-disc list-inside mb-4">
            <li>1 lekcja – 120 zł</li>
            <li>10 lekcji – 1090 zł <span className="line-through text-red-500 font-bold">1200 zł</span></li>
            <li>30 lekcji – 3090 zł <span className="line-through text-red-500 font-bold">3600 zł</span></li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Zajęcia grupowe dla 2 osób</h2>
          <p className="text-3xl font-bold mb-4">80 ZŁ</p>
          <ul className="list-disc list-inside mb-4">
            <li>1 lekcja – 80 zł</li>
            <li>10 lekcji – 690 zł <span className="line-through text-red-500 font-bold">800 zł</span></li>
            <li>30 lekcji – 1990 zł <span className="line-through text-red-500 font-bold">2400 zł</span></li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Zajęcia grupowe dla 5 osób:</h2>
          <p className="text-3xl font-bold mb-4">40 ZŁ</p>
          <ul className="list-disc list-inside mb-4">
            <li>1 lekcja – 40 zł</li>
            <li>10 lekcji – 340 zł <span className="line-through text-red-500 font-bold">400 zł</span></li>
            <li>30 lekcji – 990 zł <span className="line-through text-red-500 font-bold">1200 zł</span></li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Kursy Językowe</h2>
          <p className="text-3xl font-bold mb-4">80 ZŁ</p>
          <ul className="list-disc list-inside mb-4">
            <li>1 lekcja – 80 zł</li>
            <li>10 lekcji – 690 zł <span className="line-through text-red-500 font-bold">800 zł</span></li>
            <li>30 lekcji – 1990 zł <span className="line-through text-red-500 font-bold">2400 zł</span></li>
          </ul>
        </div>
      </div>

      <div className="my-8"></div>
      
      {/* Sekcja FAQ */}
      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-3xl font-bold mb-6">Najczęściej zadawane pytania</h2>
        <div className="border-b-2 border-gray-300 pb-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl text-blue-900 font-bold">W jakiej formie prowadzone są zajęcia</h3>
            
          </div>
          <div className="border-b-2 border-gray-300 pb-4 mb-4"></div>
          <ol className='list-disc font-semibold'>
          <li className='text-xl border-b-2 border-gray-300 pb-4 mb-4'>Prowadzimy zajęcia indywidualne i grupowe w grupach do 5 osób. Ta forma zajęć jest najbardziej efektywna i w 100 % przynosi zamierzone efekty. </li>
            <li className='text-xl '>Stacjonarnie i Zdalnie</li>
            
            
          </ol>
        </div>
        <div className="border-b-2 border-gray-300 pb-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl text-blue-900 font-bold">How about a second one?</h3>
            
          </div>
        </div>
        <div className="border-b-2 border-gray-300 pb-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl text-blue-900 font-bold">And a third?</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cennik;

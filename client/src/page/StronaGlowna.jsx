import React from 'react';

const StronaGlowna = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-between">
<div className="flex items-center justify-center h-25vh bg-gray-100">
      <div className="text-center">
      <h2 className="text-xl font-extrabold text-gray-900 mb-4">
          <span className="text-5xl font-black text-blue-900 font-sans">CERTYFIKAT</span><p> to kilkanaście lat doświadczenia w szkoleniach i wiele zadowolonych kursantów</p>
          </h2>
      </div>
    </div>

      <div className="relative mt-20 bg-white text-black rounded-lg shadow-lg p-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <img src="./image/ludzie.png" alt="Description" className="w-48 h-auto rounded-lg mb-4 md:mb-0 md:mr-6" />
       
        <p className="text-lg leading-relaxed">
        Nasza oferta dotyczy obsługi komputera i programów komputerowych. Jest ona skierowana do osób, które chcą osiągnąć sukces w życiu zawodowym i ułatwić sobie wykonywanie czynności w życiu prywatnym.
        </p>
      </div>
      
      <div className="bg-white p-8 max-w-7xl mt-12">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100 mx-auto mb-4">
                <a href="" target="" rel="noopener noreferrer" className="w-12 h-12 hover:opacity-75">
                  <img src="./image/ikona1.png" alt="Icon1" className="w-full h-full object-cover" />
                </a>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Szeroki wybór kursów</h3>
              <p className="mt-2 text-base text-gray-500">
              Firma CERTYFIKAT, to miejsce, w którym odbywają się praktyczne zajęcia prowadzone w sposób rzetelny, innowacyjny i w pełni dostosowany do potrzeb i umiejętności już posiadanych przez uczestników
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100 mx-auto mb-4">
                <a href="" target="" rel="noopener noreferrer" className="w-12 h-12 hover:opacity-75">
                  <img src="./image/ikona2.png" alt="Icon2" className="w-full h-full object-cover" />
                </a>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Działamy od 1999 roku, specjalizujemy się w przygotowaniu i prowadzeniu kursów z zakresu obsługi komputera </h3>
              <p className="mt-2 text-base text-gray-500">
              dla dzieci, młodzieży, dorosłych i bardzo dorosłych, zarówno aktywnych jak i nieaktywnych zawodowo. Prowadzimy zajęcia grupowe i indywidualne. 

              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100 mx-auto mb-4">
                <a href="" target="" rel="noopener noreferrer" className="w-12 h-12 hover:opacity-75">
                  <img src="./image/ikona3.png" alt="Icon3" className="w-full h-full object-cover" />
                </a>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Firma wpisana jest do Rejestru Instytucji Szkoleniowych WUP</h3>
              <p className="mt-2 text-base text-gray-500">
              Prowadzimy kursy na zlecenie Wojewódzkiego Urzędu Pracy w Łodzi. Osoby zarejestrowane w Powiatowym Urzędzie Pracy jako bezrobotne, mogą skorzystać z dofinansowania.

              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100 mx-auto mb-4">
                <a href="" target="" rel="noopener noreferrer" className="w-12 h-12 hover:opacity-75">
                  <img src="./image/ikona4.png" alt="Icon4" className="w-full h-full object-cover" />
                </a>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Przygotowujemy do bezwzrokowej obsługi komputera</h3>
              <p className="mt-2 text-base text-gray-500">
              Ta umiejętność pomogła naszym absolwentom w zdaniu egzaminów pisemnych, a także w pracy: pracownikom IT, biurowym.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative flex mt-8 mb-8 space-x-16 ">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-32 h-32 hover:opacity-75">
          <img src="./image/facebook.svg" alt="Facebook" className="w-full h-full object-cover" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-32 h-32 hover:opacity-75">
          <img src="./image/instagram.webp" alt="Instagram" className="w-full h-full object-cover" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="w-32 h-32 hover:opacity-75">
          <img src="./image/tiktok.webp" alt="TikTok" className="w-full h-full object-cover" />
        </a>
      </div>

    </div>
  );
};

export default StronaGlowna;

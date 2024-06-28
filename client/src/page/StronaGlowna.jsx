import React from 'react';

const StronaGlowna = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-100 to-blue-100 min-h-screen flex flex-col items-center justify-between">

      <div className="relative mt-20 bg-gray-200 text-black rounded-lg shadow-lg p-6 max-w-8xl mx-auto flex flex-col md:flex-row items-center">
        <img src="./image/ludzie.png" alt="Description" className="w-48 h-auto rounded-lg mb-4 md:mb-0 md:mr-6" />
        <p className="text-lg leading-relaxed">
          Specjalizujemy się w dostarczaniu wysokiej jakości kursów z obsługi programów biurowych, bezwzrokowego pisania na klawiaturze komputera oraz nauki języków obcych. Nasze kursy są starannie zaprojektowane, aby dostarczyć Ci praktycznych umiejętności, które są niezbędne w dzisiejszym świecie biznesu i technologii. Niezależnie od tego, czy dopiero zaczynasz swoją przygodę z komputerami i językami obcymi, czy też chcesz doskonalić swoje umiejętności, jesteśmy tu, aby Ci pomóc.
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 w-full mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">
          <span className="text-3xl font-black text-blue-900 font-sans">CERTYFIKAT</span> to kilkanaście lat doświadczenia w szkoleniach online i tysiące zadowolonych kursantów
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100 mx-auto mb-4">
                <a href="" target="" rel="noopener noreferrer" className="w-12 h-12 hover:opacity-75">
                  <img src="./image/ikona1.png" alt="Icon1" className="w-full h-full object-cover" />
                </a>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Szeroki wybór kursów</h3>
              <p className="mt-2 text-base text-gray-500">
                Możesz wybrać spośród kursów z różnych dziedzin. Na naszej platformie zdobywasz nową przydatną wiedzę i kwalifikacje zawodowe oraz zwiększasz umiejętności interpersonalne.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100 mx-auto mb-4">
                <a href="" target="" rel="noopener noreferrer" className="w-12 h-12 hover:opacity-75">
                  <img src="./image/ikona2.png" alt="Icon2" className="w-full h-full object-cover" />
                </a>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Certyfikaty i zaświadczenia według wzoru MEN</h3>
              <p className="mt-2 text-base text-gray-500">
                Dokumenty potwierdzające zdobyte kompetencje pomogą Ci uatrakcyjnić CV, a nawet zdobyć nową pracę. Uzyskane dokumenty są honorowane w kraju i za granicą.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100 mx-auto mb-4">
                <a href="" target="" rel="noopener noreferrer" className="w-12 h-12 hover:opacity-75">
                  <img src="./image/ikona3.png" alt="Icon3" className="w-full h-full object-cover" />
                </a>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Komfort, wygoda i bezpieczeństwo nauki</h3>
              <p className="mt-2 text-base text-gray-500">
                Uczysz się bez stresu, zgodnie z własnym harmonogramem dnia. A my służymy pomocą na każdym etapie nauki!
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100 mx-auto mb-4">
                <a href="" target="" rel="noopener noreferrer" className="w-12 h-12 hover:opacity-75">
                  <img src="./image/ikona4.png" alt="Icon4" className="w-full h-full object-cover" />
                </a>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Dostęp do materiałów 24/7 nawet przez 12 miesięcy</h3>
              <p className="mt-2 text-base text-gray-500">
                Platforma dostępna jest dla Ciebie 24/7. Na ukończenie nauki masz maksymalnie 365 dni.
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

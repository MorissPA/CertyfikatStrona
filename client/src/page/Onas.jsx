import React, { useState } from 'react';
import Slider from 'react-slick';
import '../style/Onas.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Onas = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "K. WITKA",
      content: "Koordynator zajęć K. Witka wyróżnia się niezwykłą energią i entuzjazmem. Nie tylko perfekcyjnie zarządza, ale również inspiruje innych do osiągania ambitnych celów.",
      imgSrc: "./image/postac.jpg"
    },
    {
      title: "A. MARCZAK",
      content: "Nauczyciel A. Marczak przynosi do naszej firmy nie tylko pasję, ale także pełne zaangażowanie. Jako Nauczyciel doskonale wpisuje się w rozwijanie potencjału naszej placówki, przyczyniając się do jej codziennego wzrostu i osiągania sukcesów.",
      imgSrc: "../image/postac.jpg"
    },
    {
      title: "C. MROCZEK",
      content: "Doradca zawodowy C. Mroczek cieszy się uznaniem zarówno wśród studentów, jak i współpracowników. Jego obecność nadaje firmie CERTYFIKAT charakter miejsca obfitującego w wiedzę, radość i entuzjazm.",
      imgSrc: "./image/postac.jpg"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: 'url(./image/komp5.webp)' }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative w-full max-w-6xl h-auto bg-gray-200 rounded-lg shadow-lg overflow-hidden p-14 z-10">
        <Slider {...sliderSettings}>
          {tabs.map((tab, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start p-4">
              <div className="flex flex-row items-center space-x-4">
                <div className="flex-shrink-0">
                  <img src={tab.imgSrc} alt={tab.title} className="w-auto h-auto rounded-lg" />
                </div>
                <div className="md:pl-4 mt-4 md:mt-0">
                  <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{tab.title}</h3>
                  <div className="text-gray-500 py-8">{tab.content}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="relative w-full max-w-6xl h-50vh bg-gray-200 rounded-lg shadow-lg overflow-hidden p-14  flex-1 z-10">
        <h2 className="text-2xl font-bold text-indigo-500">O Firmie</h2>
        <p className="mb-4">
          Od 1999 roku organizujemy kursy szybkiego pisania. Mamy doświadczenie w przygotowaniu dzieci, młodzieży, dorosłych do bezwzrokowego pisania na klawiaturze komputera.
        </p>
        <p className="mb-4">
          Jesteśmy zarejestrowaną instytucją szkoleniową wpisaną do Rejestru Instytucji Szkoleniowych Wojewódzkiego Urzędu Pracy w Łodzi. Specjalizujemy się w kursach z obsługi komputera, programów komputerowych oraz nauki bezwzrokowego pisania na klawiaturze, 
          oferując profesjonalne szkolenia dla osób zarejestrowanych jako bezrobotne w Powiatowym Urzędzie Pracy. Dzięki współpracy z firmami realizującymi projekty unijne, jesteśmy solidnym podwykonawcą.
        </p>
        <p className="mb-4">
          Nasze praktyczne zajęcia są prowadzone rzetelnie, innowacyjnie i dostosowane do indywidualnych potrzeb oraz posiadanych umiejętności uczestników. Prowadzą je doświadczeni, cierpliwi i życzliwi nauczyciele.
          Jeśli poszukujesz miejsca, gdzie zdobędziesz konkretne umiejętności, skontaktuj się z nami, aby dowiedzieć się więcej i dołączyć do rozwijającej się społeczności firmy CERTYFIKAT.
        </p>
      </div>
    </div>
  );
};

export default Onas;

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
      content: "K. Witka cechuje się energią i przebojowością. Jesteśmy ogromnie zadowoleni, że pracuje w naszym zespole jako Koordynator zajęć. K. Witka niezmiennie pokazuje w wykonywanej przez siebie pracy zaangażowanie i motywuje wszystkich do działania.",
      imgSrc: "./image/postac.jpg"
    },
    {
      title: "A. MARCZAK",
      content: "Od czasu, gdy z nami współpracuje, A. Marczak wnosi ze sobą pasję i zaangażowanie, aby CERTYFIKAT Firma Wielobranżowa Ewa Stefaniak-Piasek codziennie się rozwijała. Jako Nauczyciel sprawdza się doskonale!",
      imgSrc: "../image/postac.jpg"
    },
    {
      title: "C. MROCZEK",
      content: "C. Mroczek to ktoś, kogo uwielbiają zarówno studenci, jak i współpracownicy. Sprawia, że CERTYFIKAT Firma Wielobranżowa Ewa Stefaniak-Piasek jest miejscem pełnym wiedzy, radości i entuzjazmu. Jako Doradca zawodowy stanowi bardzo ważną część naszego zespołu.",
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
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center bg-no-repeat p-4 bg-gray-100" >
     

      <div className="relative w-full max-w-6xl h-auto bg-white rounded-lg shadow-lg overflow-hidden p-14 z-10">
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
      <div className="my-8"></div>
      
    </div>
  );
};

export default Onas;

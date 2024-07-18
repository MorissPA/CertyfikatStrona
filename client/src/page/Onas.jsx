import React, { useState } from 'react';
import Slider from 'react-slick';
import '../style/Onas.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Onas = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "EWA STEFANIAK-PIASEK",
      content: "Ewa Stefaniak-Piasek jest autorką podręczników dla branży ekonomicznej w zakresie obsługi biura, egzaminatorem państwowym w zakresie ekonomiczno-handlowym, recenzentem arkuszy egzaminacyjnych, współautorem programów dydaktycznych, także modułowych. Uczy praktycznej obsługi biura w zakresie programów komputerowych. Pierwsza w Polsce napisała podręcznik do nauki metodycznej obsługi klawiatury komputera oraz podręczniki i poradniki dotyczące nowoczesnej korespondencji i organizacji pracy biurowej.                        ",
      imgSrc: "./image/postac.jpg"
    },
    {
      title: "CYRYL ROSIAK",
      content: "XXXXXXXXXXXXXXXXXXXXXXX",
      imgSrc: "../image/postac.jpg"
    },
    {
      title: "MAURYCY PIASEK",
      content: "Technik i Administrator IT",
      imgSrc: "./image/postac.jpg"
    },
    {
      title: "ZOHRA BOUAOUDA",
      content: "xxxxxxxxxxxxxx",
      imgSrc: "./image/postac.jpg"
    }
    ,
    {
      title: "KATARZYNA PIASEK",
      content: "XXXXXXXXXX",
      imgSrc: "./image/postac.jpg"
    }
    ,
    {
      title: "MAURYCY PIASEK",
      content: "Technik i Administrator IT",
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
                  <h3 className="uppercase tracking-wide text-blue-900 font-bold text-xl">{tab.title}</h3>
                  <div className="text-blue-900 py-8 text-bold">{tab.content}</div>
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

import React from 'react';

const Cennik = () => {
  return (
    // Outermost div with the background image
    <div className="min-h-screen bg-cover bg-center bg-fixed bg-[url('./image/komp3.webp')]">
      {/* Overlay div with a semi-transparent black background for darkening */}
      <div className="min-h-screen bg-black bg-opacity-60 flex items-center">
        <div className="container mx-auto px-4 py-12">
          

          <div className="bg-white/90 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-black text-center">Cennik</h1>
            <h2 className="text-2xl font-semibold mb-4">Zajęcia indywidualne (brutto):</h2>
            <div className="space-y-4">
              <p className="text-lg">1 lekcja – 120 zł</p>
              <p className="text-lg">10 lekcji – 1090 zł <span class="line-through text-red-500 font-bold">1200 zł</span> </p>
              <p className="text-lg">30 lekcji – 3090 zł <span class="line-through text-red-500 font-bold">3600 zł </span></p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Zajęcia grupowe dla 2 osób:</h2>
            <div className="space-y-4">
              <p className="text-lg">1 lekcja – 80 zł</p>
              <p className="text-lg">10 lekcji – 690 zł <span class="line-through text-red-500 font-bold">800 zł</span> </p>
              <p className="text-lg">30 lekcji – 1990 zł <span class="line-through text-red-500 font-bold">2400 zł</span> </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Zajęcia grupowe dla 5 osób:</h2>
            <div className="space-y-4">
              <p className="text-lg">1 lekcja – 40 zł</p>
              <p className="text-lg">10 lekcji – 340 zł <span class="line-through text-red-500 font-bold">400 zł</span> </p>
              <p className="text-lg">30 lekcji – 990 zł <span class="line-through text-red-500 font-bold">1200 zł</span> </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kursy Cyryl (60 zł/40 minut)</h2>
            <div className="space-y-4">
              <p className="text-lg">1 lekcja – 80 zł</p>
              <p className="text-lg">10 lekcji – 690 zł <span class="line-through text-red-500 font-bold">800 zł</span> </p>
              <p className="text-lg">30 lekcji – 1990 zł <span class="line-through text-red-500 font-bold">2400 zł</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cennik;

function Action() {
    return (
      <section className="px-5 py-5 mt-7 rounded-[5px] bg-blue-900">
        <div className="flex items-center justify-start gap-11">
          <h4 className="font-bold text-[20px]">Otel Bul</h4>
          <p className="font-medium text-[18px]">Rezervasyon Sorgula</p>
        </div>
  
        <div className="flex items-center gap-5 mt-6">
          <input
            type="text"
            placeholder="Sehir, ilce, tema, otel adi ara"
            className="px-16 py-5 rounded-[4px] placeholder-black bg-slate-400 
            text-[17px] text-black font-medium"
          />
          <div className="border border-gray-500 py-2 px-3 pr-24 w-[350px] rounded-[5px]">
            <p className="font-medium">Giris ve cikis tarihi</p>
          <h4 className="font-medium text-[18px]">Giris ve cikis tarihi secin</h4>
          </div>
          <div className="border border-gray-500 py-2 px-3 pr-24 w-[300px] rounded-[5px]">
          <p className="font-medium">Konuk Sayisi</p>
          <h4 className="font-medium text-[18px]">2 Yetiskin</h4>
          </div>
          <button className="mt-2 ml-8 px-14 py-3 lg:py-6 text-[17px]">Otel bul &gt; </button>
        </div>
      </section>
    );
  }
  
  export default Action;
  
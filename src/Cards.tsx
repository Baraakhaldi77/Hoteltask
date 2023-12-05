

function Cards() {
  return (
    <div className="border border-gray-700 p-4 rounded-md flex md:flex-row flex-col 
    px-8 gap-4 mt-14">
     <img 
     alt="hotel1"
     className="md:w-[270px] w-full h-[250px]
     rounded-[3px] object-cover "
     src="https://media.cntraveler.com/photos/5a7b25a20bb24c1f0b5dc18c/16:9/w_2560%2Cc_limit/El-Palace-Hotel-__2018_Hotel-Facade.jpg"/>
      
      {/* Title & Description */}
      <div className="w-full flex justify-between
      items-center"> 
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
       <div className="flex items-center">
       <h4 className="font-medium mr-[200px]                     
       sm:text-[27px] text-[20px] text-white"
       >
        Regnum Carya Plus
        </h4>
        <p className="font-medium">Olağanüstü <span className="bg-blue-800 px-5 py-1 rounded-[3px]">10,0</span></p>
        </div>
      <a href="https://maps.app.goo.gl/35rjU52xtTzHbB5Y6"
      target="_blank"
      className="mt-1 font-medium text-[16px]"
      >Belek,Serik,Antalya</a>
       <p
       className="mt-[16px] font-bold lg:text-[20px] text-[14px]
       text-seconda"
       >
        Pearl Pool Room: 1 Çift Kişilik Yatak 
        </p>
        <p className="font-normal mt-2">Her Şey Dahil</p>
        <div className="flex ">
        <p className="font-normal mr-[230px]">Belek merkezine 4.3km</p>
        <div className="flex flex-col">
        <p>8 Gece Toplam Tutar</p>
        <h4 className="font-medium ml-8 text-[22px] mt-2">62.654₺</h4>
        <div className="flex justify-between items-center">
        <p className="cursor-pointer">Hizli incile &darr;</p>
        <button className="mt-2 ml-8 px-8 py-3">Seç &gt; </button>
         </div>
        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Cards
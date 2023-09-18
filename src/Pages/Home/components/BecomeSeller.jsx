const BecomeSeller = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-right py-20"
        style={{ backgroundImage: "url('../home/seller.png')" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="flex text-[3rem] md:text-[3rem] font-serif font-normal tracking-tighter leading-tight text-[#FFFFFF] text-center pb-3">
            Become a Seller!
          </h1>
          <p className="flex font-sans text-lg font-normal text-[#FFFFFF] leading-6 tracking-normal text-center w-[15.4375rem]  md:w-[23.4375rem]  pb-4">
            Become a seller, and join the online era with millions of other
            businesses using bazar.pk to sell online.
          </p>
          <button className="my-2 transition-transform hover:scale-95 h-16 w-[18.4375rem]  md:w-[23.4375rem] text-[#f2f2f2]  hover:text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
            <a href="https://bazar-pk-sellerside.vercel.app/" target="_blank">
              Become a Seller
            </a>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default BecomeSeller;

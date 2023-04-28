const BecomeSeller = () => {
    return(
        <>
            <div
            class="bg-no-repeat bg-cover bg-right py-20"
            style={{ backgroundImage: "url('../home/seller.png')" }}
            >
                <div class="flex flex-col items-center justify-center h-full">
                <h1 class="flex text-[3rem] md:text-[3rem] font-serif font-normal tracking-tighter leading-tight text-[#FFFFFF] text-center pb-3">
                    Become a Seller!
                </h1>
                <p class="flex font-sans text-lg font-normal text-[#FFFFFF] leading-6 tracking-normal text-center w-[25rem] pb-4">
                    Become a seller, and join the online era with millions of other
                    businesses using bazar.pk to sell online.
                </p>
                <button className="my-2 transition-transform hover:scale-95 h-16 w-[23.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
                    Become a Seller!
                </button>
                </div>
            </div>
        </>
    )
}

export default BecomeSeller
const Hero = () => {
    return (
        <>
            {/* HERO SECTION */}
            <div
                class="h-screen bg-center bg-cover"
                style={{ backgroundImage: "url('../Public/home/Home.svg')" }}
            >
                {/* Hero Content */}
                <div class="flex flex-col gap-4 items-center justify-center h-full">
                <div className="flex flex-col gap-2">
                    <h1 class="flex text-[3.5rem] md:text-[3.5rem] font-serif font-normal tracking-tighter leading-tight text-[#FFFFFF] text-center justify-center">
                    Shop Online,
                    <br /> In Your Area!
                    </h1>
                    <p class="flex font-sans text-lg font-normal text-[#FFFFFF]  leading-6 tracking-normal text-center w-[25rem] opacity-90">
                    Enter your address and we’ll take you to your local bazaar.
                    </p>
                </div>
                <div className="flex flex-col">
                    <input
                    // type="password"
                    // id="password"
                    // name="password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Address"
                    className="my-2 focus:outline-none focus:ring-2 font-sans focus:ring-green-600 h-16 w-[23.4375rem] px-3 border rounded-lg border-neutral-300"
                    />
                    <button className="my-2 transition-transform hover:scale-95 h-16 w-[23.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
                    Find My Bazar
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Hero
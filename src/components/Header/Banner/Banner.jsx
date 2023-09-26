

const Banner = () => {
    return (
        <div className="hero w-full h-96" style={{ backgroundImage: 'url(../../../../public/Resources/Food.png)' }}>
            <div className="hero-overlay bg-opacity-95 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className="">
                        <input className="text-gray-600 px-4 py-3 rounded-lg border w-96" type="search" name="search" id="" placeholder="search here..."/>
                        <button className="text-white font-semibold p-2 btn bg-[#FF444A]">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
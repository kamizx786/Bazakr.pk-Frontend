const City = (props) => {
    return (
        <>
          <div className="relative w-[180px] md:w-[280px] transition-transform hover:scale-95">
            <img
              src={props.coverImg}
              alt=""
              className="inset-0 object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 md:bottom-1 left-0 p-4 bg-opacity-50 font-serif text-xl md:text-3xl font-normal leading-9 text-left text-white">
              {props.cityName}
            </div>
          </div>
        </>
    )
}

export default City
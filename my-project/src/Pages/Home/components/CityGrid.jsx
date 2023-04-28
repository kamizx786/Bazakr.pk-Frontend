import City from "./City";
import cities from "./cities";

const CityGrid = (props) => {
    return (
        <>
            <div className="flex flex-wrap gap-4 justify-center">
                {
                    cities.map(
                        (city) => <City {...city} />
                    )
                }
            </div>
        </>
    )
}

export default CityGrid
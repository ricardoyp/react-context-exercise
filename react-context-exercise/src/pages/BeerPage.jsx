import { useContext } from "react"
import { BeerContext } from "../Context/BeerContext"
import { Link } from "react-router-dom";

export const BeerPage = () => {

    const {beerData, isLoading} = useContext(BeerContext);

    if(isLoading){
        return (
            <h1>Loading ...</h1>
        )
    }

    return (
        <div>
            <h1>BEER PAGE</h1>
            {beerData.map((beer, index) => {
                return (
                    <Link to={`/details/${beer.id.toString()}`}>
                            <p key={index}>{beer.name}</p>
                    </Link>
                )
            })}
        </div>
    )
}


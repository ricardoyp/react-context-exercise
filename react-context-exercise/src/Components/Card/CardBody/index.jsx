import { useContext } from "react"
import { BeerContext } from "../../../Context/BeerContext"
import { useParams } from "react-router-dom"

export const CardBody = () => {
    const { beerData } = useContext(BeerContext);
    const { id } = useParams();
    
    const selectedBeer = beerData.find(
        (beer) => beer.id === Number(id)
    );

    if (!selectedBeer) {
        return <p>Cerveza no encontrada</p>;
    }

    return (
        <div>
            <h2>{selectedBeer?.name}</h2>
            <p>Tagline: {selectedBeer?.tagline}</p>
            <p>First Brewed: {selectedBeer?.first_brewed}</p>
            <p>Description: {selectedBeer?.description}</p>
            <p>ABV: {selectedBeer?.abv}</p>
        </div>
    );
    
}
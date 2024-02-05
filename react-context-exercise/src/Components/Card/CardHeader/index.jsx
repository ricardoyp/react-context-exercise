import { useContext } from "react"
import { BeerContext } from "../../../Context/BeerContext"
import { useParams } from "react-router-dom"

export const CardHeader = () => {
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
            <img src={selectedBeer?.image_url} />
            {/* Otros detalles de la cerveza */}
        </div>
    );
}
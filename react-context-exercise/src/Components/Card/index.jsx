import { useContext } from "react"
import { BeerContext } from "../../Context/BeerContext"
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";

export const Card = () => {
    const { isLoading } = useContext(BeerContext);
    if(isLoading){
        return <h1>Loading...</h1>
    }
    return (
        <>
            <CardHeader />
            <CardBody />
        </>
    )
}
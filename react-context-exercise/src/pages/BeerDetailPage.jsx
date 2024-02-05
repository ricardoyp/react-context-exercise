import { useContext } from "react"
import { BeerContext } from "../Context/BeerContext"
import { Card } from "../Components/Card";

export const BeerDetailPage = () => {
    const { isLoading } = useContext(BeerContext);    
    
    if(isLoading){
        return (
            <h1>Loading ...</h1>
        )
    }

    return (
        <>
            <h1>BEER DETAIL</h1>
            <Card />
        </>
    )
}
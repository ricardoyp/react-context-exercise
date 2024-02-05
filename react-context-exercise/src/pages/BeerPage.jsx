import { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material"; // Importa los componentes necesarios de Material-UI

export const BeerPage = () => {
    const { beerData, isLoading } = useContext(BeerContext);

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }

    return (
        <>
        <h1>BEER PAGE</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {beerData.map((beer, index) => (
                <Link to={`/details/${beer.id.toString()}`} key={index}>
                    <Card sx={{ maxWidth: 345 }} key={index}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={beer.image_url} // Puedes reemplazar esta imagen con los datos de la cerveza
                                alt={beer.name} // Utiliza el nombre de la cerveza como alt
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {beer.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {beer.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            ))}
        </div>
        </>
        
    );
};

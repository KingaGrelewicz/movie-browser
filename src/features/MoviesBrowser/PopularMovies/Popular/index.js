import { TileMovie } from "../TileMovie";
import { Title, Movies } from "./styled";

export const Popular = ({ repositories }) => {

    return (

        <>
            <Title>Popular movies</Title>
            <Movies>
                <TileMovie repositories={repositories} />
            </Movies>
            
        </>

    )
}
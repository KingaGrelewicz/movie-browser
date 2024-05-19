import { TileMovie } from "../TileMovie";
import { Title, Movies } from "./styled";

export const Popular = ({ repositories }) => (
    <>
        <Title>Popular movies</Title>
        <Movies>
            <TileMovie repositories={repositories} />
        </Movies>
    </>

)
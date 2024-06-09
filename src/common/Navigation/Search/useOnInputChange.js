import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { toMovies, toPeople } from "../../../core/App/routes";
import { buildQueryString } from "./buildQueryString";

const delaySearch = 500;

export const useOnInputChange = setInputValue => {
    const timeoutRef = useRef();
    const history = useHistory();

    return ({ newValue, isSearchForPeople }) => {
        clearTimeout(timeoutRef.current);
        setInputValue(newValue);

        timeoutRef.current = setTimeout(() => {

            history.push({
                pathname: isSearchForPeople ? toPeople() : toMovies(),
                search: buildQueryString({ query: newValue ||  undefined}),
            });

        }, delaySearch);
    };
}; 
import { List } from './list';

interface Coord {
    lat : number;
    lon : number;
}

interface City {
    id : number;
    name : string;
    coord : Coord;
    country : string;
}

export interface Weatherforecast{
    cod : string;
    message : number;
    cnt : number;
    list : List[];
    city : City;
}
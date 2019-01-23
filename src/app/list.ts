import { Weather } from './weather';
import { Temperature } from './temperature';

interface Clouds {
    all : number;
}

interface Wind {
    speed : number;
    deg : number;
}

interface Sys{
    pod : string;
}

export interface List{
    dt : number;
    main : Temperature;
    weather : Weather[];
    clouds : Clouds;
    wind : Wind;
    sys : Sys;
    dt_txt : string;
}
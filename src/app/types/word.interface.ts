import { IIdentifiable } from "./identifiable.interface";

export interface IWord extends IIdentifiable {
    english: string;
    spanish: string;
    greek: string;
    hebrew: string;
}

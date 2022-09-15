import { Injectable } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import { Collections } from "../enums/collections.enum";
import { IWord } from "../types/word.interface";
import { AbstractRepository } from "./abstract-repository";

@Injectable({providedIn: 'root'})
export class WordRepository extends AbstractRepository<IWord> {
    collectionName: string = Collections.Words;
    constructor(public firestore: Firestore) {
        super();
    }
}

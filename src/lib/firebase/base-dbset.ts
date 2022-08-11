import { addDoc, collection, query, where, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from './db';

export abstract class BaseDbSet<T extends {id: string}> {
    abstract getCollectionName: () => string;

    getCollection () {
        return collection(db, this.getCollectionName());
    }
    
    async post(document: T) {        
        return await addDoc(this.getCollection(), document)
    }

    async delete(document: T) {     
        const ref = doc(db, this.getCollectionName(), document.id)   
        return await deleteDoc(ref);
    }

    async put(document: T) {     
        const ref = doc(db, this.getCollectionName(), document.id)   
        return await updateDoc(ref, document);
    }
    
    async get(): Promise<T[]> {
        const docs = await getDocs(query(this.getCollection()));
        return docs.docs.map(d => {
            const {id} = d;   
            const data: T = d.data() as T;
            return {...data, id};
        });
    }
}

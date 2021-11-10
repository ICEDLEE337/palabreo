import type { ILanguage } from "$lib/interfaces/language.interface";
import {supportedLanguageMap} from '../../constants/supported-languages';
export function parse (dashedCode): ILanguage {
    if (!dashedCode) {
        return null;
    }
    const [abbrev, country] = dashedCode?.split('-')?.map(s => s.toLowerCase());  
    const supported: ILanguage = supportedLanguageMap[abbrev];    
    return {abbrev, country, ...supported};
};
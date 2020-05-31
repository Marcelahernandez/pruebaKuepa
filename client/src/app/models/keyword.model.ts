import { Image } from './image.models';

export class Keyword  {
    id: number;
    keywordCategoryID: number;
    name: string;
    description: string;
    image: Image;
    active: boolean;
    keywordFeaturesList: KeywordFeaturesList[];
    keywordProductsList: number[];
}
  
export class KeywordFeaturesList {
    id: number;
    keywordID: number;
    name: string;
    description: string;
    image: Image;
}
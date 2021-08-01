export interface newsCategoriesModel {
  sourceCategory?: SourceCategoryEntity[] | null;
}
export interface SourceCategoryEntity {
  id: number;
  name: string;
}


export interface newsModel {
  articles?: ArticlesEntity[] | null;
}
export interface ArticlesEntity {
  id: number;
  title: string;
  content?: string | null;
  sourceID: number;
  urlToImage?: string | null;
  description: string;
  publishedAt: string;
  showOnHomepage: boolean;
}


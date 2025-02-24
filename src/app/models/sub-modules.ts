export type HeaderType = 'category' | 'sub-category';

export interface SubCategoryList {
  title: string;
  src: string;
  headerRoute: string;
  content: SubCategoryView;
}

export interface SubCategoryView {
  id: number;
  name: string;
  prize: number;
  isVeg: boolean;
  inStock: boolean;
  description: string;
  src: string;
  title?: string;
  headerRoute?: string;
}

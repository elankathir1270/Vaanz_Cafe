export interface SubModuleList {
  title: string;
  isScroll: boolean;
  headerRoute: string;
  content: SubModuleView;
}

export interface SubModuleView {
  id: number;
  name: string;
  prize: number;
  isVeg: boolean;
  inStock: boolean;
  description: string;
  src: string;
}

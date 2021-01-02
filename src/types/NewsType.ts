export type NewsType = {
  id: string;
  category: string;
  type: string;
  caption: string;
  summary: string;
  imgPath: string;
  imgAlt: string;
  content: string;
  subjects: string[];
  authors: string[];
  createDate: string;
  updateDate: string;
  expressDate: string;
  priority: number;
  viewCount: number;
  isActive: boolean;
  isSecondPageNews: boolean;
  slug: string;
  url: string;
  keywords: string;
  socialTags: string;
};
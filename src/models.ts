export interface NewsModel {
  id: string;
  title: string;
  image: string;
  description: string;
  time: string;
}

export interface NewsListModel {
  list: Array<NewsModel>;
}

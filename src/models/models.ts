export interface SharpImage {
  localFile: {
    fluid?: string;
  };
  alt_text: string;
}

export interface CourseModel {
  title: string;
  subtitle?: string;
  description: string;
  image?: SharpImage;
  url: string;
}

export interface SuccessStoryCardItem {
  name: string;
  photo?: SharpImage;
  jobtitle: string;
}

export interface PostStickyModel {
  slug: string;
  date: string;
  title: string;
  featured_media: SharpImage;
}

export interface PostModel extends PostStickyModel {
  excerpt: string;
}

export interface PaginationList<T> {
  items: T[];
  lastPage: number;
}

export interface PostResponse {
  id: number;
  date: string;
  date_gmt: string;
  guid: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: string[];
  acf: any;
  _embedded: any;
}

export interface SeoMetaItem {
  content: string;
  property: string | null;
}

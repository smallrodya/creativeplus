// Типы данных для BGF Promo сайта
export interface BGFMetadata {
  url: string;
  title: string;
  description: string;
  keywords: string;
  og_title: string;
  og_description: string;
  og_image: string;
  canonical: string;
  robots: string;
  viewport: string;
  charset: string;
}

export interface BGFNavigationItem {
  text: string;
  href: string;
  target: string;
  class: string[];
}

export interface BGFNavigation {
  type: string;
  selector: string;
  items: BGFNavigationItem[];
}

export interface BGFHeading {
  level: number;
  text: string;
  class: string[];
}

export interface BGFParagraph {
  text: string;
  class: string[];
}

export interface BGFListItem {
  type: string;
  items: string[];
  class: string[];
}

export interface BGFButton {
  text: string;
  href: string;
  class: string[];
  type: string;
}

export interface BGFImage {
  src: string;
  alt: string;
  title: string;
  class: string[];
  width: string;
  height: string;
  loading: string;
}

export interface BGFLink {
  text: string;
  href: string;
  target: string;
  class: string[];
  rel: string[];
}

export interface BGFTextContent {
  headings: BGFHeading[];
  paragraphs: BGFParagraph[];
  lists: BGFListItem[];
  buttons: BGFButton[];
  text: string;
}

export interface BGFContentBlock {
  tag: string;
  class: string[];
  id: string;
  content: BGFTextContent;
  html: string;
  images: BGFImage[];
  links: BGFLink[];
}

export interface BGFFormField {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  class: string[];
  id: string;
  options?: Array<{
    value: string;
    text: string;
    selected: boolean;
  }>;
}

export interface BGFForm {
  action: string;
  method: string;
  class: string[];
  id: string;
  fields: BGFFormField[];
}

export interface BGFStyle {
  type: string;
  href?: string;
  content?: string;
  media?: string;
  class: string[];
}

export interface BGFScript {
  src: string;
  type: string;
  class: string[];
  content: string;
}

export interface BGFStylesAndScripts {
  styles: BGFStyle[];
  scripts: BGFScript[];
}

export interface BGFPage {
  url: string;
  metadata: BGFMetadata;
  navigation: BGFNavigation[];
  content_blocks: BGFContentBlock[];
  forms: BGFForm[];
  styles_and_scripts: BGFStylesAndScripts;
  parsed_at: string;
}

export interface BGFSiteInfo {
  base_url: string;
  total_pages: number;
  parsed_at: string;
  parser_version: string;
}

export interface BGFData {
  site_info: BGFSiteInfo;
  pages: BGFPage[];
}

// Типы для компонентов
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  link: string;
}

export interface CaseStudyProps {
  title: string;
  genre: string;
  reach: string;
  listeners: string;
  additions: string;
  cost: string;
  link: string;
}

export interface ReviewProps {
  author: string;
  role: string;
  text: string;
  platform: string;
  link: string;
}

export interface TeamMemberProps {
  name: string;
  position: string;
  description?: string;
}

export interface ContactFormProps {
  onSubmit: (data: any) => void;
}

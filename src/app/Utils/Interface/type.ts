import { TypographyProps } from "@mui/material";

export interface navLinks {
  label: string,
  href: string
}
export interface MobilenavLinks {
  label: string,
  href: string
}

export interface SocialMediaProps {
  number: number
}
export interface Sections {
  title: string;
  items: string[];
  href: string;
  grid: {
    xs: number;
    md: number;
  };
  sx?: object;
}

export interface ProductCardProps {
  id: string,
  image: string;
  subtitle: string;
  price: string;
  newPrice?: string;
  category: string;
  available?: boolean;
  options?: [string]
  name: string;
  composition?: string;
  description?: string;
  categoriesDescription?: string[];
  tags?: string[];
  images: string[];
  mainImage?: string;
  select?: string
}
export interface BannerProductProps {
  priceDel?: boolean;
  showAvatar?: boolean;
  visibleCount?: number;
  products?: ProductCardProps[];
  size?: number,
  Chevron?: boolean;
  maxWidth?: number
  withFilter?: boolean

}
export interface Steps {

  title: string;
  text: string;
}

export interface ImagesSeasons {
  src: string;
  width: number;
  height: number;
}
export interface FooterLink {
  label: string;
  href: string;
}
export interface FooterColumn {
  title: string;
  links: FooterLink[];
  useSubtitle?: boolean;
}
export interface MobileFooter {
  title: string;
  href: string;
}




export interface FilterOption {
  title: string
  options: string[]
}
export interface ExtraItem {
  title?: string;
  text?: string;
}

export interface ExtrasBannerProps {
  items: ExtraItem[];
  title?: string;
  width?: number;
  bgcolor?: string
  minHeight?: number;
  variant?: TypographyProps['variant'];
  height?: number | { xs: number | string, lg: number }
  boxTop?: number
  display?: { display: string, alignItems:string, justifyContent: string }

}


type ResponsiveValue<T> = T | {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
};

interface Positioning {
  top?: ResponsiveValue<number>;
  bottom?: ResponsiveValue<number>;
  left?: ResponsiveValue<number>;
  right?: ResponsiveValue<number>;
  width?: ResponsiveValue<string>;
  height?: ResponsiveValue<string>;
  position?: ResponsiveValue<string>;
}

export interface HomeBg extends Positioning {
  image: {
    xs?: string;
    md?: string;
    sm?: string;
    lg?: string;
  };
  zIndex?: ResponsiveValue<number>;
  marginTop?: ResponsiveValue<number>;
  size?: ResponsiveValue<string>;
}


export interface ImagebgProps {
  items: HomeBg[];
}
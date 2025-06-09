// origin data from API
export interface HeaderNavigationItem{
    id: string;
    title: string;
    href: string;
    description?: string;
}

export interface HeaderMainNavigationItem extends HeaderNavigationItem{
    children?: HeaderNavigationItem[];
    hasDropDown?: boolean;
}
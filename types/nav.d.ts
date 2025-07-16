export interface NavLink {
       title: string;
       link: string;
       icon?: Component;
       disabled?: boolean;
       isActive?: boolean;
       new?: boolean;
}

export interface NavSectionTitle {
       heading: string;
}

export interface NavGroup {
       title: string;
       icon?: Component;
       new?: boolean;
       disabled?: boolean;
       isActive?: boolean;
       children: NavLink[];
}

export interface NavMenu {
       heading: string;
       items: NavMenuItems;
}

export declare type NavMenuItems = (NavLink | NavGroup | NavSectionTitle)[];

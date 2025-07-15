interface NavItems {
       title: string;
       url: string;
       disabled?: boolean;
       external?: boolean;
       shortcut?: [string, string];
       icon?: Component;
       label?: string;
       description?: string;
       value?: string;
       isActive?: boolean;
       items?: NavItems[];
}

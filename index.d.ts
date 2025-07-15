declare module 'nuxt/schema' {
       interface AppConfigInput {
              sidebar: {
                     collapsible: 'offcanvas' | 'icon' | 'none';
                     side: 'left' | 'right';
                     variant: 'sidebar' | 'floating' | 'inset';
              };
       }
}

export {};

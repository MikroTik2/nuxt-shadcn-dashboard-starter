import { useRoute } from 'vue-router';

export interface BreadcrumbItem {
       title: string;
       link: string;
}

const routeMapping: Record<string, BreadcrumbItem[]> = {
       '/dashboard/overview': [
              { title: 'Dashboard', link: '/dashboard/overview' },
              { title: 'Overview', link: '/dashboard/overview' },
       ],
       '/dashboard/product': [
              { title: 'Dashboard', link: '/dashboard/overview' },
              { title: 'Product', link: '/dashboard/product' },
       ],
       '/dashboard/order': [
              { title: 'Dashboard', link: '/dashboard/overview' },
              { title: 'Order', link: '/dashboard/product' },
       ],
};

export function useBreadcrumbs() {
       const route = useRoute();

       const breadcrumbs = computed(() => {
              const pathname = route.path;

              if (routeMapping[pathname]) {
                     return routeMapping[pathname];
              }

              const segments = pathname.split('/').filter(Boolean);
              return segments.map((segment, index) => {
                     const path = `/${segments.slice(0, index + 1).join('/')}`;
                     return {
                            title: segment.charAt(0).toUpperCase() + segment.slice(1),
                            link: path,
                     };
              });
       });

       return breadcrumbs;
}

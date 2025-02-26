export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser();

    if (!user.value && to.path !== '/login' && to.path !== '/register') {
        return navigateTo('/login', { replace: true });
    }
});

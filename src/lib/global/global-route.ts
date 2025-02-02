import { IRoute } from "@/types/route.type"

export const useGlobalRoutes = () => {

    const GLOBAL_ROUTES = {
        HOME: {
            href: '/',
            label: 'Home',
        },
        LOGIN: {
            href: '/login',
            label: 'Login',
        },
        BOARDS: {
            href: '/boards',
            label: 'Boards'
        }
    } as const satisfies { [key: string]: IRoute }

    return GLOBAL_ROUTES
}
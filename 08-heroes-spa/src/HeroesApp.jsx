import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const HeroesApp = () => {
    return (
        // el AuthProvider en esta ruta tan alta es para que coja todos los elementos
        <>
            <AuthProvider>
                <AppRouter/>
            </AuthProvider>
        </>
    )
}


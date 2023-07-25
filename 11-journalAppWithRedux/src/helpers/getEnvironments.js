
// Para trabajar con variables de entorno

export const getEnvinments = () => {
    
    import.meta.env;

    return {
        ...import.meta.env
    }
}
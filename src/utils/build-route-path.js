export function buildRoutePath(path) {
    // Identifica parâmetros dinâmicos da rota, como :id ou :userId
    const routeParametersRegex = /:([a-zA-Z]+)/g

    const pathWithParams = path.replaceAll(
        routeParametersRegex,
        '(?<$1>[a-z0-9\-_]+)',
    )

    const pathRegex = new RegExp(`^${pathWithParams}`)

    //console.log(pathWithParams)

    //console.log(Array.from(path.matchAll(routeParametersRegex)))

    return pathRegex
}

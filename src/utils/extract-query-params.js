// The following lines are an example of how the `extractQueryParams` function works

// ?search=Antonio&page=2
// search=Antonio&page=2
// ['search=Antonio', 'page=2']
// key = "search"; value="Antonio"
// { key: search }

export function extractQueryParams(query) {
    return query
        .substr(1)
        .split('&')
        .reduce((queryParams, param) => {
            const [key, value] = param.split('=')

            queryParams[key] = value

            return queryParams
        }, {})
}

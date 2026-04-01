export async function json(req, res) {
    const buf = []

    for await (const chunck of req) {
        buf.push(chunck)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buf).toString())
        console.log(req.body)
    } catch {
        req.body = null
    }

    res.setHeader('Content-type', 'application/json')
}

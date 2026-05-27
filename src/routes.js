import { Database } from './database.js'
import { randomUUID } from 'node:crypto'
import { buildRoutePath } from './utils/build-route-path.js'
// For tests
import { apiConnection } from './server.js'

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: '/health',
        handler: (req, res) => {
            console.log(
                `Server is running on ${apiConnection.URL}:${apiConnection.PORT}`,
            )

            return res.writeHead(200).end()
        },
    },
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const users = database.select('users')

            return res.end(JSON.stringify(users))
        },
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const { name, email } = req.body

            const user = {
                id: randomUUID(),
                name,
                email,
            }

            database.insert('users', user)

            return res.writeHead(201).end()
        },
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'),
        handler: (req, res) => {
            return res.end()
        },
    },
]

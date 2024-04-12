import {createServer} from 'node:http'

const server = createServer (() => {
    console.log('teste')
})

server.listen(3333)
import { server } from './server/Server'

server.listen(process.env.PORT || 3838, () => { console.log(`Server running on ${process.env.PORT || 3838} PORT`) })


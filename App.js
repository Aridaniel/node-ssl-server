const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')

const app = express()

app.use('/', (req, res, next) => {
    res.send('Hallo from SSL SERVER')
})

const sslServer = https.createServer(
        {
            key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
            cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
        }, 
        app
    )


sslServer.listen(3443, () => console.log('Secure SErver on PORT 3443, remember type https in the browser , jiiiibí'))
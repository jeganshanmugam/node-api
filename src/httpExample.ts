import http from 'http';

const server = http.createServer(function(req,res) {
    if (req.url === '/' ) {
        res.write('Sample message . hello world')
        res.end();
    } 

    if (req.url === '/api') {
        res.write(JSON.stringify([1,2,3,4,5]))
        res.end();
    }

});

server.listen(3000);

console.log('Listening in port 3000');
const express =require('express');
const app = express();

app.get('/api/hello', (req,res)=> {
res.json({
message: 'Hello from Server VM',
server: '192.168.56.10'
});
});

app.listen(3000,'0.0.0.0', () => {
console.log('Microservice running on port 3000');
});

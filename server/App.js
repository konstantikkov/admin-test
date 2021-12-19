const express = require('express')
const path = require('path')

const app = express();

app.use(express.json({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('*', (req, res)=>{
    const index = path.join(__dirname, 'build', 'index.html');
    console.log('index')
    res.sendFile(index)
});

const PORT = 5555;

async function  start(){
    try{
        app.listen(PORT, ()=> console.log(`App has been started on ${PORT}`))
    }
    catch (e){
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()
import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.get('/about', (req, res) => {
    const name="sagar punia jai baba ke"
    res.send(name);
})

const prompt = process.env.PORT || 3000;
app.listen(prompt,()=>{
    console.log(`Server is running at http://localhost:${prompt}`);
})
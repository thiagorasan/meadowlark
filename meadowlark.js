const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

//configura o view engine Handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

const fortunes = [
    "Conquer your fears or the will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "you will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
]

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => res.render('home'));

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about', { fortune: randomFortune});
})
//página 404 personalizada
app.use((req, res) => {
    res.status(404);
    res.send('404 - Not Found');
})

//página 500 personalizada
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.send('500 - Server Error');
})


app.listen(port, () => console.log(
    `Express started on http://localhost:$(port),` + `press Ctrl-C to terminate.`
));
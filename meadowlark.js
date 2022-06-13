
let fortStrings = require('./library/FortStrings.js')

let express = require('express');

let app = express();

let handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/about', (req, res) => {
    res.render('about', { fortStrings: fortStrings.getFortStrings });
});
    
app.use((req, res, ) => {
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log( 'Express запущен на http://localhost:' +
    app.get('port') + '; нажмите Ctrl+C для завершения.' );
});
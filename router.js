module.exports = function(app){
    app.get('/', (req, res) => {
        res.sendFile('file.html', { root: __dirname });
    })
    
    app.get('/hello', (req, res) => {
        res.send('Hello');
    })
    
    app.get('*', (req, res) => {
        res.send('page does not exist');
    })
}


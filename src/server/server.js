const app = require('./controller/CamperController');

const port = process.env.port || 8888;

app.listen(port, ()=> console.log(`App Listening @ port ${port}`));
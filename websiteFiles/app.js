const express = require('express');
const app = express();
require('dotenv').config();

const { auth } = require('express-openid-connect');
app.use(
    auth({
        issuerBaseURL: process.env.ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID,
        secret: process.env.SECRET,
    })
);

app.get('/',(req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');

}

const port = process.env.PORT || 5501;
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});

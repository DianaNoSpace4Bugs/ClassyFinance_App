const express = require('express');
const app = express();
const port = 3000;
const cowsay = require('cowsay');

app.use(express.json());

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Example app listening on port http://localhost:${port}`,
            e: "oO",
            T: "U "
        }))
  })


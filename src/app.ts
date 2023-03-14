import express from 'express'
const app = express();
const sequenceRoutes = require("./routes/sequence");
app.use(express.json());
app.use("/sequence",sequenceRoutes);
const port = 5000
app.get('/', (_, res) => {
  res.status(200).send({hello: "made it"})
})
app.listen(port, () => console.log(`Running on port ${port}`))
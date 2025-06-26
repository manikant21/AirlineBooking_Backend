import express from 'express';
import { PORT, logger } from './config/index.js';
import { router as apiRoutes } from "./routes/index.js";

const app = express();


app.use('/api', apiRoutes);

// app.get('/', (req, res) => {
//     return res.json({msg: "hii"})
// })

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
    logger.info("Successfully started the server")
})
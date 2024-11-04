import express from "express";
import router from "./routes/route.js"
import { PORT } from "./app/config/config.js";


const app = express();


app.use("/api",router);


app.listen(PORT,()=>{
    console.log(`Server is On at http://localhost:${PORT}`);
})
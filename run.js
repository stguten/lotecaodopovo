import cron from "node-cron";
import app from "./src/app.js";
import { sortearSena } from "./src/controller/sorteio.controller.js";

cron.schedule('* * * * *',sortearSena);

app.listen(process.env.SERVER_PORT || 3000);

import app from "./config/express.config.js";
import aposta from "./route/aposta.route.js";

app.use("/loteca",aposta);

export default app;
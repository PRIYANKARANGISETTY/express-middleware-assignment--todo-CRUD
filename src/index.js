const express = require("express");
const todosRouter = require("./routes/todos.routes");
const loggerMiddleware = require("./middleware/logger.middleware");

const app = express();
const PORT = 3000;

// JSON Middleware
app.use(express.json());

// App-level Logger Middleware
app.use(loggerMiddleware);

// Routes
app.use("/todos", todosRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

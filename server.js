const app = require("./src/app");
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

console.log(__dirname);
console.log("Current working directory:", process.cwd());
console.log("Directory of server.js:", __dirname);

import express from "express"
import connectDB from "./db.js"
import router from "./controller.js"
const app = express();
const port = 4040;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.use(express.json());
app.use("/user",router)
 

app.listen(port, async() => {
  await connectDB()
  console.log(`server is listening at http://localhost:${port}`);
});

import express from "express";
import cors from 'cors'; // Thêm import cors
import connectDatabase from "./Services/ConnectDBService.js";
// import bodyParser from 'body-parser';
import router from "./Router/AccountRouter.js";
connectDatabase();
const app = express();

app.use(cors({
  origin: '*', // Change this to the specific origin of your Vite app
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.options('*', cors()); // Enable pre-flight across the board

app.use(express.json());

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

const PORT = 8000;
const HOST = 'localhost'; // Lắng nghe trên localhost

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
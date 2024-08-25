import express from 'express'; 
import { config } from 'dotenv';
import cors from 'cors'; 

const app = express(); 
const router = express.Router(); 

config({path: "./config.env"}); 

app.use(cors({
  origin: [process.env.FRONTEND_URL], 
  methods: ["post"], 
  credentials: true
}))

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

router.get('/', (req, res, next)=>{
  res.json({success: true, 
  message: "Habibi Come to dubai"})
})

app.use(router)

app.listen(process.env.PORT, ()=>{
  console.log(`Server Listening on port :   ${process.env.PORT}`);
})

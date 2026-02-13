

import express from "express";
import mongoose from "mongoose";
import { urlShort,getOriginalUrl} from "./Controllers/url.js";


const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true })); // ⭐ IMPORTANT


// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://akshay755244:statebank75@zerodhaclonecluster.h43emm9.mongodb.net/?appName=ZerodhaCloneCluster",
    {
      dbName: "urlShortenerDB",
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test route

  app.get('/',(req,res)=>{
    res.render("server.ejs",{shortUrl:null})
  })

    app.post("/shorten", urlShort);
 
      app.get("/:shortCode", getOriginalUrl);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



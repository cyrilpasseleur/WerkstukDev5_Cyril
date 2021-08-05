const express = require("express")
const {Client} = require('pg')

const app = express();


const client = new Client({
    user: 'root',
    password:'secret',
    host:'127.0.0.1',
    port:'5432',
    database:'root'
})
// app.get("/Steps", (req,res)=>{
//     res.send("Here all the steps");
// })
app.get("/steps", async (req, res) => {
    const rows = await readSteps();
    res.send(JSON.stringify(rows))
})
app.listen(8080, () => console.log("Web server is listening.. on port 8080"))

client.connect()

.then(()=> console.log("connected"))
.catch(e =>console.log(e))



client.query(`CREATE TABLE Sportagenda(id INT PRIMARY KEY, date VARCHAR(240) NOT NULL, Stappen VARCHAR(240) NOT NULL, Calorieen VARCHAR(240) NOT NULL, SportUren VARCHAR(240) NOT NULL)`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
})

client.query(`CREATE TABLE MaandLogs(id INT PRIMARY KEY, date VARCHAR(240) NOT NULL, MaandStappen VARCHAR(240) NOT NULL, MaandCalorieen VARCHAR(240) NOT NULL, MaandSportUren VARCHAR(240) NOT NULL)`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
})

async function readSteps(){
    try{
        const results = await client.query("SELECT * FROM Sportagenda;");
        console.log(results.rows)
        return results.rows;
    }catch(e){
        return [];
    }
}


module.exports =  app;
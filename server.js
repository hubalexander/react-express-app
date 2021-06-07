const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
app.use(express.json())

//Array containing members 
const members = [
   {  
        name: "Alexander", 
        height: 185},
 {
        name: "Stefan", 
        height: 186},
  {
        name: "Julia", 
        height: 172},
    {
        name: "Cecilia", 
        height: 169},
    ];

//Welcome text
app.get('/api', (req, res) => { 
  res.send({ express: 'Welcome' }); 
}); 

//Returns all the current members
app.get('/api/members', (req, res) => {
    res.send(members);
});



app.listen(port, () => console.log(`Listening on port ${port}`)); 

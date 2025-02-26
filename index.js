import express from 'express';
import userList from './userData.js'
import User from './userClass.js'

const fs =  'fs';
const bodyParser = 'body-parser';
import { v4 as uuid } from 'uuid';


const app = express();

const PORT = 3000;


app.use(express.json());
 
function storeInfo(array, object){
    array.push(object)
}


// Create a New Goal: 
app.post('/user', (req, res) =>{
    if (req.body.username === undefined || req.body.userGoal === undefined){
        res.status(400).send( "Error- Please enter a username and a goal")
    }else{
        const setGoal = new User(req.body.username, req.body.userGoal)
        storeInfo(userList, setGoal)
        res.json(setGoal);
    
        console.log(`Your goal "${req.body.userGoal}" has been created!`)
        console.log(`Current users: ${JSON.stringify(userList)}`)
    }
});

// Access one user goal using the user ID
app.get('/user/:userID', (req,res) =>{
    if (req.params.userID  === undefined){
        res.status(400).send( "Error- ID not found")
    }else{
        for (let i = 0; i < userList.length; i ++){
            const currentUser = userList[i]
            if(currentUser["userID"] === req.params.userID){
                res.status(201).json(currentUser["userGoal"])
            }
        }
    }
});

// Access all users 
app.get('/user', (req, res) =>{
    if(req.body === undefined){
        res.status(400).send( "Error- no users or goals created")
    }else{
       res.status(200).json(userList)
    }
   });




// Replace an existing goal
app.put('/user/:userID', (req, res)=>{
    if (req.body.username === undefined || req.body.userGoal === undefined || req.params.userID === undefined){
        res.status(400).send("Error- Please review request. A valid request will have a valid username, user goal and user ID")
    }else{
        for (let i = 0; i < userList.length; i ++){
            const currentUser = userList[i]
            if(currentUser["userID"] === req.params.userID){
                currentUser["username"] = req.body.username
                currentUser["userGoal"] = req.body.userGoal
                res.status(200).json(currentUser)
                console.log(`Your goal has been updated. Your new goal is ${req.body.userGoal}`)
            }
        }
    }
    
});


// Delete user's information
app.delete('/user/:userID', (req, res)=>{
    if(req.params.userID === undefined){
        res.status(400).send("Error- Please provide a valid user ID")
    }else{
        for (let i = 0; i < userList.length; i ++){
            const currentUser = userList[i]
            if(currentUser["userID"] === req.params.userID){
                userList.splice(i, 1)
                res.status(200).json(userList)
                console.log(`Goal for user ID ${req.params.userID} has been deleted`)
            }
        }
    } 
});


app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}...`)
});

export default storeInfo;

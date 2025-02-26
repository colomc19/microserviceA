import { v4 as uuid } from 'uuid';

class User {
    /**
     * 
     * @param {string} username 
     * @param {string} userGoal 
     */
    constructor(username, userGoal){
        this.username = username;
        this.userGoal = userGoal;
        this.userID = uuid();
}
}

export default User;
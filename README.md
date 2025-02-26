# microserviceA

A) How to Request Data
To request data:
The microservice is set to listen on http://localhost:3000, where requests can be made. An example request would be:

POST http://localhost:3000/user HTTP/1.1
content-type: application/json

{
  "username" : "testUser3",
  "userGoal": "Drink 60 ounces of water a day."

}

B) How to Receive Data
Data will be received in JSON format. To receive data, a GET request can be used. For example: 

GET http://localhost:3000/user HTTP/1.1

C) UML Sequence Diagram

![Sequence diagram](https://github.com/user-attachments/assets/73dc31fa-2487-478a-ba4e-15d16a7bdf65)

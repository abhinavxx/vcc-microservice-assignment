VCC Microservice Assignment

#Overview

This project is a simple Node.js microservice developed as part of the VCC assignment.
The microservice exposes a REST API endpoint and is deployed on an Ubuntu Server Virtual Machine using Oracle VirtualBox.
The service is accessible over the internal network between a Server VM and a Client VM.

#Technology Stack

Node.js
Express.js
Ubuntu Server 24.04 LTS
Oracle VirtualBox
Git & GitHub

#Project Structure

microservices/

├── app.js

├── package.json

├── package-lock.json

├── node_modules/

└── README.md


#Microservice Details

API Endpoint

GET /api/hello

Sample Response

{
  "message": "Hello from Server VM",
  "server": "192.168.56.10"
}

#Application Code (app.js)

const express = require("express");

const app = express();

app.get("/api/hello", (req, res) => {

  res.json({
  
    message: "Hello from Server VM",
    server: "192.168.56.10"
  
  });
});

app.listen(3000, "0.0.0.0", () => {

  console.log("Microservice running on port 3000");
  
});

 
#How to Run the Microservice

1. Install dependencies
npm install
2. Start the microservice
node app.js
Expected output:
Microservice running on port 3000
=>VM Network Configuration
Adapter 1: NAT (for internet access)
Adapter 2: Internal Network (intnet)
Server VM IP: 192.168.56.10
Client VM IP: 192.168.56.20
Both VMs are connected through the Internal Network for inter-VM communication.

#API Testing (From Client VM)
curl http://192.168.56.10:3000/api/hello
Successful output confirms:
Server is running
Network configuration is correct
Microservice is reachable

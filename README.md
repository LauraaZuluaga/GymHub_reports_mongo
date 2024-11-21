
# GymHub-reports  

Activities Microservice<br>
Handles the storage of training activities using a non-relational database (MongoDB).

GymHub
GymHub is an application designed to manage the information of trainers, trainees, and their training activities in a gym. Trainees can register and modify their profiles, associate themselves with a trainer, and log details of their workouts, categorized into Upper Body 💪, Legs 🦵, and Cardio 🫀. Each entry includes the associated trainer and the date of the training.

# Activities Microservice 📓

This microservice is responsible for storing training activity reports for gym trainees. It is implemented using a non-relational database (*MongoDB*) to ensure scalability and flexibility. The microservice supports recording, managing, and retrieving training activities associated with each trainee.

## Features 🛠

1. *Store Training Activities:*
   - Save detailed records of training activities for each date.
   - Required fields:
     - *apprenticeID* (mandatory).
     - *apprenticeUsername* (mandatory).
     - *coachID* (mandatory).
     - *TrainingName* (mandatory).
     - *TrainingDate* (mandatory).
     - *TrainingType* (mandatory).

2. *Retrieve Monthly Reports:*
   - Provide a detailed monthly report of a trainee's activities.
   - Structure of the report:
     - Weekly breakdown of activities with dates, types, and trainers.
     - Example:
       
       Monthly Report for Trainee 12345 (March 2024):
       Week 1:
       - Monday: 2024-03-01, Leg Training
       - Tuesday: 2024-03-02, Cardiovascular Training
       - Thursday: 2024-03-04, Leg Training
       Week 2:
       - Monday: 2024-03-08, Upper Body Training
       - Wednesday: 2024-03-10, Cardiovascular Training
       - Friday: 2024-03-12, Upper Body Training

## Architecture Overview 🏗

This microservice is part of a *microservices architecture* designed for modularity and scalability:
- *Main Microservice:* Manages user authentication and profiles.
- *Activities Microservice:* Handles training activity records and communicates with the main microservice to generate reports.

## Directory Structure 📂

   📂 GymHub  
├── 🛢 backups  
├── ⚙ config  
├── ⛲ src  
│   ├── 📂 application  
│   │   ├── 📂 domain  
│   │   │   ├── 📂 abstract-classes  
│   │   │   ├── 📂 models  
│   │   │   │   ├── 📂 enums  
│   │   │   │   ├── 📂 auth  
│   │   ├── 📂 infrastructure  
│   │       ├── 📂 dto  
│   │       ├── 📂 modules  
│   │       ├── 📂 routes  
│   │       ├── 📂 repositories  
│   │       ├── 📂 service


## Tech Stack 💻

### Technologies:
- *Node.js*
- *TypeScript*
- *MongoDB*
- *Mongoose* (ODM for MongoDB)

### Libraries and Dependencies:
Install required dependencies with the following commands:

- *Mongoose*
  ```bash
  npm install mongoose @types/mongoose
  ```

  ## Collaborators:

  - Dayana montoya
  - Dilbani Enriquez
  - German Guerrero
  - Heidy florez
  - Laura Zuluaga
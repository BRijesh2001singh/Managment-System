
# Shool Management System
School Management System to make school operations smoother and more efficient. This app helps with administrative tasks and improves communication within the school. It includes features like role-based authentication, an admin dashboard, a teacher portal, a student dashboard, attendance management, grade tracking, and sections for notices and complaints.


## Screenshots
Login Page
![App Screenshot](./demo/s1.png)

Role based login 
![App Screenshot](./demo/s2.png)

Admin login Page
![App Screenshot](./demo/s3.png)

Admin Dashboard Page
![App Screenshot](./demo/s4.png)

Admins can add class
![App Screenshot](./demo/s5.png)
![App Screenshot](./demo/s6.png)

Admins can add teacher
![App Screenshot](./demo/s7.png)

Admins can add students
![App Screenshot](./demo/s8.png)

Teacher Dashboard
![App Screenshot](./demo/s9.png)

Teacher can view students profile and can schedule attendance and also upload marks of each students
![App Screenshot](./demo/s10.png)



## Run Locally

Clone the project 

```bash
  git clone git@github.com:BRijesh2001singh/Managment-System.git
```

Install dependencies
```bash
  npm install
```
Docker 
```bash
docker-compose -f docker-compose.prod.yaml up
```
Start the frontend
```bash
npm start
```
Start the server
```bash
  nodemon index.js
```

## Docker
Install docker-compose.yaml file to run locally
```bash
docker compose up
``` 




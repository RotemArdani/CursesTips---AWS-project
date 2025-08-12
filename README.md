# Student Course Tips - Web + AWS Application

## Overview

This project is a cloud-deployed full-stack web application designed to help students share and view tips about university courses. The application features a simple interface where users can browse a fixed list of courses and add or delete tips related to each course. The app is built and deployed following best practices for cloud infrastructure management, ensuring high availability and scalability.  

## Folder Structure

project-root/  
    ├── FE/             
    ├── BE/               
    └── TERRAFORM/ 

## Technologies Used

#### Frontend:
React
#### Backend:
Node.js
Express
#### AWS Services:
EC2 – Two instances running the backend and frontend applications, deployed using AMI with all dependencies pre-installed.

RDS – Managed relational database service (MySQL or PostgreSQL), provisioned separately and used to store tips data.

Elastic Load Balancer (ELB) – Distributes incoming traffic to EC2 instances ensuring high availability.

Auto Scaling Group (ASG) – Automatically manages the number of EC2 instances to maintain fault tolerance.

VPC – Two Virtual Private Clouds: one for RDS, and one for the EC2 instances.

Security Groups (SG) – Predefined security groups to control access and network traffic.

Terraform – Infrastructure as Code tool used for provisioning and managing all cloud resources except RDS.

## Use Case

Users visiting the application can:

- View a list of four predefined university courses.

For each course:

- View existing tips submitted by other users.

- Add new tips via a simple popup input without leaving the page.

- Delete tips they no longer want to keep.

The application is designed to be user-friendly and responsive, focusing on core functionality without unnecessary complexity.

##  Getting Started

#### Step 1: Clone the Repository
git clone https://github.com/your-username/your-repo.git  
cd your-repo

#### Step 2: Configure Environment Variables

Create a .env file in the project root directory containing the following:  
DB_HOST=your-rds-endpoint.amazonaws.com  
DB_USER=your-db-username  
DB_PASSWORD=your-db-password  
DB_NAME=your-db-name  
PORT=3000  

VITE_API_URL=http://your-load-balancer-dns-name  

#### Step 3: Install Dependencies
#### Step 4: Run Locally (Optional)

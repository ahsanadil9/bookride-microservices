# Book Ride Microservices Backend 🚖

This project is a backend system inspired by Uber and Netflix, built using **Node.js microservices architecture**. It is designed to simulate a real-world ride-booking platform with scalable and decoupled services running on independent ports with separate MongoDB databases. Services communicate asynchronously via **RabbitMQ**.

---

## 🧱 Architecture Overview

### PORT SERVICE
- 3000 API Gateway (HTTP Proxy)
- 3001 User Service
- 3002 Captain (Driver) Service
- 3003 Ride Service


- All services run independently on separate ports
- Communication between services is done via **RabbitMQ**
- Each service uses its **own MongoDB database**

---

## 🧩 Services

### 1. API Gateway (Port: 3000)
- Routes external HTTP requests to internal microservices
- Handles authentication, rate limiting, etc.

### 2. User Service (Port: 3001)
- User signup/login
- Manages user profile and ride history

### 3. Captain Service (Port: 3002)
- Captain registration and status
- Accepts or declines ride requests

### 4. Ride Service (Port: 3003)
- Handles ride creation, status updates, and ride matching logic
- Sends messages to Captain Service via RabbitMQ

---

## 🛠️ Tech Stack

- **Node.js + Express.js**
- **MongoDB (per service DB)**
- **RabbitMQ** (for message queue / event-driven communication)
- **Docker** (optional for orchestration)
- **Postman** (for testing APIs)

---

## 🔁 Inter-Service Communication

- When a user books a ride, `Ride Service` sends a message via **RabbitMQ** to the `Captain Service`
- The `Captain Service` responds asynchronously with ride acceptance/rejection

---

## 🧪 Running the Services

Start each service individually:

```bash
# Gateway
cd gateway && npm install && npm run dev

# User Service
cd user && npm install && npm run dev

# Captain Service
cd captain && npm install && npm run dev

# Ride Service
cd ride && npm install && npm run dev

## 📊 Performance Testing (Load/Stress Testing)

To simulate real-world traffic and benchmark how many requests each microservice can handle, we’ll use tools like **Morrigan**, **k6**, or **Artillery**.

### 🔧 Tools

| Tool        | Language     | Description |
|-------------|--------------|-------------|
| **Morrigan** | Python (CLI) | High-performance CLI-based HTTP load generator |
| **k6**      | JavaScript   | Developer-friendly tool with scriptable load tests |
| **Artillery** | JavaScript / YAML | Lightweight load testing with rich options |

---

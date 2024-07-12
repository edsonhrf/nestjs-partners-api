# Multi-Tenant Ticket Reservation Backend

This application provides a multi-tenant backend for ticket reservations. Multiple clients or applications can access the core library and make requests to the available endpoints. In the project, `partner1` and `partner2` were created to simulate two distinct systems making requests to the core library. The endpoints for `partner1` are in English, while the endpoints for `partner2` are in Portuguese, simulating access by applications in different languages.

## Application Features
- Utilizes Docker to install necessary tools for the environment;
- Uses Prisma ORM to integrate with MySQL database;
- MySQL installation via Docker;
- Uses Dev Containers to run VS Code inside the container;

## Technologies Used
- TypeScript/JavaScript;
- Nest.js;
- Prisma;
- REST;
- Authentication.

## Environment Setup
- Install Node.js;
- Install the package manager `@nestjs/cli`;
- Install the REST Client extension to test the endpoints;
- Use MySQL database with Docker Compose.

## Project Design
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/86f44def-45eb-45c4-80af-5e7cec081a4d">


## Data Model
![image](https://github.com/user-attachments/assets/ad24b67c-9bbb-4dce-943c-69531dac8e46)
![image](https://github.com/user-attachments/assets/ef1dced3-c4aa-4dd8-8cde-2761dd4c5ab1)

---

## Getting Started

### Prerequisites
- Docker installed on your machine.
- Node.js installed on your machine.
- VS Code with Dev Containers extension installed.

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/your-repo.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd your-repo
    ```

3. **Open the project in VS Code:**
    ```sh
    code .
    ```

4. **Build and start the Docker containers:**
    ```sh
    docker-compose up --build
    ```

5. **Install the dependencies:**
    ```sh
    npm install
    ```

6. **Generate Prisma Client:**
    ```sh
    npx prisma generate
    ```

7. **Run database migrations:**
    ```sh
    npx prisma migrate dev
    ```

### Running the Application
To start the application inside the development container, use the following command:
```sh
npm run start:dev
 ```

### Contributing
1. Fork the repository.
2. Create a new feature branch (git checkout -b feature/NewBranch).
3. Commit your changes (git commit -m 'Add some to new branch').
4. Push to the branch (git push origin feature/NewBranch).
5. Open a Pull Request.

### License
Distributed under the MIT License. See LICENSE for more information.

### Contact
Edson Henrique - edsonhrf@gmail.com

### Project Link
https://github.com/edsonhrf/nestjs-partners-api

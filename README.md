\# Family Recipe Vault



Family Recipe Vault is a web-based application developed to digitally preserve, organize, and manage traditional family recipes. The application provides a simple and user-friendly platform where users can store recipes digitally instead of relying on handwritten notes or physical recipe collections.



\## 📌 Project Overview



The Family Recipe Vault allows users to manage their family recipes in one place. Users can add new recipes, view available recipes, open individual recipe details, and delete recipes when they are no longer required.



The project follows a frontend-backend architecture, where the frontend provides the user interface and the backend handles recipe data and API requests.



\## ✨ Features



\* Add new recipes

\* View all saved recipes

\* View individual recipe details

\* Delete recipes

\* Simple and user-friendly interface

\* REST API-based backend

\* Persistent recipe data management

\* Responsive web interface



\## 🛠️ Technologies Used



\### Frontend



\* HTML5

\* CSS3

\* JavaScript



\### Backend



\* Node.js

\* Express.js

\* MongoDB

\* Mongoose

\* REST APIs



\### Development Tools



\* Visual Studio Code

\* Git

\* GitHub

\* Postman



\## 📂 Project Structure



```text

Family\_Recipe\_Vault/

│

├── backend/

│   ├── models/

│   │   └── Recipe.js

│   └── server.js

│

├── frontend/

│   ├── add.html

│   ├── app.js

│   ├── index.html

│   ├── recipe.html

│   └── style.css

│

├── Family\_Recipe\_Vault\_Report.pdf

└── README.md

```



\## ⚙️ Installation and Setup



\### 1. Clone the Repository



```bash

git clone https://github.com/subbodhp27/Family\_Recipe\_Vault\_Report.git

```



\### 2. Navigate to the Project



```bash

cd Family\_Recipe\_Vault\_Report

```



\### 3. Install Backend Dependencies



Navigate to the backend folder:



```bash

cd backend

```



Install the required Node.js packages:



```bash

npm install

```



\### 4. Configure Database



Make sure MongoDB is installed and running on your system.



Configure the MongoDB connection in the backend according to your local MongoDB setup.



\### 5. Start the Backend Server



```bash

node server.js

```



The backend server will start on the configured port.



\### 6. Run the Frontend



Open:



```text

frontend/index.html

```



in a web browser.



\## 🔗 Application Workflow



```text

User

&#x20; │

&#x20; ▼

Frontend Interface

&#x20; │

&#x20; ├── View Recipes

&#x20; ├── Add Recipe

&#x20; ├── View Recipe Details

&#x20; └── Delete Recipe

&#x20; │

&#x20; ▼

JavaScript API Requests

&#x20; │

&#x20; ▼

Express.js Backend

&#x20; │

&#x20; ▼

MongoDB Database

&#x20; │

&#x20; ▼

Recipe Data

```



\## 📄 Main Pages



\### Home Page



Displays the available recipes and provides navigation to other features.



\### Add Recipe



Allows users to enter and save a new recipe.



\### Recipe Details



Displays complete information about a selected recipe.



\### Delete Recipe



Allows users to remove recipes that are no longer required.



\## 🔌 API



The backend provides REST API endpoints for managing recipe data.



Typical operations include:



```text

GET     → Retrieve recipes

POST    → Add a new recipe

DELETE  → Delete a recipe

```



\## 🎯 Project Objectives



\* Digitally preserve traditional family recipes.

\* Provide an organized recipe management system.

\* Reduce dependency on handwritten recipe collections.

\* Provide an easy-to-use web interface.

\* Demonstrate frontend and backend integration.

\* Implement REST API-based communication with a database.



\## 🚀 Future Enhancements



\* User authentication and authorization

\* Recipe search and filtering

\* Recipe categories

\* Recipe image uploads

\* Favorite recipes

\* Recipe editing

\* User profiles

\* Cloud database integration

\* Responsive mobile design



\## 📚 Project Documentation



The complete project report is available in:



```text

Family\_Recipe\_Vault\_Report.pdf

```



\## 👨‍💻 Author



\*\*Subodh Pravin Pisal\*\*



Computer Science \& Engineering

Vishwakarma University, Pune



\## 📜 License



This project was developed for academic and educational purposes.




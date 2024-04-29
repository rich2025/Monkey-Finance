# Monkey Finance - Investment Tracker

#### Repository for BU CS411 Spring 2024
###### Daniel Kim, Richard Yang, Edward Wang, Jianying Liu
![image](https://github.com/rich2025/411project/assets/156924821/5565160c-1057-4101-973c-1b52458214af)

**How to Run the Project Locally**
1. Make sure that you have `Git`, `Node.js`, `Python`, and `npm` installed on your local machine.
2. Fork this repository to your personal GitHub account.
3. In your forked repository, click `Code` and copy the URL.
4. Clone the repository into your program editor.
5. `cd` to the `frontend` folder.
6. Run `npm i`, which installs all packages and dependencies needed by the frontend.
7. Run `npm install @leecheuk/react-google-login` (Google auth support for React 18), `npm install axios`, `npm install react-chartjs-2`, and `npm install jwt-decode`.
8. Run `npm run dev` to start the local `frontend` server.
9. Now, navigate to the `backend` module.
10. Install the necessary modules by running `pip install requests`, `pip install nltk`, `pip install Flask-CORS`, and `pip install Flask`.
11. Now, install the virtual environment by running `python -m venv <environment name>` and `venv\Scripts\activate`.
12. Run `python stockrecommend.py` to start the first backend server.
13. In a new terminal, navigate to `backend` again and run `python stockmovement.py` in your virtual environment to start the other backend server.
14. To start the database, install MongoDB Compass and connect to `mongodb://localhost:27017`
15. Next, install the pymongo module (`pip install pymongo`)
16. In the backend directory, run `python findAddNewUser.py`

###### Primary Frontend Libraries and Frameworks: Vite, React, Tailwind CSS
###### Primary Backend Libraries and Frameworks: Flask, Mongo

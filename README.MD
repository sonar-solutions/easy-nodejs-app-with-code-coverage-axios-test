# 🚀 Easy NodeJS Project  

Easy NodeJS project with ExpressJS and AvaJS for unit testing and code coverage.

---

## 📄 Description 
This project is a simple NodeJS application using ExpressJS for building the server and AvaJS for unit testing and code coverage. It also demonstrates code coverage reporting and software composition analysis (SCA) integration with SonarQube/SonarCloud.

## 🗂️ Project Structure
```
├── src/
│   ├── start.js                # Entry point
│   └── app/
│       ├── index.js            # Express app setup
│       └── routes/
│           ├── index.js        # Main router
│           └── customers/      # Customer CRUD endpoints
│               └── ...         # Each endpoint has controller, validator, tests
├── risky_code/                 # Example files with risky code patterns
├── scripts/                    # Utility scripts (SCA, SARIF cleaning)
├── package.json                # Project metadata and scripts
├── sonar-project.properties    # SonarQube/SonarCloud config
├── LICENSE
└── README.MD
```

## ✨ Features
- RESTful API for managing customers
- Input validation with Joi
- Modular route/controller/validator structure
- Unit tests with AvaJS
- Code coverage with c8
- Software Composition Analysis (OWASP Dependency-Check)
- SonarQube/SonarCloud integration

## 📦 Installation 
1. Clone the repository:
    ```sh
    git clone https://github.com/SonarSource-Demos/easy-nodejs-app-with-code-coverage.git
    ```
2. Navigate to the project directory:
    ```sh
    cd easy-nodejs-app-with-code-coverage
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## ⚙️ Usage
1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running at `http://localhost:9020`.

## 🛠️ Environment Variables
- `BACKEND_API_SERVER_APP_PORT` (default: 9020)
- `NODE_ENV` (default: production)

## 📚 API Endpoints
- `GET    /api/customers`                - Get all customers
- `GET    /api/customers/:customer_id`   - Get one customer
- `POST   /api/customers`                - Create a customer
- `PUT    /api/customers/:customer_id`   - Update a customer
- `DELETE /api/customers/:customer_id`   - Delete a customer
- `GET    /health`                       - Health check

## 🧑‍💻 Writing & Running Unit Tests

### Writing Unit Tests
- Unit tests are written using [AvaJS](https://github.com/avajs/ava).
- Test files are located alongside the code they test, typically in a `tests/` subfolder within each feature directory.
    - Example: `src/app/routes/customers/create-one-customer/tests/response.test.js`
- To add a new test:
    1. Create a new `.test.js` file in the appropriate `tests/` folder.
    2. Write your test cases using AvaJS syntax.
    3. Export or require any modules you need to test.

### Running Unit Tests
- To run all unit tests:
    ```sh
    npm test
    ```
- This command runs AvaJS and also generates a code coverage report using [c8](https://github.com/bcoe/c8).

## 🧪 Running Tests & Code Coverage
To run the tests and generate code coverage:
```sh
npm test
```
- Coverage reports are generated in the `coverage/` directory as both HTML and lcov formats.
- To view the HTML report, open `coverage/index.html` in your browser.

### How Code Coverage Works
- The `npm test` script uses `c8` to instrument your code and collect coverage data while running tests.
- The main coverage file is `coverage/lcov.info`, which is used by SonarScanner for analysis.

## 📊 SonarQube/SonarCloud Integration
Make sure `sonar-project.properties` is configured. Then run:

For SonarCloud:
```sh
sonar-scanner \
  -Dsonar.organization=sonarcloud-demos \
  -Dsonar.projectKey=SonarCloud-Demos_easy-nodejs-app-with-code-coverage \
  -Dsonar.host.url=https://sonarcloud.io \
  -Dsonar.token=Please_Change_This_To_A_Secure_Token \
  -Dsonar.branch.name=main \
  -Dsonar.javaOpts=-Xmx8192m \
  -Dsonar.scanner.debug=true \
  -X
```
For SonarQube Self Hosted:
```sh
sonar-scanner \
  -Dsonar.projectKey=easy-nodejs-project \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.token=Please_Change_This_To_A_Secure_Token \
  -Dsonar.branch.name=main \
  -Dsonar.javaOpts=-Xmx8192m \
  -Dsonar.scanner.debug=true \
  -X
```

### How SonarScanner Picks Up Coverage
- SonarScanner is configured (see `sonar-project.properties`) to look for the `coverage/lcov.info` file.
- When you run SonarScanner (locally or in CI), it automatically imports the coverage data for reporting.

### GitHub Actions Integration
- In CI/CD, GitHub Actions can be set up to:
    1. Install dependencies
    2. Run `npm test` to generate the coverage report
    3. Run SonarScanner, which picks up `coverage/lcov.info`
- Example workflow steps:
    ```yaml
    - name: Install dependencies
      run: npm install
    - name: Run tests with coverage
      run: npm test
    - name: SonarCloud Scan
      uses: SonarSource/sonarcloud-github-action@master
      with:
        args: >
          -Dsonar.organization=sonarcloud-demos
          -Dsonar.projectKey=SonarCloud-Demos_easy-nodejs-app-with-code-coverage
          -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
    ```
- This ensures that every push or pull request is analyzed with up-to-date test coverage in SonarCloud/SonarQube.

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
MIT License

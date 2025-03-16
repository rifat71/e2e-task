# End-to-End (E2E) Test Automation Project

This project is designed for end-to-end test automation using **Cucumber.js** and **Playwright**. It includes feature files, step definitions, page objects, and hooks for browser setup and teardown.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setup Instructions](#setup-instructions)
3. [Test Execution Commands](#test-execution-commands)
4. [Project Structure](#project-structure)
5. [Generating Reports](#generating-reports)

---

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (Node Package Manager)

---

## Setup Instructions

1. **Clone the Repository**:
```bash
   git clone <repository-url>
   cd <project-directory>
```
2. Install Dependencies:

```bash
npm install
```
3. Install Browsers:
Playwright requires browsers to be installed. Run the following command:
```bash
npm run install:browsers
```

## Test Execution Commands
### Run All Tests
To run all tests, use the following command:

```bash
npm run all-test
```
### Run Tests with Specific Tags
To run tests with a specific tag (e.g., @wip4), use the following command:
```bash
npm run test @wip4
```

## Project Structure
The project is structured as follows:
```bash
root/
├── features/
│   ├── step_definitions/       # Step definitions for Cucumber scenarios
│   ├── *.feature               # Feature files
├── pages/                      # Page object classes
├── support/                    # Hooks and world setup
├── utils/                      # Utility functions (e.g., report generation)
├── reports/                    # Generated test reports
├── package.json                # Project dependencies and scripts
├── cucumber.js                 # Cucumber configuration
```

## Generating Reports
Test reports are automatically generated after all scenarios are executed. The AfterAll hook in the hooks.js file calls the generate-report utility, which creates an HTML report in the reports directory.

To view the report:

1. Navigate to the reports directory in the root folder.
2. Open the generated HTML file (cucumber_report.html) in a browser.

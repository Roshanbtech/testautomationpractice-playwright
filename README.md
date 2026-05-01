<h1 align="center">
  <img src="https://playwright.dev/img/playwright-logo.svg" width="40" valign="middle" />
  Playwright UI Automation Framework
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="35" valign="middle" />
</h1>

---

A scalable and modular UI automation framework built using Playwright and TypeScript for automating UI components of the Test Automation Practice application.

---

# Project Overview

This framework follows a professional enterprise-style automation architecture with:

* Modular component-based design
* Reusable utilities and validators
* Data-driven testing approach
* Feature branch Git workflow
* Scalable folder structure
* Playwright TypeScript automation

The framework automates multiple UI modules including:

* Form Controls
* Radio Buttons
* Checkboxes
* Dropdowns
* Date Pickers
* File Uploads

---

# Tech Stack

* TypeScript
* Playwright
* Node.js
* Git & GitHub

---

# Project Structure

```text id="5m2q8v"
playwright-ui-framework/
│
├── framework/
│   ├── components/
│   ├── config/
│   ├── fixtures/
│   ├── pages/
│   ├── test-data/
│   ├── validators/
│   └── utils/
│
├── tests/
│   ├── ui/
│   └── test-files/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── .gitignore
```

---

# Framework Features

## Modular Component Architecture

Each UI element is separated into its own module:

```text id="1q8m4r"
components/
├── form/
├── checkbox/
├── radioButton/
├── dropdown/
├── datePicker/
└── upload/
```

---

## Data-Driven Testing

Test data is maintained separately using JSON files.

Example:

```text id="8v1m3p"
framework/test-data/formData.json
```

---

## Reusable Validators

Validation logic is separated from test implementation for better maintainability.

---

## Utility Support

Reusable utilities included for:

* Logging
* Wait handling
* Screenshots
* Common helper methods

---

# Git Workflow

This project follows a professional feature-branch workflow.

Example workflow:

```text id="2q7m5v"
main
 ├── feature/initial-framework-setup
 ├── feature/form-module
 ├── feature/radio-button-module
 ├── feature/checkbox-module
 ├── feature/dropdown-module
 ├── feature/date-picker-module
 └── feature/upload-module
```

Workflow followed:

```text id="9m4q1p"
Feature Branch
    ↓
Commit Changes
    ↓
Push Branch
    ↓
Create Pull Request
    ↓
Merge into Main
    ↓
Delete Feature Branch
```

---

# Installation

## Clone Repository

```bash id="6q2m8v"
git clone <repository-url>
```

---

## Navigate To Project

```bash id="1p8m5q"
cd playwright-ui-framework
```

---

## Install Dependencies

```bash id="7m3q1v"
npm install
```

---

# Run Tests

## Run All Tests

```bash id="4v9m2q"
npx playwright test
```

---

## Run Specific Test File

```bash id="8q1m6p"
npx playwright test tests/ui/form.ui.spec.ts
```

---

## Run Tests In UI Mode

```bash id="3p8m5q"
npx playwright test --ui
```

---

# Generate Playwright Report

```bash id="6m2q9v"
npx playwright show-report
```

---

# Test Modules Covered

| Module                  | Status    |
| ----------------------- | --------- |
| Framework Setup         | Completed |
| Form Automation         | Completed |
| Radio Button Automation | Completed |
| Checkbox Automation     | Completed |
| Dropdown Automation     | Completed |
| Date Picker Automation  | Completed |
| Upload Automation       | Completed |

---

# Best Practices Followed

* Page Object Model (POM)
* Component-Based Architecture
* Reusable Utility Functions
* Separate Test Data Management
* Clean Git Commit History
* Feature-Based Branching
* Scalable Folder Structure

---

# Future Enhancements

* CI/CD Integration
* GitHub Actions Pipeline
* Allure Reporting
* Cross Browser Parallel Execution
* API Integration Testing
* Docker Support

---

# Author

Roshan Reji

SDET | Playwright Automation | TypeScript Automation Framework Development

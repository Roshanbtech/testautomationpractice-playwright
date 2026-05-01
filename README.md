<h1 align="center">
  <img src="https://playwright.dev/img/playwright-logo.svg" width="40" valign="middle" />
  Playwright UI Automation Framework
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="35" valign="middle" />
</h1>

<p align="center">
  Scalable UI Automation Framework using Playwright + TypeScript
</p>

---

# Project Overview

A scalable and modular UI automation framework built using Playwright and TypeScript for automating UI components of the Test Automation Practice application.

This framework follows a professional enterprise-style automation architecture with:

* Modular component-based design
* Reusable utilities and validators
* Data-driven testing approach
* Environment-based configuration
* Global setup implementation
* Playwright debugging support
* Playwright CodeGen support
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
* Winston Logger
* Git & GitHub

---

# Project Structure

```text
playwright-ui-framework/
│
├── framework/
│   ├── components/
│   ├── config/
│   ├── fixtures/
│   ├── pages/
│   ├── setup/
│   ├── test-data/
│   ├── utils/
│   └── validators/
│
├── logs/
│
├── tests/
│   ├── ui/
│   └── test-files/
│
├── .env
├── .gitignore
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

---

# Framework Features

## Modular Component Architecture

Each UI element is separated into its own reusable component module.

```text
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

Test data is maintained separately using JSON files for better maintainability and scalability.

Example:

```text
framework/test-data/formData.json
```

---

## Reusable Validators

Validation logic is separated from test implementation for cleaner and reusable assertions.

---

## Environment-Based Configuration

Environment handling is implemented using `.env` configuration.

Supported environments:

* DEV
* UAT
* PROD

Example:

```env
ENV=dev

BASE_URL_DEV=https://testautomationpractice.blogspot.com/

BASE_URL_UAT=https://testautomationpractice.blogspot.com/

BASE_URL_PROD=https://testautomationpractice.blogspot.com/
```

---

## Global Setup

Playwright Global Setup is implemented for:

* Environment initialization
* Application availability validation
* Framework-level setup execution
* Centralized logging support

Location:

```text
framework/setup/globalSetup.ts
```

---

## Utility Support

Reusable utilities included for:

* Logging
* Wait handling
* Common helper methods
* Framework-level reusable support

---

## Logging Support

Winston logger integration is implemented for framework-level logging.

Features:

* Console logging
* File logging
* Timestamp support
* Execution tracking

Example log file:

```text
logs/framework.log
```

---

# Debugging Support

The framework includes multiple Playwright debugging capabilities:

* Playwright Inspector
* Playwright UI Mode
* Trace Viewer
* Video Recording
* Screenshot Capture
* `page.pause()` runtime debugging

---

# Playwright CodeGen Support

Playwright CodeGen is used for:

* Automatic locator generation
* UI interaction recording
* Faster script development
* Locator debugging and inspection

Example generated locator:

```ts
page.getByRole('textbox', { name: 'Name' })
```

---

# Git Workflow

This project follows a professional feature-branch workflow.

Example workflow:

```text
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

```text
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

```bash
git clone <repository-url>
```

---

## Navigate To Project

```bash
cd playwright-ui-framework
```

---

## Install Dependencies

```bash
npm install
```

---

# Available Scripts

```bash
npm test                 # Run all tests

npm run test:headed      # Run tests in headed mode

npm run test:debug       # Run tests in debug mode

npm run test:ui          # Open Playwright UI mode

npm run codegen          # Open Playwright CodeGen

npm run codegen:app      # Open CodeGen with application URL

npm run report           # Open Playwright HTML report
```

---

# Run Tests

## Run All Tests

```bash
npx playwright test
```

---

## Run Specific Test File

```bash
npx playwright test tests/ui/form.ui.spec.ts
```

---

## Run Tests In UI Mode

```bash
npx playwright test --ui
```

---

## Run Tests In Debug Mode

```bash
npx playwright test --debug
```

---

## Open Playwright CodeGen

```bash
npx playwright codegen https://testautomationpractice.blogspot.com/
```

---

# Generate Playwright Report

```bash
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
| Global Setup            | Completed |
| Debugging Support       | Completed |
| CodeGen Support         | Completed |

---

# Best Practices Followed

* Page Object Model (POM)
* Component-Based Architecture
* Reusable Utility Functions
* Separate Test Data Management
* Playwright Fixtures
* Global Setup Configuration
* Environment-Based Configuration
* Debugging & Trace Support
* Data-Driven Testing
* Clean Git Commit History
* Feature-Based Branching
* Scalable Folder Structure

---

# Future Enhancements

* Jenkins CI/CD Integration
* GitHub Actions Pipeline
* Allure Reporting
* Cross Browser Parallel Execution
* API Automation Integration
* Docker Support
* Cloud Execution Support

---

# Author

## Roshan Reji

SDET | Playwright Automation | TypeScript Automation Framework Development

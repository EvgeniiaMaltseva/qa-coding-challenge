QA Coding Challenge

This project contains automated tests for API and UI testing using Playwright.

Test Structure

API Tests
Location: tests/api/
File: verifyPokeApi.spec.ts

UI Tests
Location: tests/ui/
File: verifyBeitragsrechnerFlow.spec.ts

QA Strategy

For the QA strategy and testing approach details, see files/QA-strategy.txt

Prerequisites

Before running tests, ensure the following are installed on your machine:

- Node.js (version 16 or higher)
- npm (comes with Node.js)
- Playwright browsers (will be installed via npm install)

Setup

1. Install dependencies:
   npm install

2. Install Playwright browsers:
   npx playwright install

Create locally .env file with POKEAPI_BASE_URL and UI_BASE_URL given in files/QA Coding Challenge.pdf

Running Tests

Run all tests:
   npx playwright test

Run specific test file:

   - npx playwright test tests/api/verifyPokeApi.spec.ts
   
   - npx playwright test tests/ui/verifyBeitragsrechnerFlow.spec.ts

Run tests with UI mode:
   npx playwright test --ui

Run tests in debug mode:
   npx playwright test --debug

Generate test report:
   npx playwright show-report

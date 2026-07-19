# Playwright Portfolio

![Playwright Tests](https://github.com/LloydSajol/playwright-portfolio/actions/workflows/playwright.yml/badge.svg)

End-to-end test automation suite for [SauceDemo](https://www.saucedemo.com) built with Playwright and TypeScript. Developed as part of an active QA automation upskilling path.

## What's tested

**Login** — valid login, invalid credentials, empty field validation  
**Inventory** — add multiple products to cart using data-driven loop, cart badge assertion  
**API** — REST API contract tests against ReqRes (GET, POST, DELETE)

## Stack

- **Framework:** Playwright v1.x
- **Language:** TypeScript
- **Pattern:** Page Object Model
- **CI/CD:** GitHub Actions (runs on every push)

## Project structure

playwright-portfolio/
├── pages/
│   ├── LoginPage.ts
│   └── InventoryCart.ts
├── tests/
│   ├── login.spec.ts
│   ├── course.spec.ts
│   └── api.spec.ts
├── playwright.config.ts
└── .github/workflows/playwright.yml

## Running locally

```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Author

Lloyd Sajol — QA Engineer  
[github.com/LloydSajol](https://github.com/LloydSajol)

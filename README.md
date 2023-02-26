# Saucedemo/Swaglabs Web Automation

Done in part for Aplikasi Super Recruitment Test.

Automation created for Web: [https://www.saucedemo.com/], for test case:

1. Login with Valid & Invalid Credentials
2. Sort the Products, by the Highest product price
3. Locate & Select most Expensive Product
4. Check the Product in cart
5. Fill out Payment/Shipping Information
6. Confirm Payment and Order

Automation created by using WebDriverIO, with consideration for:

1. More lightweight, compared to running Selenium on Java
2. Faster initial configuration, since most of the dependencies preinstalled by WebDriverIO itself. When need additional dependencies, it's easy to add to the config file and run npm install the library needed
3. Less flaky test, since most waiting for element to show up is handled automatically
4. Although WebDriverIO is considered newer than Selenium, the support or documentation can be easily found

Design pattern used is Singleton, this is mostly because the author is used to this pattern and for now unable to implement other design pattern.

Improvements:
1. Can change from jQuery to Typescript, to improve readability and improve data type safety

## Deployment

1. Clone this project

```bash
  git clone https://github.com/fkhrnaufal/Saucedemo-Web-Automation.git
```

2. To install latest version of WebdriverIO. (node.js version 18 need to be installed)
3. To install dependencies for this project run

```bash
  npm install
```

4. Run the created test using:

```bash
npx wdio run ./wdio.conf.js
```

Report of the test will be created using Spec Reporter inside bash or terminal

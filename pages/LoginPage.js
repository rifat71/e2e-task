// pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.locator("//input[@name='email']");
    this.passwordField = page.locator("//input[@name='password']");
    this.submitButton = page.locator("//button[@type='submit']");
    this.errorMessage = page.locator("//div[text()='Invalid Username or Password']");
  }

  async navigateToLoginPage() {
    await this.page.goto('https://suites.uat.cheqplease.com/',
      {waitUntil: 'networkidle', timeout: 90000, waitUntil: `domcontentloaded`}
    );
    await this.emailField.waitFor({ state: 'visible' });
  }

  async enterEmail(email) {
    await this.emailField.fill(email);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }

  async getErrorMessage() {
    await this.errorMessage.waitFor({ state: 'visible' });
    return await this.errorMessage.textContent();
  }
}

module.exports = LoginPage;
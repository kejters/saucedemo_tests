import { test, expect } from '@playwright/test';

test.describe('User login to shop', () => {
  test('login with correct credentials', async ({ page }) => {
    //Arrange
    const url = 'https://www.saucedemo.com/';
    const correct_ID = 'standard_user';
    const correct_password = 'secret_sauce';

    //Act
    await page.goto(url);
    await page.locator('#user-name').fill(correct_ID);
    await page.locator('#password').fill(correct_password);
    await page.locator('#login-button').click();

    //Assert
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('login with incorrect password', async ({ page }) => {
    //Arrange
    const url = 'https://www.saucedemo.com/';
    const correct_ID = 'standard_user';
    const incorrect_password = '1234';

    //Act
    await page.goto(url);
    await page.locator('#user-name').fill(correct_ID);
    await page.locator('#password').fill(incorrect_password);
    await page.locator('#login-button').click();

    //Assert
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

  test('login with incorrect user', async ({ page }) => {

    //Arrange
    const url = 'https://www.saucedemo.com/';
    const incorrect_ID = 'standard_user222';
    const correct_password = 'secret_sauce';

    //Act
    await page.goto(url);
    await page.locator('#user-name').fill(incorrect_ID);
    await page.locator('#password').fill(correct_password);
    await page.locator('#login-button').click();

    //Assert
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

  test('login with empty user', async ({ page }) => {
    //Arrange
    const url = 'https://www.saucedemo.com/';
    const correct_password = 'secret_sauce'; 
    
    //Act
    await page.goto(url);
    await page.locator('#password').fill(correct_password);
    await page.locator('#login-button').click();

    //Assert
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
  });

  test('login with empty password', async ({ page }) => {

    //Arrange
    const url = 'https://www.saucedemo.com/';
    const correct_ID = 'standard_user';

    //Act
    await page.goto(url);
    await page.locator('#user-name').fill(correct_ID);
    await page.locator('#login-button').click();

    //Assert
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');
  });
});

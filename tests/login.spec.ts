import { test, expect } from '@playwright/test';

test.describe('User login to shop', () => {

  test('login with correct credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('login with incorrect password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('1234');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

  test('login with incorrect user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user222');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

  test('login with empty user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
  });

  test('login with empty password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user222');
    await page.locator('[data-test="password"]').fill('');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');
  });

});
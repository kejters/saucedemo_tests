import { test, expect } from '@playwright/test';

test.describe('cart operations', () => {
  test('add product to cart', async ({ page }) => {
    //Arrange
    const url = 'https://www.saucedemo.com/';
    const correct_ID = 'standard_user';
    const correct_password = 'secret_sauce';

    //Act
    await page.goto(url);
    await page.locator('#user-name').fill(correct_ID);
    await page.locator('#password').fill(correct_password);
    await page.locator('#login-button').click();
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#shopping_cart_container').click();

    //Assert
    await expect(page.locator('#shopping_cart_container')).toHaveText('1');
  });
});

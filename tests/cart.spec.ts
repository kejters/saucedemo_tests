import { test, expect } from '@playwright/test';

test.describe('cart operations', () => {

  test.beforeEach(async ({ page }) => {
    const correct_ID = 'standard_user';
    const correct_password = 'secret_sauce';

    await page.goto('/');
    await page.locator('#user-name').fill(correct_ID);
    await page.locator('#password').fill(correct_password);
    await page.locator('#login-button').click();
  });
  
  test('add product to cart', async ({ page }) => {
    //Arrange

    //Act
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#shopping_cart_container').click();

    //Assert
    await expect(page.locator('#shopping_cart_container')).toHaveText('1');
  });
});

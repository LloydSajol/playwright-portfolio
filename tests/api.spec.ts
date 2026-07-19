import { test, expect } from '@playwright/test';


test('GET /users returns a list', async ({ request }) => {
    const response = await request.get(
        'https://reqres.in/api/users?page=1',
        {
            headers:{
                'x-api-key': 'free_user_3G56dz39camsCP2PsETsr47j3Dd'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data).toHaveLength(6);
    expect(body.data[0]).toMatchObject({
        id: expect.any(Number),
        email: expect.any(String),
        first_name: expect.any(String),
    });
});

test('POST', async ({ request }) => {
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data:{
                "title": 'John',
                "body": 'QA',
                "userID" : 1
            }
        }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body).toMatchObject({
        title: expect.any(String),
        body: expect.any(String),
        userID: expect.any(Number),
        id: expect.any(Number)
    });
});

test('DELETE', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

});

test.skip('SuaceDemo Mock API', async ({ page }) => {

    await page.route('**/inventory**', async route => {
        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({
                message: 'Internal Server Error'
            })
        });
    });

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('alert')).toBeVisible(); //Saucedemo has no UI for status 500
});


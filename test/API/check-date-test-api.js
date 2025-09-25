Feature('Date Checker API');

Scenario('Ngày hợp lệ - 29/02/2024', async ({ I }) => {
    const res = await I.sendPostRequest('/check-date', { day: 29, month: 2, year: 2024 });
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({ valid: true });
});

Scenario('Ngày không hợp lệ - 31/02/2025', async ({ I }) => {
    const res = await I.sendPostRequest('/check-date', { day: 31, month: 2, year: 2025 });
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({ valid: false });
});
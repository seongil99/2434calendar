import { test, expect } from '@playwright/test';

test('홈페이지가 정상적으로 로드된다', async ({ page }) => {
  await page.goto('/');
  
  // 페이지 제목 확인
  await expect(page).toHaveTitle(/홈 - React Router 앱/);
  
  // 메인 헤더 확인
  await expect(page.getByRole('heading', { name: '🚀 React Router 앱' })).toBeVisible();
  
  // 캘린더 링크 확인
  await expect(page.getByRole('link', { name: '캘린더 보기' })).toBeVisible();
});

test('캘린더 페이지로 이동할 수 있다', async ({ page }) => {
  await page.goto('/');
  
  // 캘린더 링크 클릭
  await page.getByRole('link', { name: '캘린더 보기' }).click();
  
  // 캘린더 페이지 확인
  await expect(page).toHaveURL('/calendar');
  await expect(page.getByRole('heading', { name: '📅 캘린더' })).toBeVisible();
}); 

import { test, expect } from '@playwright/test'
import { projects } from '../src/app/projects/projects'

const staticRoutes = [
  { path: '/', h1: 'John William Davis' },
  { path: '/projects', h1: 'Projects' },
  { path: '/about', h1: null },
  { path: '/interests', h1: null },
]

test.describe('routes render', () => {
  for (const route of staticRoutes) {
    test(`${route.path} renders its h1`, async ({ page }) => {
      await page.goto(route.path)
      const h1 = page.getByRole('heading', { level: 1 })
      await expect(h1).toBeVisible()
      if (route.h1) {
        await expect(h1).toHaveText(route.h1)
      }
    })
  }

  test('unknown project slug 404s', async ({ page }) => {
    const response = await page.goto('/projects/does-not-exist')
    expect(response?.status()).toBe(404)
  })
})

test.describe('projects data ↔ routes contract', () => {
  test('every card links to its detail page', async ({ page }) => {
    await page.goto('/projects')
    for (const project of projects) {
      await expect(
        page.locator(`a[href="/projects/${project.slug}"]`),
      ).toBeVisible()
    }
  })

  for (const project of projects) {
    test(`/projects/${project.slug} renders the case study`, async ({
      page,
    }) => {
      await page.goto(`/projects/${project.slug}`)
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(
        project.title,
      )
      await expect(
        page.getByRole('heading', { name: 'Why I built it' }),
      ).toBeVisible()
      await expect(
        page.getByRole('heading', { name: 'Key features' }),
      ).toBeVisible()

      if (project.github) {
        const github = page.getByRole('link', { name: 'View on GitHub' })
        await expect(github).toHaveAttribute('href', project.github)
        await expect(github).toHaveAttribute('rel', 'noopener noreferrer')
      }
      if (project.url) {
        const site = page.getByRole('link', { name: 'Visit App' })
        await expect(site).toHaveAttribute('href', project.url)
        await expect(site).toHaveAttribute('rel', 'noopener noreferrer')
      }
    })
  }
})

test.describe('theme toggle', () => {
  test.use({ colorScheme: 'light' })

  test('toggles between light and dark and persists across navigation', async ({
    page,
  }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Switch to dark theme' }).click()
    await expect(page.locator('html')).toHaveClass(/dark/)

    await page.goto('/about')
    await expect(page.locator('html')).toHaveClass(/dark/)

    await page.getByRole('button', { name: 'Switch to light theme' }).click()
    await expect(page.locator('html')).toHaveClass(/light/)
  })
})

test.describe('mobile drawer', () => {
  test.use({
    viewport: { width: 375, height: 740 },
    colorScheme: 'light',
  })

  test('opens, navigates, and closes', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Open menu' }).click()
    const drawer = page.locator('#mobile-menu')
    await expect(drawer).toBeVisible()

    await drawer.getByRole('link', { name: 'Projects' }).click()
    await expect(page).toHaveURL('/projects')
    await expect(drawer).not.toBeVisible()
  })

  test('changes the theme and closes', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Open menu' }).click()
    const drawer = page.locator('#mobile-menu')
    await expect(drawer).toBeVisible()

    await drawer
      .getByRole('button', { name: 'Switch to dark theme' })
      .click()
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(drawer).not.toBeVisible()
  })
})

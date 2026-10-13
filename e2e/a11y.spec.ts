import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { projects } from '../src/app/projects/projects'

const routes = [
  '/',
  '/about',
  '/interests',
  '/projects',
  ...projects.map((project) => `/projects/${project.slug}`),
]

const themes = ['light', 'dark'] as const

for (const theme of themes) {
  test.describe(`axe — ${theme} mode`, () => {
    test.use({ colorScheme: theme })

    for (const route of routes) {
      test(`${route} has no WCAG A/AA violations`, async ({ page }) => {
        // next-themes reads this key; forcing it avoids depending on the
        // system-theme default.
        await page.addInitScript((value) => {
          window.localStorage.setItem('theme', value)
        }, theme)

        await page.goto(route)
        // Let the entrance animations (max ~1.2s of delay + duration) finish
        // so axe doesn't scan mid-fade opacities.
        await page.waitForTimeout(1500)

        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze()

        expect(results.violations).toEqual([])
      })
    }

    test('/interests with a book expanded has no WCAG A/AA violations', async ({
      page,
    }) => {
      await page.addInitScript((value) => {
        window.localStorage.setItem('theme', value)
      }, theme)

      await page.goto('/interests')
      await page.waitForTimeout(1500)
      await page.getByRole('button', { name: /^Rules to Live By/ }).click()
      // notes fade in over ~350ms; wait so axe doesn't read a mid-fade color
      await page.waitForTimeout(600)

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      expect(results.violations).toEqual([])
    })
  })
}

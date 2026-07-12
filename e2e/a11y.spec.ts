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
  })
}

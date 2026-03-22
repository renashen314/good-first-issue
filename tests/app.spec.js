import { test, expect } from "@playwright/test";

test.describe("go to the page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://good-first-issue-wheat.vercel.app/");
  });

  test("shows the app title", async ({ page }) => {
    await expect(page.getByText("GitHub Issue Finder").first()).toBeVisible();
  });

  test("shows the refresh button", async ({ page }) => {
    await expect(page.getByRole("button", { name: /refresh/i })).toBeVisible();
  });

  test("shows label filter options", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "good first issue" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "help wanted" }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "bug" })).toBeVisible();
  });

  test("refresh button triggers refetch", async ({ page }) => {
    const refreshBtn = page.getByRole("button", { name: /refresh/i });

    const [request] = await Promise.all([
      page.waitForRequest("https://api.github.com/graphql"),
      refreshBtn.click(),
    ]);

    expect(request.method()).toBe("POST");
  });

  test("loads and displays issues", async ({ page }) => {
    // Wait for issues to load (they come from GitHub API)
    const issues = page.locator("main h3");
    await issues.first().waitFor({ timeout: 15000 });
  });

  test("pagination works", async ({ page }) => {
    const nextBtn = page.getByRole("button", { name: "Next" });
    const prevBtn = page.getByRole("button", { name: "Prev" });

    // Wait for issues to load before interacting with pagination
    await page.locator("main h3").first().waitFor({ timeout: 15000 });

    // Prev should be disabled on page 1
    await expect(prevBtn).toBeDisabled();
    await expect(page.getByText("Page 1")).toBeVisible();

    // Go to page 2
    const [request] = await Promise.all([
      page.waitForRequest("https://api.github.com/graphql"),
      nextBtn.click(),
    ]);
    expect(request.method()).toBe("POST");

    await page.locator("main h3").first().waitFor({ timeout: 15000 });
    await expect(page.getByText("Page 2")).toBeVisible();
    await expect(prevBtn).toBeEnabled();

    // Go back to page 1 (uses cache, no new request)
    await prevBtn.click();
    await expect(page.getByText("Page 1")).toBeVisible();
    await expect(prevBtn).toBeDisabled();
  });
});

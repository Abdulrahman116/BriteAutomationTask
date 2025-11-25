import { test, expect } from "@playwright/test";
import registerData from "../../../testData/registerData";
import { HomePage } from "../pages/homePage";

test.describe("Register tests", () => {

  registerData.forEach(({ name, email, password, department, phone, joinDate, testType }) => {

    test(`Register test → ${testType}`, async ({ page }) => {

      const homePage = new HomePage(page);

      await page.goto("https://Brite.com/Register");

      await homePage.register(
        name,
        email,
        password,
        department,
        phone,
        joinDate
      );

      // ============================
      //        ASSERTIONS
      // ============================

      switch (testType) {

        case "valid data":
          await expect(page.getByText("Employee created successfully"))
            .toBeVisible();
          break;

        case "missing name":
          await expect(page.getByText("Name is required"))
            .toBeVisible();
          break;

        case "invalid email format":
          await expect(page.getByText("Invalid email format"))
            .toBeVisible();
          break;

        default:
          console.warn(`No assertion defined for testType: ${testType}`);
      }

    });

  });

});

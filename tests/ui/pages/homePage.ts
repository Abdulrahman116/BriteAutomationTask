import { type Locator, type Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly phone: Locator;
    readonly department: Locator;
    readonly joinDate: Locator;
    readonly submit_btn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.name = page.getByPlaceholder('name');
        this.email = page.getByPlaceholder('email');
        this.password = page.getByPlaceholder('password');
        this.phone = page.getByPlaceholder('phone');
        this.department = page.getByPlaceholder('department');
        this.joinDate = page.getByPlaceholder('joining date');
        this.submit_btn = page.getByRole('button', { name: 'Submit' }); // adjust according to UI
    }

    async register(name: string, email: string, password: string, department: string,
                   phone: string, joinDate: string) {
        await this.name.fill(name);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.phone.fill(phone);
        await this.department.fill(department);
        await this.joinDate.fill(joinDate);

        await this.submit_btn.click();
    }
}

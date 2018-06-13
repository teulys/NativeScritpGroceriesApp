import { LoginComponent } from "./pages/login/login.component";
import { ListComponet } from "./pages/list/list.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "list", component: ListComponet }
];

export const navigatableComponents = [
    LoginComponent,
    ListComponet
];
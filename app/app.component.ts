import { Component } from "@angular/core";
import { User } from "./shared/user/user";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})
export class AppComponent {

  email = "teulys@gmail.com";
  isLoggingIn = true;
  user: User;
  
  constructor(private userService: UserService){
    this.user = new User();
    this.user.email = "teulys@gmail.com";
    this.user.password = "lopezthelma";
  }

  submit() {
    if (this.isLoggingIn){
      this.login();
    } else {
      this.singUp();
    }
  }

  toggleDisplay(){
    this.isLoggingIn = !this.isLoggingIn;
  }

  login(){
    //TODO: Define
  }

  singUp(){
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
    ;
  }
}
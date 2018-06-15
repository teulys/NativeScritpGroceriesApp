"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.email = "teulys@gmail.com";
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "teulys@gmail.com";
        this.user.password = "lopezthelma";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.singUp();
        }
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.singUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
        ;
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService],
            templateUrl: "./pages/login/login.html",
            styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQiwrQkFBOEI7QUFTOUI7SUFZSSx3QkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTHhGLFVBQUssR0FBRyxrQkFBa0IsQ0FBQztRQUMzQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUtmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQWRELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDakQsQ0FBQztJQWFELCtCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNuRCxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ2QsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7WUFDN0UsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDaEMsU0FBUyxDQUNWLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQS9CLENBQStCLEVBQ3JDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLCtDQUErQyxDQUFDLEVBQXRELENBQXNELENBQ2hFLENBQUM7SUFDTixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuQyxTQUFTLENBQ047WUFDQSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsc0RBQXNELENBQUMsRUFBN0QsQ0FBNkQsQ0FDdEUsQ0FBQztRQUNGLENBQUM7SUFDTCxDQUFDO0lBNUN1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBWSxpQkFBVTtxREFBQztJQVRyQyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDekUsQ0FBQzt5Q0FhOEIsZUFBTSxFQUF1QiwwQkFBVyxFQUFnQixXQUFJO09BWi9FLGNBQWMsQ0FzRDFCO0lBQUQscUJBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XG4gICAgfVxuXG4gICAgZW1haWwgPSBcInRldWx5c0BnbWFpbC5jb21cIjtcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgdXNlcjogVXNlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKXtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJ0ZXVseXNAZ21haWwuY29tXCI7XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwibG9wZXp0aGVsbWFcIjtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKXtcbiAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNpbmdVcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRGlzcGxheSgpe1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgICAgIGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb250YWluZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuaXNMb2dnaW5nSW4gPyBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSA6IG5ldyBDb2xvcihcIiMzMDEyMTdcIiksXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ2luKCl7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSksXG4gICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaW5nVXAoKXtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXG4gICAgICAgICk7XG4gICAgICAgIDtcbiAgICB9XG59Il19
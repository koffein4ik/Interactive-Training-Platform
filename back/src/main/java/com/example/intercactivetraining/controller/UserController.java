package com.example.intercactivetraining.controller;

import com.example.intercactivetraining.model.ResponseViewModel;
import com.example.intercactivetraining.model.UsersEntity;
import com.example.intercactivetraining.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://itp.com:4200")
@RequestMapping("/api/user")
public class UserController {

    public UserController(UserService userService) {
        this.userService = userService;
    }

    UserService userService;

    @PostMapping("regNewUser")
    public ResponseViewModel regNewUser(@RequestBody UsersEntity user) {
        return this.userService.saveUser(user);
    }
}

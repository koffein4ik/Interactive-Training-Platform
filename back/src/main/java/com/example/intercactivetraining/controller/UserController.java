package com.example.intercactivetraining.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/user")
@CrossOrigin(origins = "http://itp.com:4200")
public class UserController {

}

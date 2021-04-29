package com.example.intercactivetraining.controller;

import com.example.intercactivetraining.model.LoginData;
import com.example.intercactivetraining.security.TokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/authentication")
public class AuthenticationController {
    public AuthenticationController(AuthenticationManager authenticationManager, TokenProvider tokenProvider) {
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
    }

    private AuthenticationManager authenticationManager;

    private TokenProvider tokenProvider;

    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ResponseEntity generateToken(@RequestBody LoginData loginData, HttpServletResponse httpServletResponse) {
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginData.getLogin(), loginData.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String token = tokenProvider.generateToken(authentication);
        Cookie authCookie = new Cookie("Authorization", token);
        httpServletResponse.addCookie(authCookie);
        return ResponseEntity.ok("");
    }
}

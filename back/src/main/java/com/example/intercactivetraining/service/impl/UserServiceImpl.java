package com.example.intercactivetraining.service.impl;

import com.example.intercactivetraining.repository.UserRepository;
import com.example.intercactivetraining.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public int getUserId() {
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByLogin(userName).getId();
    }
}

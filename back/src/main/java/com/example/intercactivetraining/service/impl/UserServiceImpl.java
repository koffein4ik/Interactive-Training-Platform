package com.example.intercactivetraining.service.impl;

import com.example.intercactivetraining.model.ResponseViewModel;
import com.example.intercactivetraining.model.UsersEntity;
import com.example.intercactivetraining.repository.UserRepository;
import com.example.intercactivetraining.service.UserService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService {

    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public int getUserId() {
        String userName = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByLogin(userName).getId();
    }

    @Override
    public ResponseViewModel saveUser(UsersEntity usersEntity) {
        ResponseViewModel responseViewModel = new ResponseViewModel();
        if (checkIfUserAlreadyExist(usersEntity)) {
            responseViewModel.setErrorOccurred(true);
            responseViewModel.setErrorMessage("User with such login or email already exists");
        } else {
            usersEntity.setPassword(bCryptPasswordEncoder.encode(usersEntity.getPassword()));
            userRepository.save(usersEntity);
        }
        return responseViewModel;
    }

    private boolean checkIfUserAlreadyExist(UsersEntity usersEntity) {
        UsersEntity user = userRepository.findByLoginOrEmail(usersEntity.getLogin(), usersEntity.getEmail());
        return user != null;
    }
}

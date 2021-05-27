package com.example.intercactivetraining.service.impl;

import com.example.intercactivetraining.model.ResponseViewModel;
import com.example.intercactivetraining.model.UserEntity;
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
    public ResponseViewModel saveUser(UserEntity userEntity) {
        ResponseViewModel responseViewModel = new ResponseViewModel();
        if (checkIfUserAlreadyExist(userEntity)) {
            responseViewModel.setErrorOccurred(true);
            responseViewModel.setErrorMessage("User with such login or email already exists");
        } else {
            userEntity.setPassword(bCryptPasswordEncoder.encode(userEntity.getPassword()));
            userRepository.save(userEntity);
        }
        return responseViewModel;
    }

    @Override
    public UserEntity findUserById(int userId) {
        return userRepository.findById(userId).orElse(null);
    }

    private boolean checkIfUserAlreadyExist(UserEntity userEntity) {
        UserEntity user = userRepository.findByLoginOrEmail(userEntity.getLogin(), userEntity.getEmail());
        return user != null;
    }
}

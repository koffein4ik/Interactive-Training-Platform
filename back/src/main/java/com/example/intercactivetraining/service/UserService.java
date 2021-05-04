package com.example.intercactivetraining.service;

import com.example.intercactivetraining.model.ResponseViewModel;
import com.example.intercactivetraining.model.UserEntity;

public interface UserService {
    int getUserId();
    ResponseViewModel saveUser(UserEntity userEntity);
}

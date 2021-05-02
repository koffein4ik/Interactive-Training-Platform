package com.example.intercactivetraining.service;

import com.example.intercactivetraining.model.ResponseViewModel;
import com.example.intercactivetraining.model.UsersEntity;

public interface UserService {
    int getUserId();
    ResponseViewModel saveUser(UsersEntity usersEntity);
}

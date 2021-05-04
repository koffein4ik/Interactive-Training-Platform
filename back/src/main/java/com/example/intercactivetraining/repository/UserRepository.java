package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.UserEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<UserEntity, Integer> {
    UserEntity findByLogin(String login);
    UserEntity findByLoginOrEmail(String login, String email);
}

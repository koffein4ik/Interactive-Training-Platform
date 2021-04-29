package com.example.intercactivetraining.repository;

import com.example.intercactivetraining.model.UsersEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<UsersEntity, Integer> {
    UsersEntity findByLogin(String login);
}

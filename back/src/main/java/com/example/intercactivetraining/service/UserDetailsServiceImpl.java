package com.example.intercactivetraining.service;

import com.example.intercactivetraining.model.UsersEntity;
import com.example.intercactivetraining.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashSet;
import java.util.Set;

@Service("customUserDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    public UserDetailsServiceImpl(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UsersEntity userEntity = findByLogin(username);
        if (userEntity == null) {
            throw  new UsernameNotFoundException("Invalid username or password");
        }
        return new User(userEntity.getLogin(), userEntity.getPassowrd(), getAuthority());
    }

    private UsersEntity findByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    private Set<SimpleGrantedAuthority> getAuthority() {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + "USER"));
        return authorities;
    }
}

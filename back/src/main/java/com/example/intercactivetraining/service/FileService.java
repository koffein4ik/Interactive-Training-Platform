package com.example.intercactivetraining.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileService {
    String uploadFile(MultipartFile multipartFile, String folderName) throws IOException;

    byte[] getFile(String folderName, String fileName);
}

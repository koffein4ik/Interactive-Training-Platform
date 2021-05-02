package com.example.intercactivetraining.service.impl;

import com.example.intercactivetraining.service.FileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.RandomAccessFile;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService {

    private static final String BASE_FOLDER_PATH = "back/src/main/resources/";
    private static final String BASE_SERVER_PATH = "http://itp.com:8080/";

    @Override
    public String uploadFile(MultipartFile multipartFile, String folderName) throws IOException {
        UUID uuid = UUID.randomUUID();
        String filePath = BASE_FOLDER_PATH + folderName;
        File file = new File(filePath);
        if (file.exists()) {
            Path savePath = Paths.get(filePath + uuid.toString());
            try (OutputStream os = Files.newOutputStream(savePath)) {
                os.write(multipartFile.getBytes());
            }
            return BASE_SERVER_PATH + "api/file/getCourseContent/" + uuid.toString();
        }
        return null;
    }

    @Override
    public byte[] getFile(String folderName, String fileName) {
        String filePath = BASE_FOLDER_PATH + folderName + "/" + fileName;
        File file = new File(filePath);
        byte[] byteArray;
        try {
            if (file.exists()) {
                RandomAccessFile randomAccessFile = new RandomAccessFile(filePath, "r");
                byteArray = new byte[(int) file.length()];
                randomAccessFile.readFully(byteArray);
            } else {
                return new byte[0];
            }
            return byteArray;
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        return new byte[0];
    }
}

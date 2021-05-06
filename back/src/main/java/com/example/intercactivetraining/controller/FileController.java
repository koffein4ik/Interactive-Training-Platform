package com.example.intercactivetraining.controller;

import com.example.intercactivetraining.service.FileService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://itp.com:4200")
@RequestMapping("/api/file")
public class FileController {
    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    private final FileService fileService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping(value = "/uploadCourseContentFile", headers = {"content-type=multipart/form-data"})
    public String uploadCourseContentFile(@RequestParam("fileKey") MultipartFile file) {
        try {
            return fileService.uploadFile(file, "course-content/");
        } catch (IOException exception) {
            return null;
        }
    }

    @GetMapping(value = "/getCourseContent/{fileName}")
    public ResponseEntity<byte[]> getFile(@PathVariable(name="fileName") String fileName) {
        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(fileService.getFile("course-content", fileName));
    }
}

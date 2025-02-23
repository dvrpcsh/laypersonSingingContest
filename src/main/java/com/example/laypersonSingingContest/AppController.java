package com.example.laypersonSingingContest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
public class AppController {

    @GetMapping("/")
    public ResponseEntity<String> home() {

        Random random = new Random();
        
        return ResponseEntity.ok(""+random.nextInt());
    }
}
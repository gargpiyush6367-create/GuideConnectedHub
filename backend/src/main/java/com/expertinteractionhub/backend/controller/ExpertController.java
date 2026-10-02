package com.expertinteractionhub.backend.controller;

import com.expertinteractionhub.backend.entity.Expert;
import com.expertinteractionhub.backend.service.ExpertService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/experts")
@CrossOrigin(origins = "*")


public class ExpertController {
    private final ExpertService expertService;

    public ExpertController(ExpertService expertService)
    {
        this.expertService = expertService;
    }

    @PostMapping
    public Expert registerExpert(@RequestBody Expert expert)
    {
        return expertService.saveExpert(expert);
    }

    @GetMapping
    public List<Expert> getAllExperts()
    {
        return expertService.getAllExperts();
    }

    @GetMapping("/{id}")
    public Expert getExpertById(@PathVariable Long id)
    {
        return expertService.getExpertById(id);
    }
}

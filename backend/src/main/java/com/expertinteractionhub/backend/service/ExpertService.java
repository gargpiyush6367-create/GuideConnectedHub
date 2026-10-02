package com.expertinteractionhub.backend.service;

import com.expertinteractionhub.backend.entity.Expert;
import com.expertinteractionhub.backend.repository.ExpertRepository;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ExpertService {

    private final ExpertRepository expertRepository;

    public ExpertService(ExpertRepository expertRepository)
    {
        this.expertRepository = expertRepository;
    }

    public Expert saveExpert(Expert expert)
    {
        return expertRepository.save(expert);
    }

    public List<Expert> getAllExperts()
    {
        return expertRepository.findAll();
    }

    public Expert getExpertById(Long  id)
    {
        return expertRepository.findById(id).orElse(null);

    }
}

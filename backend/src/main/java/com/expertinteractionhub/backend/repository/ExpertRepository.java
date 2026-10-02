package com.expertinteractionhub.backend.repository;

import com.expertinteractionhub.backend.entity.Expert;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ExpertRepository extends JpaRepository<Expert , Long>{
}

package com.expertinteractionhub.backend.repository;

import com.expertinteractionhub.backend.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking ,Long> {


}

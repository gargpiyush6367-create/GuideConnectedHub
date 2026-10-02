package com.expertinteractionhub.backend.service;
import com.expertinteractionhub.backend.entity.Booking;
import com.expertinteractionhub.backend.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository)
    {
        this.bookingRepository = bookingRepository;
    }

    public Booking saveBooking(Booking booking)
    {
        return bookingRepository.save(booking);
    }

    public List<Booking>  getAllBookings()
    {
        return bookingRepository.findAll();
    }
    public Booking getBookingById(Long id)
    {
        return bookingRepository.findById(id).orElse(null);
    }
}

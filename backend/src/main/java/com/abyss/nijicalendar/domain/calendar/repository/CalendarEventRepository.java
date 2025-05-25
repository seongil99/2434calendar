package com.abyss.nijicalendar.domain.calendar.repository;

import com.abyss.nijicalendar.domain.calendar.entity.CalendarEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.ZonedDateTime;
import java.util.List;

@Repository
public interface CalendarEventRepository extends JpaRepository<CalendarEvent, Long> {
    
    List<CalendarEvent> findByStartedAtBetween(ZonedDateTime start, ZonedDateTime end);
    
    List<CalendarEvent> findByAnnouncedAtIsNotNull();
}

package com.abyss.nijicalendar.domain.calendar.dao;

import com.abyss.nijicalendar.domain.calendar.dto.CalendarEventDto;
import com.abyss.nijicalendar.domain.calendar.entity.CalendarEvent;
import com.abyss.nijicalendar.domain.calendar.repository.CalendarEventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class CalendarEventDao {
    
    private final CalendarEventRepository calendarEventRepository;
    
    @Transactional(readOnly = true)
    public List<CalendarEventDto> findAll() {
        return calendarEventRepository.findAll().stream()
                .map(CalendarEventDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public Optional<CalendarEventDto> findById(Long id) {
        return calendarEventRepository.findById(id)
                .map(CalendarEventDto::fromEntity);
    }
    
    @Transactional(readOnly = true)
    public List<CalendarEventDto> findByDateRange(ZonedDateTime start, ZonedDateTime end) {
        return calendarEventRepository.findByStartedAtBetween(start, end).stream()
                .map(CalendarEventDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    @Transactional
    public CalendarEventDto save(CalendarEventDto eventDto) {
        CalendarEvent event = eventDto.toEntity();
        return CalendarEventDto.fromEntity(calendarEventRepository.save(event));
    }
    
    @Transactional
    public void deleteById(Long id) {
        calendarEventRepository.deleteById(id);
    }
}

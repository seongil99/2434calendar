package com.abyss.nijicalendar.domain.notification.dao;

import com.abyss.nijicalendar.domain.calendar.entity.CalendarEvent;
import com.abyss.nijicalendar.domain.calendar.repository.CalendarEventRepository;
import com.abyss.nijicalendar.domain.company.entity.Company;
import com.abyss.nijicalendar.domain.company.repository.CompanyRepository;
import com.abyss.nijicalendar.domain.notification.dto.NotificationDto;
import com.abyss.nijicalendar.domain.notification.entity.Notification;
import com.abyss.nijicalendar.domain.notification.entity.NotificationId;
import com.abyss.nijicalendar.domain.notification.entity.NotificationSource;
import com.abyss.nijicalendar.domain.notification.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class NotificationDao {
    
    private final NotificationRepository notificationRepository;
    private final CompanyRepository companyRepository;
    private final CalendarEventRepository eventRepository;
    
    @Transactional(readOnly = true)
    public List<NotificationDto> findAll() {
        return notificationRepository.findAll().stream()
                .map(NotificationDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public Optional<NotificationDto> findById(Long id, Long companyId) {
        return notificationRepository.findById(new NotificationId(id, companyId))
                .map(NotificationDto::fromEntity);
    }
    
    @Transactional(readOnly = true)
    public List<NotificationDto> findByCompanyId(Long companyId) {
        Optional<Company> companyOptional = companyRepository.findById(companyId);
        if (companyOptional.isEmpty()) {
            return List.of();
        }
        
        return notificationRepository.findByCompany(companyOptional.get()).stream()
                .map(NotificationDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<NotificationDto> findByEventId(Long eventId) {
        Optional<CalendarEvent> eventOptional = eventRepository.findById(eventId);
        if (eventOptional.isEmpty()) {
            return List.of();
        }
        
        return notificationRepository.findByEvent(eventOptional.get()).stream()
                .map(NotificationDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<NotificationDto> findBySource(NotificationSource source) {
        return notificationRepository.findBySource(source).stream()
                .map(NotificationDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<NotificationDto> findByDateRange(ZonedDateTime start, ZonedDateTime end) {
        return notificationRepository.findByReceivedAtBetween(start, end).stream()
                .map(NotificationDto::fromEntity)
                .collect(Collectors.toList());
    }
    
    @Transactional
    public NotificationDto save(NotificationDto notificationDto) {
        Optional<Company> companyOptional = companyRepository.findById(notificationDto.getCompanyId());
        if (companyOptional.isEmpty()) {
            throw new IllegalArgumentException("Company with id " + notificationDto.getCompanyId() + " not found");
        }
        
        // 다대다 관계에 맞게 이벤트 ID 리스트로 처리
        List<CalendarEvent> events = new ArrayList<>();
        if (notificationDto.getEventIds() != null && !notificationDto.getEventIds().isEmpty()) {
            for (Long eventId : notificationDto.getEventIds()) {
                eventRepository.findById(eventId).ifPresent(events::add);
            }
        }
        
        Notification notification = notificationDto.toEntity(companyOptional.get(), events);
        return NotificationDto.fromEntity(notificationRepository.save(notification));
    }
    
    @Transactional
    public void deleteById(Long id, Long companyId) {
        notificationRepository.deleteById(new NotificationId(id, companyId));
    }
}

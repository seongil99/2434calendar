package com.abyss.nijicalendar.domain.notification.repository;

import com.abyss.nijicalendar.domain.calendar.entity.CalendarEvent;
import com.abyss.nijicalendar.domain.company.entity.Company;
import com.abyss.nijicalendar.domain.notification.entity.Notification;
import com.abyss.nijicalendar.domain.notification.entity.NotificationId;
import com.abyss.nijicalendar.domain.notification.entity.NotificationSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, NotificationId> {
    
    List<Notification> findByCompany(Company company);
    
    List<Notification> findByEvent(CalendarEvent event);
    
    List<Notification> findBySource(NotificationSource source);
    
    List<Notification> findByReceivedAtBetween(ZonedDateTime start, ZonedDateTime end);
    
    Optional<Notification> findByExternalId(String externalId);
}

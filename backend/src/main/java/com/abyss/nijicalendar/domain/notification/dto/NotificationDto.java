package com.abyss.nijicalendar.domain.notification.dto;

import com.abyss.nijicalendar.domain.calendar.entity.CalendarEvent;
import com.abyss.nijicalendar.domain.company.entity.Company;
import com.abyss.nijicalendar.domain.notification.entity.Notification;
import com.abyss.nijicalendar.domain.notification.entity.NotificationSource;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NotificationDto {
    private Long id;
    private Long companyId;
    private String companyName;
    private List<Long> eventIds;  // 다수의 이벤트 ID를 저장
    private String externalId;
    private NotificationSource source;
    private ZonedDateTime receivedAt;

    public static NotificationDto fromEntity(Notification notification) {
        return NotificationDto.builder()
                .id(notification.getId())
                .companyId(notification.getCompany().getId())
                .companyName(notification.getCompany().getName())
                .eventIds(notification.getEvents().stream()
                        .map(CalendarEvent::getId)
                        .collect(Collectors.toList()))
                .externalId(notification.getExternalId())
                .source(notification.getSource())
                .receivedAt(notification.getReceivedAt())
                .build();
    }

    public Notification toEntity(Company company, List<CalendarEvent> events) {

        return Notification.builder()
                .id(id)
                .company(company)
                .externalId(externalId)
                .source(source)
                .receivedAt(receivedAt)
                .events(new HashSet<>(events))
                .build();
    }
}

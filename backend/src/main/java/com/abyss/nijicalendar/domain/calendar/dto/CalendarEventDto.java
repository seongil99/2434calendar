package com.abyss.nijicalendar.domain.calendar.dto;

import com.abyss.nijicalendar.domain.calendar.entity.CalendarEvent;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Point;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CalendarEventDto {
    private Long id;
    private List<Long> notificationIds; // 여러 알림을 가질 수 있도록 변경
    private ZonedDateTime startedAt;
    private ZonedDateTime endAt;
    private Point location;
    private String address;
    private String metadata;
    private ZonedDateTime announcedAt;

    public static CalendarEventDto fromEntity(CalendarEvent event) {
        return CalendarEventDto.builder()
                .id(event.getId())
                .notificationIds(event.getNotifications().stream()
                        .map(notification -> notification.getId())
                        .collect(Collectors.toList()))
                .startedAt(event.getStartedAt())
                .endAt(event.getEndAt())
                .location(event.getLocation())
                .address(event.getAddress())
                .metadata(event.getMetadata())
                .announcedAt(event.getAnnouncedAt())
                .build();
    }

    public CalendarEvent toEntity() {
        return CalendarEvent.builder()
                .id(id)
                .startedAt(startedAt)
                .endAt(endAt)
                .location(location)
                .address(address)
                .metadata(metadata)
                .announcedAt(announcedAt)
                .build();
    }
}

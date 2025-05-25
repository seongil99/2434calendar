package com.abyss.nijicalendar.domain.calendar.entity;

import com.abyss.nijicalendar.domain.notification.entity.Notification;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Point;

import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "calendar_events")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CalendarEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "notification_id")
    private Long notificationId;

    @Column(name = "started_at", nullable = false)
    private ZonedDateTime startedAt;

    @Column(name = "end_at")
    private ZonedDateTime endAt;

    @Column(columnDefinition = "GEOMETRY(POINT,4326)")
    private Point location;

    private String address;

    @Column(nullable = false, columnDefinition = "JSONB DEFAULT '{}'")
    private String metadata;

    @Column(name = "announced_at")
    private ZonedDateTime announcedAt;

//    이건 필요하면 추가
//    @OneToMany(mappedBy = "event")
//    private Set<EventTranslation> translations = new HashSet<>();
//
//    @OneToMany(mappedBy = "event")
//    private Set<EventMember> eventMembers = new HashSet<>();
//
//    @OneToMany(mappedBy = "event")
//    private Set<Notification> notifications = new HashSet<>();
}

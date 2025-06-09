package com.abyss.nijicalendar.domain.notification.entity;

import com.abyss.nijicalendar.domain.calendar.entity.CalendarEvent;
import com.abyss.nijicalendar.domain.company.entity.Company;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "notifications")
@IdClass(NotificationId.class)
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Id
    @ManyToOne
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    @ManyToMany
    @JoinTable(
        name = "notification_events",
        joinColumns = {
            @JoinColumn(name = "notification_id", referencedColumnName = "id"),
            @JoinColumn(name = "company_id", referencedColumnName = "company_id")
        },
        inverseJoinColumns = @JoinColumn(name = "event_id")
    )
    private Set<CalendarEvent> events = new HashSet<>();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NotificationSource source;

    @Column(nullable = false, name = "received_at")
    private ZonedDateTime receivedAt;

    @OneToMany(mappedBy = "notification", cascade = CascadeType.ALL)
    private Set<NotificationTranslation> translations = new HashSet<>();

    @OneToMany(mappedBy = "notification", cascade = CascadeType.ALL)
    private Set<ExternalUrl> externalUrls = new HashSet<>();
}

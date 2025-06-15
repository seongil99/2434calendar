import React, { useState } from 'react';
import { Calendar, momentLocalizer, type View } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// 샘플 이벤트 데이터
const events = [
  {
    id: '1',
    title: '중요한 회의',
    start: new Date(2024, 11, 15, 10, 0, 0),
    end: new Date(2024, 11, 15, 11, 0, 0),
  },
  {
    id: '2',
    title: '점심 약속',
    start: new Date(2024, 11, 16, 12, 0, 0),
    end: new Date(2024, 11, 16, 13, 30, 0),
  },
  {
    id: '3',
    title: '프로젝트 마감',
    start: new Date(2024, 11, 20, 9, 0, 0),
    end: new Date(2024, 11, 20, 18, 0, 0),
  },
];

export function meta() {
  return [
    { title: "캘린더" },
    { name: "description", content: "일정 관리 캘린더" },
  ];
}

export default function CalendarPage() {
  const [currentView, setCurrentView] = useState<View>('month');
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSelectEvent = (event: any) => {
    alert(`선택된 이벤트: ${event.title}`);
  };

  const handleSelectSlot = (slotInfo: any) => {
    const title = window.prompt('새 이벤트 제목을 입력하세요:');
    if (title) {
      // 실제 앱에서는 여기서 이벤트를 추가하는 로직을 구현
      alert(`"${title}" 이벤트가 ${slotInfo.start}에 추가됩니다.`);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            📅 캘린더
          </h1>
          <p className="text-gray-600">
            일정을 관리하고 새로운 이벤트를 추가하세요.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {moment(currentDate).format('YYYY년 MMMM')}
            </h2>
            
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentView('month')}
                className={`px-3 py-1 rounded ${
                  currentView === 'month'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                월
              </button>
              <button
                onClick={() => setCurrentView('week')}
                className={`px-3 py-1 rounded ${
                  currentView === 'week'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                주
              </button>
              <button
                onClick={() => setCurrentView('day')}
                className={`px-3 py-1 rounded ${
                  currentView === 'day'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                일
              </button>
            </div>
          </div>

          <div style={{ height: '600px' }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              selectable
              view={currentView}
              onView={setCurrentView}
              date={currentDate}
              onNavigate={setCurrentDate}
              style={{ 
                height: '100%',
                fontSize: '14px'
              }}
              messages={{
                next: "다음",
                previous: "이전",
                today: "오늘",
                month: "월",
                week: "주",
                day: "일",
                agenda: "일정",
                date: "날짜",
                time: "시간",
                event: "이벤트",
                noEventsInRange: "이 기간에는 이벤트가 없습니다.",
                showMore: (total) => `+${total} 더보기`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 

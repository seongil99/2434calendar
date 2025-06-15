import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "홈 - React Router 앱" },
    { name: "description", content: "React Router 기반 애플리케이션" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 헤더 */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🚀 React Router 앱
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            React Router를 사용한 모던 웹 애플리케이션입니다.
            다양한 기능들을 탐색해보세요!
          </p>
        </header>

        {/* 기능 카드들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              캘린더
            </h3>
            <p className="text-gray-600 mb-6">
              일정을 관리하고 이벤트를 추가할 수 있는 인터랙티브 캘린더입니다.
            </p>
            <Link
              to="/calendar"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
            >
              캘린더 보기
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              할 일 관리
            </h3>
            <p className="text-gray-600 mb-6">
              작업을 체계적으로 관리하고 완료 상태를 추적할 수 있습니다.
            </p>
            <button className="inline-block bg-gray-300 text-gray-700 px-6 py-3 rounded-lg cursor-not-allowed font-medium">
              준비 중
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              대시보드
            </h3>
            <p className="text-gray-600 mb-6">
              데이터를 시각화하고 인사이트를 얻을 수 있는 대시보드입니다.
            </p>
            <button className="inline-block bg-gray-300 text-gray-700 px-6 py-3 rounded-lg cursor-not-allowed font-medium">
              준비 중
            </button>
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            기술 스택
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">⚛️</div>
              <div className="font-medium text-gray-900">React</div>
              <div className="text-sm text-gray-600">v19.1.0</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🗂️</div>
              <div className="font-medium text-gray-900">React Router</div>
              <div className="text-sm text-gray-600">v7.5.3</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-medium text-gray-900">Tailwind CSS</div>
              <div className="text-sm text-gray-600">v4.1.4</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📦</div>
              <div className="font-medium text-gray-900">Bun</div>
              <div className="text-sm text-gray-600">패키지 매니저</div>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <footer className="text-center mt-16 text-gray-600">
          <p>© 2024 React Router 앱. 모든 권리 보유.</p>
        </footer>
      </div>
    </div>
  );
}

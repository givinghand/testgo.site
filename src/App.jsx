
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LandingPage } from "@/pages/LandingPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { TestSelectionPage } from "@/pages/TestSelectionPage";
import { StudyTopicsPage } from "@/pages/StudyTopicsPage";
import { TopicDetailPage } from "@/pages/TopicDetailPage";
import { TopicsListPage } from "@/pages/TopicsListPage"; 
import { BlogPage } from "@/pages/BlogPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { UserStatusPage } from "@/pages/UserStatusPage";
import { ExamPage } from "@/pages/ExamPage";
import { TestPage } from "@/pages/TestPage";
import { AboutPage } from "@/pages/AboutPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { ContactPage } from "@/pages/ContactPage";
import { FaqPage } from "@/pages/FaqPage";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext"; 
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const showFooter = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/giris" element={<LoginPage />} />
          <Route path="/uye-ol" element={<RegisterPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
          
          <Route path="/test-coz" element={<TestSelectionPage />} />
          <Route path="/konular/:examId/:subjectId" element={<TopicsListPage />} />
          <Route path="/konular/:examId/:subExamId/:subjectId" element={<TopicsListPage />} />
          <Route path="/test-coz/:examId/:subjectId/:topicId" element={<TestPage />} />
          <Route path="/test-coz/:examId/:subExamId/:subjectId/:topicId" element={<TestPage />} />

          <Route path="/deneme/:examId/:subjectId?/:topicId?" element={<TestPage />} />
          
          <Route path="/konu-calis" element={<StudyTopicsPage />} />
          <Route path="/konu-calis/:examId/:subjectId/:topicId" element={<TopicDetailPage />} />
          <Route path="/konu-calis/:examId/:subExamId/:subjectId/:topicId" element={<TopicDetailPage />} />
          
          <Route path="/durumum" element={<UserStatusPage />} />
          <Route path="/denemeler" element={<ExamPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/kvkk-gizlilik" element={<PrivacyPolicyPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/sss" element={<FaqPage />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;

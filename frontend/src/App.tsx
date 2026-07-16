import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layouts/MainLayout';
import { Dashboard } from '@/pages/Dashboard';
import { SpaceTraffic } from '@/pages/SpaceTraffic';
import { Satellites } from '@/pages/Satellites';
import { Debris } from '@/pages/Debris';
import { CollisionCenter } from '@/pages/CollisionCenter';
import { AIAgents } from '@/pages/AIAgents';
import { MissionPlanner } from '@/pages/MissionPlanner';
import { Settings } from '@/pages/Settings';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
    <Toaster 
      toastOptions={{ 
        className: "!glass-panel !bg-surface-container/90 !rounded-none !text-md !font-bold !text-primary-container !border-1",
        classNames: {
          toast: "!text-primary-container !border-border-panel",
          success: "!text-status-success !border-status-success",
          warning: "!text-status-warning !border-status-warning",
          error: "!text-status-emergency !border-status-emergency",
        } 
        }} 
      position="top-right" 
      offset={{ top: '4em', right: "16px", left: "16px" }} 
       />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="space-traffic" element={<SpaceTraffic />} />
          <Route path="satellites" element={<Satellites />} />
          <Route path="debris" element={<Debris />} />
          <Route path="collision-center" element={<CollisionCenter />} />
          <Route path="ai-agents" element={<AIAgents />} />
          <Route path="mission-planner" element={<MissionPlanner />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

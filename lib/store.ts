
import create from 'zustand';

interface TabState {
  activeTab: 'events' | 'collection';
  setActiveTab: (tab: 'events' | 'collection') => void;
}

const useTabStore = create<TabState>((set) => ({
  activeTab: 'events',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useTabStore;

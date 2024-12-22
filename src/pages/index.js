import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ChatInterface from '../components/chat/ChatInterface';
import LeaderboardSection from '../components/leaderboard/LeaderboardSection';
import DegenWordsBackground from '../components/effects/DegenWordsBackground';
import TabButton from '../components/shared/TabButton';

const Home = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  return (
    <div className="relative min-h-screen flex flex-col text-white bg-black">
      <DegenWordsBackground />
      <Header />
      
      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex gap-4 justify-center lg:justify-start">
                <TabButton 
                  active={activeTab === 'submit'} 
                  onClick={() => setActiveTab('submit')}
                >
                  RANK MY STORY
                </TabButton>
                <TabButton 
                  active={activeTab === 'vote'} 
                  onClick={() => setActiveTab('vote')}
                >
                  READ & VOTE
                </TabButton>
              </div>

              <ChatInterface
                messages={messages}
                currentMessage={message}
                setCurrentMessage={setMessage}
                activeTab={activeTab}
                onSubmit={(msg) => {
                  setMessages([...messages, { message: msg, isAI: false }]);
                  setMessage('');
                }}
              />
            </div>
            
            <div className="lg:col-span-1">
              <LeaderboardSection 
                stories={[
                  {
                    username: "DegenKing",
                    score: 98,
                    preview: "Lost 100k on a jpeg, made it back on..."
                  },
                  {
                    username: "SolanaWhale",
                    score: 92,
                    preview: "Aped into a random coin because..."
                  },
                  {
                    username: "MoonBoy",
                    score: 87,
                    preview: "Traded my house for NFTs and..."
                  }
                ]} 
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
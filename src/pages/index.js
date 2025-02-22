import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>DeepBrain.Space - AI Voice Agents</title>
        <meta name="description" content="Transform customer service with AI voice agents" />
      </Head>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Customer Service with AI Voice Agents
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automate customer interactions with intelligent AI voice agents that understand context, handle complex conversations, and deliver exceptional service 24/7.
            </p>
            <div className="flex gap-4">
              <button 
                type="button"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Try Live Demo
              </button>
              <button
                type="button" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex flex-col gap-6">
              <ChatMessage 
                isAI={true}
                message="Hello! I'm your AI voice assistant. How can I help you today?"
              />
              <ChatMessage 
                isAI={false}
                message="I'd like to know more about your business hours and services."
              />
              <ChatMessage 
                isAI={true}
                message="We're open 24/7! Our services include customer support, sales assistance, and appointment scheduling. What specific service are you interested in?"
              />
              
              <button
                type="button"
                className="self-end bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Try it yourself →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Natural Conversations"
              description="AI agents that understand context and engage in natural, human-like conversations"
              icon="/img/chat-icon.svg"
            />
            <FeatureCard
              title="24/7 Availability"
              description="Provide consistent customer service around the clock without breaks"
              icon="/img/clock-icon.svg"
            />
            <FeatureCard
              title="Seamless Integration"
              description="Easily integrate with your existing systems and workflows"
              icon="/img/integration-icon.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatMessage({ isAI, message }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-10 h-10 ${isAI ? 'bg-blue-100' : 'bg-gray-100'} rounded-full flex items-center justify-center`}>
        <img 
          src={isAI ? "/img/ai-icon.svg" : "/img/user-icon.svg"} 
          alt={isAI ? "AI" : "User"} 
          className="w-6 h-6" 
        />
      </div>
      <div>
        <p className={isAI ? "text-gray-900 font-medium" : "text-gray-600"}>
          {message}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 
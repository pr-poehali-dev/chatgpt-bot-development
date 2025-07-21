import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Привет! Я ИИ-ассистент. Как дела?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const newMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Имитация ответа бота
    setTimeout(() => {
      const botResponses = [
        'Отличный вопрос! Я могу помочь вам с разработкой чат-ботов.',
        'Наша платформа поддерживает интеграцию с ChatGPT API.',
        'Мы предлагаем готовые решения для бизнеса любого масштаба.',
        'Хотите узнать больше о наших технологиях?'
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { role: 'bot', content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Bot" size={32} className="text-blue-600" />
              <span className="text-xl font-semibold text-slate-900">AI ChatBot Platform</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">О проекте</a>
              <a href="#tech" className="text-slate-600 hover:text-blue-600 transition-colors">Технологии</a>
              <a href="#demo" className="text-slate-600 hover:text-blue-600 transition-colors">Демо</a>
              <a href="#docs" className="text-slate-600 hover:text-blue-600 transition-colors">Документация</a>
              <a href="#api" className="text-slate-600 hover:text-blue-600 transition-colors">API</a>
              <a href="#team" className="text-slate-600 hover:text-blue-600 transition-colors">Команда</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Попробовать</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Создавайте умных <span className="text-blue-400">ИИ чат-ботов</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Профессиональная платформа для разработки и развертывания чат-ботов на базе ChatGPT. 
            Быстро, надежно, масштабируемо.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-slate-400 text-slate-300 hover:bg-slate-800">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">О проекте</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мы создаем передовые решения для интеграции ИИ в бизнес-процессы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Zap" size={48} className="text-yellow-500 mb-4" />
                <CardTitle>Быстрое развертывание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Запускайте чат-ботов за минуты, а не недели. 
                  Готовые шаблоны и простая интеграция.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-green-500 mb-4" />
                <CardTitle>Enterprise-уровень</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Безопасность, масштабируемость и надежность 
                  для корпоративных решений.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Settings" size={48} className="text-blue-500 mb-4" />
                <CardTitle>Полная настройка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Гибкие настройки поведения, персонализация 
                  и интеграция с любыми системами.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Технологии</h2>
            <p className="text-xl text-slate-600">Современный стек для максимальной производительности</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'ChatGPT API', icon: 'MessageSquare', color: 'bg-green-100 text-green-700' },
              { name: 'Node.js', icon: 'Server', color: 'bg-green-100 text-green-700' },
              { name: 'React', icon: 'Code', color: 'bg-blue-100 text-blue-700' },
              { name: 'TypeScript', icon: 'FileCode', color: 'bg-blue-100 text-blue-700' },
              { name: 'Docker', icon: 'Package', color: 'bg-purple-100 text-purple-700' },
              { name: 'Redis', icon: 'Database', color: 'bg-red-100 text-red-700' },
              { name: 'Webhook', icon: 'Webhook', color: 'bg-orange-100 text-orange-700' },
              { name: 'Analytics', icon: 'BarChart3', color: 'bg-indigo-100 text-indigo-700' }
            ].map((tech) => (
              <Card key={tech.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto rounded-lg ${tech.color} flex items-center justify-center mb-4`}>
                    <Icon name={tech.icon as any} size={32} />
                  </div>
                  <h3 className="font-semibold text-slate-900">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Живое демо</h2>
            <p className="text-xl text-slate-600">Попробуйте чат-бота прямо сейчас</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Icon name="Bot" size={24} className="mr-2" />
                  AI Ассистент
                  <Badge className="ml-auto bg-green-500">Online</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                  {messages.map((message, index) => (
                    <div key={index} className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.role === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white border border-gray-200 text-slate-900'
                      }`}>
                        <p>{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start mb-4">
                      <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Введите ваше сообщение..."
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                      <Icon name="Send" size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation & API */}
      <section id="docs" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Документация и API</h2>
            <p className="text-xl text-slate-600">Все что нужно для быстрого старта</p>
          </div>
          <Tabs defaultValue="quickstart" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="quickstart">Быстрый старт</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="examples">Примеры</TabsTrigger>
            </TabsList>
            <TabsContent value="quickstart" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Запуск за 3 шага</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Badge className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">1</Badge>
                      <div>
                        <h4 className="font-semibold">Установка</h4>
                        <p className="text-slate-600">npm install @chatbot-platform/sdk</p>
                        <div className="bg-slate-100 p-3 rounded mt-2 font-mono text-sm">
                          npm install @chatbot-platform/sdk
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Badge className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">2</Badge>
                      <div>
                        <h4 className="font-semibold">Конфигурация</h4>
                        <p className="text-slate-600">Добавьте API ключ в .env файл</p>
                        <div className="bg-slate-100 p-3 rounded mt-2 font-mono text-sm">
                          CHATBOT_API_KEY=your_api_key_here
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Badge className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">3</Badge>
                      <div>
                        <h4 className="font-semibold">Запуск</h4>
                        <p className="text-slate-600">Создайте своего первого бота</p>
                        <div className="bg-slate-100 p-3 rounded mt-2 font-mono text-sm">
                          const bot = new ChatBot();<br/>
                          bot.start();
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="api" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">API Endpoints</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-400 pl-4">
                      <code className="text-green-600 font-mono">POST /api/v1/chat</code>
                      <p className="text-slate-600 mt-1">Отправка сообщения боту</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4">
                      <code className="text-blue-600 font-mono">GET /api/v1/bots</code>
                      <p className="text-slate-600 mt-1">Список всех ботов</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <code className="text-purple-600 font-mono">POST /api/v1/bots</code>
                      <p className="text-slate-600 mt-1">Создание нового бота</p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-4">
                      <code className="text-orange-600 font-mono">DELETE /api/v1/bots/:id</code>
                      <p className="text-slate-600 mt-1">Удаление бота</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="examples" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Примеры интеграции</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Telegram Bot</h4>
                      <div className="bg-slate-100 p-4 rounded">
                        <code className="text-sm">
                          import {"{TelegramAdapter}"}<br/>
                          from '@chatbot-platform/telegram'
                        </code>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Web Widget</h4>
                      <div className="bg-slate-100 p-4 rounded">
                        <code className="text-sm">
                          import {"{WebWidget}"}<br/>
                          from '@chatbot-platform/web'
                        </code>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наша команда</h2>
            <p className="text-xl text-slate-600">Эксперты в области ИИ и разработки</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей Иванов',
                role: 'Tech Lead & AI Researcher',
                avatar: 'A',
                bio: '10+ лет в ИИ, PhD в области машинного обучения'
              },
              {
                name: 'Мария Петрова',
                role: 'Head of Product',
                avatar: 'М',
                bio: 'Эксперт по UX и продуктовой стратегии'
              },
              {
                name: 'Дмитрий Сидоров',
                role: 'Senior Backend Developer',
                avatar: 'Д',
                bio: 'Специалист по высоконагруженным системам'
              }
            ].map((member) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-slate-300">Готовы начать проект? Напишите нам!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-400" />
                  <span>contact@chatbot-platform.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-400" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-blue-400" />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Быстрая связь</h3>
              <div className="space-y-4">
                <Input placeholder="Ваше имя" className="bg-slate-800 border-slate-700 text-white" />
                <Input placeholder="Email" className="bg-slate-800 border-slate-700 text-white" />
                <textarea
                  placeholder="Расскажите о вашем проекте"
                  className="w-full p-3 bg-slate-800 border border-slate-700 rounded-md text-white resize-none"
                  rows={4}
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Bot" size={24} className="text-blue-400" />
                <span className="text-lg font-semibold text-white">AI ChatBot Platform</span>
              </div>
              <p className="text-sm">
                Создаем будущее коммуникаций с помощью искусственного интеллекта
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Интеграции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Разработчикам</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">API Документация</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">SDK</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Примеры кода</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Статус сервиса</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Сообщество</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 AI ChatBot Platform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">SPAM FIGHTER</h1>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Icon name="User" className="w-4 h-4" />
              <span>Войти</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-red-500 text-white mb-4 px-4 py-2 text-sm font-semibold">
              🚀 Новый бот для защиты чатов
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Защити свой чат от <br />
              <span className="bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">
                спама и 18+ контента
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Умный Telegram-бот автоматически удаляет нежелательный контент и
              предупреждает спамеров. Защита работает круглосуточно.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                <Icon name="Plus" className="w-5 h-5 mr-2" />
                Добавить в чат
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-50"
              >
                <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                Авторизация через Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Возможности бота
            </h3>
            <p className="text-lg text-gray-600">
              Комплексная защита вашего чата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Ban" className="w-8 h-8 text-red-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Блокировка 18+
              </h4>
              <p className="text-gray-600">
                Автоматическое удаление неподходящего контента
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="AlertTriangle" className="w-8 h-8 text-cyan-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Предупреждения
              </h4>
              <p className="text-gray-600">
                Система предупреждений для спамеров
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Защита
              </h4>
              <p className="text-gray-600">
                Круглосуточная защита без перерывов
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Настройки
              </h4>
              <p className="text-gray-600">Гибкие настройки под ваш чат</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500 to-cyan-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">
              Статистика работы
            </h3>
            <p className="text-lg text-white/90">Результаты защиты чатов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1,247</div>
              <div className="text-lg text-white/90">
                Заблокировано спам-сообщений
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">89</div>
              <div className="text-lg text-white/90">Защищённых чатов</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-lg text-white/90">Непрерывная работа</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Начни защищать свой чат сегодня
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Добавь бота в чат за 2 минуты и забудь о спаме навсегда
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <Icon name="Plus" className="w-5 h-5 mr-2" />
              Добавить бота
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">
                SPAM FIGHTER
              </span>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Spam Fighter. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

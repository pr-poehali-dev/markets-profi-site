import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [counts, setCounts] = useState({ clients: 0, cards: 0, years: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const animateCount = (target: number, key: 'clients' | 'cards' | 'years') => {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, duration / steps);
    };

    setTimeout(() => {
      animateCount(2000000, 'clients');
      animateCount(4500000, 'cards');
      animateCount(2, 'years');
    }, 300);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Market's profi</div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('achievements')} className="text-sm font-medium hover:text-primary transition-colors">Достижения</button>
              <button onClick={() => scrollToSection('vacancies')} className="text-sm font-medium hover:text-primary transition-colors">Вакансии</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">
              Market's profi
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Профессиональное развитие бизнеса на маркетплейсах WB и Ozon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('vacancies')}>
                <Icon name="Briefcase" className="mr-2" size={20} />
                Открытые вакансии
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
                <Icon name="Mail" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-16">
            Наши достижения
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center transform hover:scale-105 transition-transform duration-300">
              <CardContent className="pt-12 pb-12">
                <Icon name="Users" size={48} className="mx-auto text-primary mb-4" />
                <div className="text-5xl font-bold text-primary mb-2 animate-counter">
                  {formatNumber(counts.clients)}
                </div>
                <p className="text-lg text-gray-600">Довольных клиентов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center transform hover:scale-105 transition-transform duration-300">
              <CardContent className="pt-12 pb-12">
                <Icon name="ShoppingCart" size={48} className="mx-auto text-primary mb-4" />
                <div className="text-5xl font-bold text-primary mb-2 animate-counter">
                  {formatNumber(counts.cards)}
                </div>
                <p className="text-lg text-gray-600">Карточек создано</p>
              </CardContent>
            </Card>
            
            <Card className="text-center transform hover:scale-105 transition-transform duration-300">
              <CardContent className="pt-12 pb-12">
                <Icon name="TrendingUp" size={48} className="mx-auto text-primary mb-4" />
                <div className="text-5xl font-bold text-primary mb-2 animate-counter">
                  {counts.years}+
                </div>
                <p className="text-lg text-gray-600">Лет на рынке</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                О компании
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Market's profi — это профессиональная команда экспертов в области развития бизнеса на маркетплейсах. 
                Мы работаем с крупнейшими площадками России: Wildberries и Ozon.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                За 2 года работы мы помогли более 2 миллионам клиентов увеличить продажи и создали 
                более 4,5 миллионов качественных карточек товаров.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Наша миссия — сделать ваш бизнес успешным на маркетплейсах через профессиональный подход 
                и высокое качество оформления товаров.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6 pb-6">
                  <Icon name="Target" size={32} className="text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Профессионализм</h3>
                  <p className="text-sm text-gray-600">Высокие стандарты работы</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6 pb-6">
                  <Icon name="Award" size={32} className="text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Опыт</h3>
                  <p className="text-sm text-gray-600">2 года успешной работы</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6 pb-6">
                  <Icon name="Zap" size={32} className="text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Скорость</h3>
                  <p className="text-sm text-gray-600">Быстрое выполнение задач</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6 pb-6">
                  <Icon name="CheckCircle" size={32} className="text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Качество</h3>
                  <p className="text-sm text-gray-600">Проверенные решения</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-6">
            Открытые вакансии
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Мы активно растём и ищем талантливых специалистов в нашу команду
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="FileEdit" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-2">Редактор карточек WB</h3>
                    <p className="text-gray-600 mb-4">Создание и редактирование карточек товаров для Wildberries</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Опыт работы с маркетплейсами приветствуется</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Внимательность к деталям</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Возможность удалённой работы</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection('contacts')}>
                  Откликнуться
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="FileEdit" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-2">Редактор карточек Ozon</h3>
                    <p className="text-gray-600 mb-4">Создание и редактирование карточек товаров для Ozon</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Знание специфики Ozon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Умение работать с контентом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Гибкий график работы</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection('contacts')}>
                  Откликнуться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Готовы обсудить сотрудничество или хотите присоединиться к команде? Напишите нам!
          </p>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="ivan@example.com" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о себе или вашем вопросе..." 
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6 pb-6">
                <Icon name="Mail" size={32} className="mx-auto text-primary mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-600">info@marketsprofi.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6 pb-6">
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-3" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-sm text-gray-600">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6 pb-6">
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-3" />
                <h3 className="font-semibold mb-2">Офис</h3>
                <p className="text-sm text-gray-600">Москва, Россия</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2">Market's profi</div>
              <p className="text-gray-300">Развитие бизнеса на маркетплейсах</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">© 2024 Market's profi. Все права защищены.</p>
              <p className="text-sm text-gray-400 mt-2">2 года успешной работы | 2M+ клиентов | 4.5M+ карточек</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

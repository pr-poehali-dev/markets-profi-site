import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [counts, setCounts] = useState({ years: 0, clients: 0, cards: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const animateCount = (target: number, key: 'years' | 'clients' | 'cards') => {
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
      animateCount(4, 'years');
      animateCount(6000000, 'clients');
      animateCount(14000000, 'cards');
    }, 300);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}М`;
    }
    return num.toLocaleString('ru-RU');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-primary/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Star" size={32} className="text-primary" fill="currentColor" />
              <div className="text-2xl font-bold text-primary">SMM-Stars</div>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('achievements')} className="text-sm font-medium hover:text-primary transition-colors">Достижения</button>
              <button onClick={() => scrollToSection('career')} className="text-sm font-medium hover:text-primary transition-colors">Карьера</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 mb-6">
              <Icon name="Star" size={48} className="text-primary animate-pulse" fill="currentColor" />
              <h1 className="text-6xl md:text-8xl font-bold text-primary">
                SMM-Stars
              </h1>
              <Icon name="Star" size={48} className="text-primary animate-pulse" fill="currentColor" />
            </div>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-4 max-w-3xl mx-auto">
              Развиваем бизнес на маркетплейсах
            </p>
            <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto">
              Профессиональные решения для WB и Ozon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 text-background font-semibold" onClick={() => scrollToSection('career')}>
                <Icon name="Briefcase" className="mr-2" size={20} />
                Присоединиться к команде
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10" onClick={() => scrollToSection('about')}>
                <Icon name="Info" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
            Наши достижения
          </h2>
          <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto text-lg">
            Цифры, которые говорят о нашем профессионализме
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-card border-primary/30 transform hover:scale-105 transition-all duration-300 hover:border-primary">
              <CardContent className="pt-12 pb-12">
                <Icon name="Calendar" size={56} className="mx-auto text-primary mb-4" />
                <div className="text-6xl font-bold text-primary mb-3 animate-counter">
                  {counts.years}+
                </div>
                <p className="text-xl text-foreground/70">Лет на рынке</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card border-primary/30 transform hover:scale-105 transition-all duration-300 hover:border-primary">
              <CardContent className="pt-12 pb-12">
                <Icon name="Users" size={56} className="mx-auto text-primary mb-4" />
                <div className="text-6xl font-bold text-primary mb-3 animate-counter">
                  {formatNumber(counts.clients)}
                </div>
                <p className="text-xl text-foreground/70">Клиентов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card border-primary/30 transform hover:scale-105 transition-all duration-300 hover:border-primary">
              <CardContent className="pt-12 pb-12">
                <Icon name="ShoppingCart" size={56} className="mx-auto text-primary mb-4" />
                <div className="text-6xl font-bold text-primary mb-3 animate-counter">
                  {formatNumber(counts.cards)}
                </div>
                <p className="text-xl text-foreground/70">Карточек создано</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                О компании
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                <span className="text-primary font-semibold">SMM-Stars</span> — это команда профессионалов, 
                которая помогает бизнесу расти на крупнейших маркетплейсах России.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                За <span className="text-primary font-semibold">4 года</span> работы мы накопили огромный опыт 
                в создании продающих карточек товаров для <span className="text-accent font-semibold">Wildberries</span> и <span className="text-accent font-semibold">Ozon</span>.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Наши клиенты — это <span className="text-primary font-semibold">6 миллионов</span> довольных предпринимателей, 
                для которых мы создали более <span className="text-primary font-semibold">14 миллионов</span> качественных карточек.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary/10 border-primary/40 hover:bg-primary/20 transition-colors">
                <CardContent className="pt-6 pb-6">
                  <Icon name="TrendingUp" size={40} className="text-primary mb-3" />
                  <h3 className="font-semibold text-xl mb-2 text-primary">Рост продаж</h3>
                  <p className="text-sm text-foreground/70">Увеличиваем конверсию</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/10 border-primary/40 hover:bg-primary/20 transition-colors">
                <CardContent className="pt-6 pb-6">
                  <Icon name="Award" size={40} className="text-primary mb-3" />
                  <h3 className="font-semibold text-xl mb-2 text-primary">Качество</h3>
                  <p className="text-sm text-foreground/70">Высокие стандарты</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/10 border-primary/40 hover:bg-primary/20 transition-colors">
                <CardContent className="pt-6 pb-6">
                  <Icon name="Zap" size={40} className="text-primary mb-3" />
                  <h3 className="font-semibold text-xl mb-2 text-primary">Скорость</h3>
                  <p className="text-sm text-foreground/70">Быстрое выполнение</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/10 border-primary/40 hover:bg-primary/20 transition-colors">
                <CardContent className="pt-6 pb-6">
                  <Icon name="Target" size={40} className="text-primary mb-3" />
                  <h3 className="font-semibold text-xl mb-2 text-primary">Результат</h3>
                  <p className="text-sm text-foreground/70">Гарантия успеха</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="career" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">
            Присоединяйтесь к нам!
          </h2>
          <p className="text-center text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
            Мы активно растём и ищем талантливых специалистов в команду. 
            Заполните форму, и мы свяжемся с вами в ближайшее время.
          </p>
          
          <Card className="max-w-2xl mx-auto bg-card border-primary/30 shadow-2xl shadow-primary/10">
            <CardContent className="pt-10 pb-10">
              {formSubmitted ? (
                <div className="text-center py-12 animate-scale-in">
                  <Icon name="CheckCircle" size={64} className="mx-auto text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Спасибо!</h3>
                  <p className="text-foreground/70">Мы получили вашу заявку и свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Ваше имя *</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      required 
                      className="bg-background border-primary/30 focus:border-primary text-foreground"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="ivan@example.com" 
                      required 
                      className="bg-background border-primary/30 focus:border-primary text-foreground"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Телефон *</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      required 
                      className="bg-background border-primary/30 focus:border-primary text-foreground"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Желаемая должность</label>
                    <Input 
                      placeholder="Редактор карточек WB / Ozon" 
                      className="bg-background border-primary/30 focus:border-primary text-foreground"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">О себе *</label>
                    <Textarea 
                      placeholder="Расскажите о своем опыте работы, навыках и почему хотите работать в нашей компании..." 
                      rows={5}
                      required
                      className="bg-background border-primary/30 focus:border-primary text-foreground resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-background font-semibold" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
            <Card className="text-center bg-card border-primary/30 hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8">
                <Icon name="Users" size={40} className="mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-primary">Работа в команде</h3>
                <p className="text-sm text-foreground/70">Дружный коллектив профессионалов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card border-primary/30 hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8">
                <Icon name="Home" size={40} className="mx-auto text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-primary">Удалённая работа</h3>
                <p className="text-sm text-foreground/70">Работайте из любой точки мира</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-background border-t border-primary/20 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <Icon name="Star" size={28} className="text-primary" fill="currentColor" />
                <div className="text-2xl font-bold text-primary">SMM-Stars</div>
              </div>
              <p className="text-foreground/60">Развиваем бизнес на маркетплейсах</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-foreground/70 mb-2">© 2024 SMM-Stars. Все права защищены.</p>
              <p className="text-sm text-foreground/50">4+ года опыта | 6M+ клиентов | 14M+ карточек</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

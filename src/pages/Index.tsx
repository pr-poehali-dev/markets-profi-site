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
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-accent p-2.5 rounded-2xl shadow-lg">
                <Icon name="Sparkles" size={28} className="text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SMM-Stars
              </div>
            </div>
            <div className="hidden md:flex gap-10">
              <button onClick={() => scrollToSection('home')} className="text-sm font-semibold hover:text-primary transition-all duration-300">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-semibold hover:text-primary transition-all duration-300">Услуги</button>
              <button onClick={() => scrollToSection('advantages')} className="text-sm font-semibold hover:text-primary transition-all duration-300">Преимущества</button>
              <button onClick={() => scrollToSection('achievements')} className="text-sm font-semibold hover:text-primary transition-all duration-300">Достижения</button>
              <button onClick={() => scrollToSection('career')} className="text-sm font-semibold hover:text-primary transition-all duration-300">Карьера</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-40 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white rounded-full shadow-lg border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary">Набираем новых специалистов</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              SMM-Stars
            </h1>
            
            <p className="text-2xl md:text-4xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
              Развиваем бизнес на маркетплейсах
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Профессиональные решения для WB и Ozon. Выводим товары в ТОП и помогаем предпринимателям выйти на маркетплейсы
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 font-bold rounded-2xl" 
                onClick={() => scrollToSection('career')}
              >
                <Icon name="Rocket" className="mr-2" size={22} />
                Присоединиться к команде
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-7 border-2 border-primary/30 hover:bg-primary/5 hover:border-primary transition-all duration-300 font-bold rounded-2xl backdrop-blur-sm bg-white/50" 
                onClick={() => scrollToSection('services')}
              >
                <Icon name="Package" className="mr-2" size={22} />
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-primary/10 rounded-full">
              <Icon name="TrendingUp" size={20} className="text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Наши достижения</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
              Цифры говорят сами за себя
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Более 4 лет опыта работы с маркетплейсами
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-to-br from-white to-primary/5 border-primary/20 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden">
              <CardContent className="pt-14 pb-14 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="bg-gradient-to-br from-primary to-accent p-5 rounded-3xl inline-flex mb-6 shadow-lg relative">
                  <Icon name="Calendar" size={48} className="text-white" />
                </div>
                <div className="text-7xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  {counts.years}+
                </div>
                <p className="text-xl font-bold text-foreground">Лет на рынке</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-white to-secondary/5 border-secondary/20 shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transform hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden">
              <CardContent className="pt-14 pb-14 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                <div className="bg-gradient-to-br from-secondary to-primary p-5 rounded-3xl inline-flex mb-6 shadow-lg relative">
                  <Icon name="Users" size={48} className="text-white" />
                </div>
                <div className="text-7xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-4">
                  {formatNumber(counts.clients)}
                </div>
                <p className="text-xl font-bold text-foreground">Довольных клиентов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-white to-accent/5 border-accent/20 shadow-xl hover:shadow-2xl hover:shadow-accent/20 transform hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden">
              <CardContent className="pt-14 pb-14 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
                <div className="bg-gradient-to-br from-accent to-primary p-5 rounded-3xl inline-flex mb-6 shadow-lg relative">
                  <Icon name="ShoppingCart" size={48} className="text-white" />
                </div>
                <div className="text-7xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
                  {formatNumber(counts.cards)}
                </div>
                <p className="text-xl font-bold text-foreground">Карточек создано</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-gradient-to-br from-muted/30 to-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMDAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-secondary/10 rounded-full">
              <Icon name="Package" size={20} className="text-secondary" />
              <span className="text-sm font-bold text-secondary uppercase tracking-wider">Наши услуги</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
              Что мы предлагаем
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Комплексные решения для вашего успеха на маркетплейсах
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-white border-2 border-primary/20 hover:border-primary/40 shadow-2xl hover:shadow-primary/20 transition-all duration-500 rounded-3xl overflow-hidden group">
              <CardContent className="pt-12 pb-12 px-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Store" size={56} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-primary mb-4">Для продавцов</h3>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      Изучаем рынок, анализируем конкурентов и выводим ваш товар в ТОП маркетплейсов. 
                      Создаём продающие карточки, которые привлекают покупателей.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 bg-muted/30 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-2 rounded-xl">
                      <Icon name="Check" className="text-primary" size={20} />
                    </div>
                    <span className="text-foreground/90 font-medium">Глубокий анализ рынка и конкурентов</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-2 rounded-xl">
                      <Icon name="Check" className="text-primary" size={20} />
                    </div>
                    <span className="text-foreground/90 font-medium">Вывод товаров в ТОП выдачи</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-2 rounded-xl">
                      <Icon name="Check" className="text-primary" size={20} />
                    </div>
                    <span className="text-foreground/90 font-medium">Профессиональное оформление карточек</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-accent/20 hover:border-accent/40 shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden group">
              <CardContent className="pt-12 pb-12 px-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-gradient-to-br from-accent to-secondary p-6 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Rocket" size={56} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-accent mb-4">Для предпринимателей</h3>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      Разрабатываем индивидуальный план выхода на маркетплейсы с нуля. 
                      Поможем выбрать нишу и построить успешный бизнес.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 bg-muted/30 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-2 rounded-xl">
                      <Icon name="Check" className="text-accent" size={20} />
                    </div>
                    <span className="text-foreground/90 font-medium">Разработка стратегии выхода на рынок</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-2 rounded-xl">
                      <Icon name="Check" className="text-accent" size={20} />
                    </div>
                    <span className="text-foreground/90 font-medium">Помощь в выборе прибыльной ниши</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-2 rounded-xl">
                      <Icon name="Check" className="text-accent" size={20} />
                    </div>
                    <span className="text-foreground/90 font-medium">Полное сопровождение от идеи до продаж</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-accent/10 rounded-full">
              <Icon name="Award" size={20} className="text-accent" />
              <span className="text-sm font-bold text-accent uppercase tracking-wider">Преимущества</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              6 миллионов клиентов доверяют нашему опыту
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-border hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl group">
              <CardContent className="pt-12 pb-12 text-center px-8">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="BarChart3" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground mb-4">Анализ рынка</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Изучаем рынок в деталях, анализируем конкурентов и находим лучшие стратегии для максимальных результатов
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border hover:border-secondary/40 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl group">
              <CardContent className="pt-12 pb-12 text-center px-8">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="GraduationCap" size={48} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground mb-4">Бесплатное обучение</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Обучаем каждого нового сотрудника с нуля. Вы легко освоите все процессы и быстро начнёте работать
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border hover:border-accent/40 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl group">
              <CardContent className="pt-12 pb-12 text-center px-8">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Award" size={48} className="text-accent" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground mb-4">Проверенные методики</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  За 4+ года работы мы отточили все процессы и используем только эффективные решения
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl group">
              <CardContent className="pt-12 pb-12 text-center px-8">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Target" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground mb-4">Результативность</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  6 миллионов довольных клиентов — наш главный показатель качества. Мы нацелены на ваш успех
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border hover:border-secondary/40 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl group">
              <CardContent className="pt-12 pb-12 text-center px-8">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Zap" size={48} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground mb-4">Скорость работы</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Быстрое выполнение задач без потери качества. Оперативно реагируем на изменения рынка
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border hover:border-accent/40 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl group">
              <CardContent className="pt-12 pb-12 text-center px-8">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Users" size={48} className="text-accent" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground mb-4">Дружная команда</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Работаем как единая команда профессионалов. Поддерживаем друг друга и достигаем общих целей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="career" className="py-24 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-5xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-primary/10 rounded-full">
              <Icon name="Briefcase" size={20} className="text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Карьера</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6">
              Присоединяйтесь к нам!
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Мы активно растём и ищем талантливых специалистов в команду. 
              Заполните форму, и мы свяжемся с вами в ближайшее время.
            </p>
          </div>
          
          <Card className="max-w-3xl mx-auto bg-white border-2 border-primary/20 shadow-2xl rounded-3xl">
            <CardContent className="pt-12 pb-12 px-12">
              {formSubmitted ? (
                <div className="text-center py-16">
                  <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-full inline-flex mb-6 shadow-xl">
                    <Icon name="CheckCircle" size={72} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    Спасибо за отклик!
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Мы получили ваши данные и свяжемся с вами в ближайшее время для обсуждения деталей.
                  </p>
                </div>
              ) : (
                <form className="space-y-7" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-base font-bold text-foreground mb-3">Ваше имя *</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      required 
                      className="h-14 bg-muted/30 border-2 border-border focus:border-primary text-foreground rounded-xl text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-bold text-foreground mb-3">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="ivan@example.com" 
                      required 
                      className="h-14 bg-muted/30 border-2 border-border focus:border-primary text-foreground rounded-xl text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-bold text-foreground mb-3">Телефон *</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      required 
                      className="h-14 bg-muted/30 border-2 border-border focus:border-primary text-foreground rounded-xl text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-bold text-foreground mb-3">Желаемая должность</label>
                    <Input 
                      placeholder="Специалист по маркетплейсам" 
                      className="h-14 bg-muted/30 border-2 border-border focus:border-primary text-foreground rounded-xl text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-bold text-foreground mb-3">О себе и опыте работы *</label>
                    <Textarea 
                      placeholder="Расскажите о своем опыте, навыках работы с маркетплейсами, знании WB/Ozon и почему хотите работать в нашей компании..." 
                      rows={6}
                      required
                      className="bg-muted/30 border-2 border-border focus:border-primary text-foreground resize-none rounded-xl text-base"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-16 bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/40 text-white font-extrabold text-lg rounded-xl transition-all duration-300" 
                    size="lg"
                  >
                    <Icon name="Send" className="mr-2" size={24} />
                    Отправить заявку
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <Card className="text-center bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-10 pb-10">
                <div className="bg-primary/10 p-4 rounded-2xl inline-flex mb-5">
                  <Icon name="GraduationCap" size={44} className="text-primary" />
                </div>
                <h3 className="font-extrabold text-lg mb-2 text-foreground">Бесплатное обучение</h3>
                <p className="text-sm text-muted-foreground">С нуля до профи</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-10 pb-10">
                <div className="bg-secondary/10 p-4 rounded-2xl inline-flex mb-5">
                  <Icon name="Home" size={44} className="text-secondary" />
                </div>
                <h3 className="font-extrabold text-lg mb-2 text-foreground">Удалённая работа</h3>
                <p className="text-sm text-muted-foreground">Из любой точки мира</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="pt-10 pb-10">
                <div className="bg-accent/10 p-4 rounded-2xl inline-flex mb-5">
                  <Icon name="TrendingUp" size={44} className="text-accent" />
                </div>
                <h3 className="font-extrabold text-lg mb-2 text-foreground">Карьерный рост</h3>
                <p className="text-sm text-muted-foreground">Развивайтесь с нами</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-foreground to-foreground/90 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SMM-Stars
                </div>
              </div>
              <p className="text-white/70 text-lg">Развиваем бизнес на маркетплейсах WB и Ozon</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/90 mb-3 text-lg font-semibold">© 2024 SMM-Stars. Все права защищены.</p>
              <p className="text-white/60">4+ года опыта | 6М+ клиентов | 14М+ карточек</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

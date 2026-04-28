import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Smile,
  Zap,
  CreditCard,
  Map,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação na Sorriso Prime.";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-prime rounded-lg flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-prime/20">
            SP
          </div>
          <div>
            <h1 className={`text-xl font-bold leading-tight ${isScrolled ? "text-blue-prime" : "text-white"}`}>
              Sorriso Prime
            </h1>
            <p className={`text-[10px] uppercase tracking-[0.2em] font-black ${isScrolled ? "text-slate-500" : "text-white/60"}`}>
              Odontologia Elite
            </p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Serviços", "Resultados", "Sobre", "Diferenciais"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`${isScrolled ? "text-slate-600 font-semibold" : "text-white/80"} hover:text-blue-prime transition-colors`}
            >
              {item}
            </a>
          ))}
        </nav>

        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="no-referrer"
          className="bg-blue-prime text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:scale-105 flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Agendar Agora</span>
        </a>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
          alt="Clínica Odontológica Moderna" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-health rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase">Mais de 1.000 pacientes atendidos</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Seu novo sorriso <br />
              <span className="text-blue-400">começa hoje.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Tratamentos modernos, atendimento humanizado e resultados que transformam vidas. 
              <span className="block mt-4 text-red-400 font-bold uppercase text-xs tracking-wider">⚠️ Vagas limitadas esta semana</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="no-referrer"
                className="bg-green-health hover:shadow-green-200 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-lg group hover:scale-105"
              >
                Quero agendar agora
                <MessageCircle className="w-6 h-6" />
              </a>
              <div className="flex items-center gap-3 px-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/150?u=user${i}`} 
                      className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                      alt="Paciente"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-slate-300 text-sm">
                  <div className="flex items-center gap-1 text-emerald-400 font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    <span>4.9/5</span>
                  </div>
                  <span>+1.000 pacientes felizes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const list = [
    {
      title: "Implantes Dentários",
      desc: "Recupere sua função mastigatória e autoestima com tecnologia alemã.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Clareamento Dental",
      desc: "Sorriso branco e brilhante em poucas sessões com laser de alta potência.",
      icon: <Smile className="w-8 h-8" />,
    },
    {
      title: "Ortodontia Moderna",
      desc: "Aparelhos invisíveis e convencionais para alinhar seu sorriso com conforto.",
      icon: <Stethoscope className="w-8 h-8" />,
    },
    {
      title: "Lentes de Contato",
      desc: "Lâminas ultrafinas de cerâmica para um sorriso perfeito e natural.",
      icon: <Star className="w-8 h-8" />,
    }
  ];

  return (
    <section id="serviços" className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-prime font-bold uppercase tracking-widest text-xs mb-3">Nossas Especialidades</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 italic-small">
            Excelência em cada detalhe do seu sorriso
          </p>
          <div className="h-1.5 w-24 bg-blue-prime mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 glass rounded-3xl shadow-sm hover:border-blue-200 transition-all group"
            >
              <div className="w-16 h-16 bg-blue-prime text-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href={WHATSAPP_LINK} className="text-blue-prime font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber mais <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    {
      name: "Ricardo Oliveira",
      role: "Empresário",
      text: "A Sorriso Prime me devolveu a confiança de sorrir em público. O atendimento é simplesmente impecável do início ao fim.",
      img: "https://i.pravatar.cc/150?u=r1",
    },
    {
      name: "Mariana Costa",
      role: "Designer",
      text: "Fiz o clareamento e as lentes de contato. O resultado ficou super natural, exatamente como eu queria. Recomendo muito!",
      img: "https://i.pravatar.cc/150?u=m1",
    },
    {
      name: "João Silva",
      role: "Advogado",
      text: "Tecnologia de ponta e profissionais que realmente explicam tudo o que está sendo feito. Me senti muito seguro.",
      img: "https://i.pravatar.cc/150?u=j1",
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-blue-prime font-bold uppercase tracking-widest text-xs mb-3">Prova Social</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900">
              O que dizem nossos pacientes
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-slate-900 font-bold">4.9/5</span> de satisfação no Google
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl shadow-sm flex flex-col items-start"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-blue-900 font-bold italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="mt-auto flex items-center gap-4">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all border-2 border-white"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  return (
    <section id="resultados" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="glass p-8 md:p-12 rounded-[40px]">
            <h2 className="text-blue-prime font-bold uppercase tracking-widest text-xs mb-3">Resultados Reais</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 italic-small">
              Transformações que falam por si
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Utilizamos simulação digital para que você veja como ficará seu sorriso antes mesmo de começar o tratamento. 
              Alta precisão para resultados estéticos superiores.
            </p>
            
            <ul className="space-y-4 mb-10">
              {["Simulacão digital 3D", "Lentes de porcelana exclusivas", "Planejamento personalizado"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-health">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="no-referrer"
              className="inline-flex items-center gap-2 text-blue-prime font-bold border-b-2 border-blue-prime pb-1 hover:text-blue-900 transition-all"
            >
              Ver mais casos no WhatsApp <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group border-4 border-white glass">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Transformação de Sorriso" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all"></div>
              
              <div className="absolute bottom-6 left-6 flex gap-4">
                <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-slate-900 shadow-lg uppercase border border-white/30">Antes</span>
                <span className="bg-green-health px-3 py-1 rounded-lg text-[10px] font-bold text-white shadow-lg uppercase">Depois</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-3xl aspect-[3/4] object-cover shadow-2xl" 
                alt="Clínica"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-3xl aspect-[3/4] object-cover shadow-2xl mt-12" 
                alt="Dentista trabalhando"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">Sobre a Sorriso Prime</h2>
            <p className="text-4xl md:text-5xl font-bold text-white mb-8">
              Referência em <br /> odontologia de elite
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              A Sorriso Prime nasceu do desejo de unir ciência, tecnologia e sensibilidade. 
              Aqui, cada paciente é tratado como único, com um planejamento exclusivo que respeita 
              sua anatomia e seus desejos.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Equipamentos Modernos", desc: "Escaneamento digital e laserterapia." },
                { title: "Profissionais Mestres", desc: "Equipe formada nas melhores universidades do país." },
                { title: "Biossegurança", desc: "Rigorosos protocolos de esterilização e higiene." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex-shrink-0 flex items-center justify-center">
                    <CheckCircle2 className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const items = [
    { title: "Atendimento Rápido", desc: "Sem filas e horários cumpridos à risca.", icon: <Zap /> },
    { title: "Tecnologia Avançada", desc: "Escaneamento dental 3D e Raio-X digital.", icon: <ShieldCheck /> },
    { title: "Facilidade de Pagamento", desc: "Parcelamento exclusivo e convênios.", icon: <CreditCard /> },
    { title: "Localização", desc: "Estacionamento no local e acesso fácil.", icon: <Map /> }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-prime font-bold uppercase tracking-widest text-xs mb-3">Diferenciais</h2>
          <p className="text-4xl font-bold text-slate-900 underline decoration-blue-prime/20 underline-offset-8">Por que nos escolher?</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center p-8 glass rounded-[32px] shadow-sm hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-50 text-blue-prime rounded-2xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed font-semibold uppercase tracking-wider">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="bg-white/40 backdrop-blur-xl rounded-[40px] shadow-2xl overflow-hidden border border-white/40 grid lg:grid-cols-2">
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 italic-small">Onde estamos</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-prime flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Endereço</h4>
                  <p className="text-slate-600 text-sm">Av. Paulista, 1000 - Bela Vista <br /> São Paulo - SP, 01310-100</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-prime flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Horário de Funcionamento</h4>
                  <p className="text-slate-600 text-sm">Segunda a Sexta: 08:00 - 19:00 <br /> Sábado: 08:00 - 13:00</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-prime flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Contato</h4>
                  <p className="text-slate-600 text-sm">(11) 3210-9000 <br /> (11) 99999-9999 (WhatsApp)</p>
                </div>
              </div>
            </div>

            <a 
              href="https://goo.gl/maps/ficticio" 
              className="mt-12 inline-flex items-center gap-2 text-blue-prime font-black hover:gap-3 transition-all"
            >
              Abrir no Google Maps <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="h-[400px] lg:h-auto bg-slate-200">
            <div className="w-full h-full relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Mapa Localização" 
                className="w-full h-full object-cover grayscale opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-prime rounded-full flex items-center justify-center animate-bounce shadow-2xl">
                  <MapPin className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md py-16 border-t border-slate-100 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-prime rounded-lg flex items-center justify-center text-white font-black text-sm">
                SP
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Sorriso Prime
              </span>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed text-sm font-medium">
              Tratamentos modernos e atendimento humanizado para transformar o seu sorriso e sua vida.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest px-1 border-l-2 border-blue-prime">Navegação</h5>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><a href="#serviços" className="hover:text-blue-prime transition-colors">Serviços</a></li>
              <li><a href="#resultados" className="hover:text-blue-prime transition-colors">Resultados</a></li>
              <li><a href="#sobre" className="hover:text-blue-prime transition-colors">Sobre Nós</a></li>
              <li><a href="#diferenciais" className="hover:text-blue-prime transition-colors">Diferenciais</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest px-1 border-l-2 border-blue-prime">Siga-nos</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-prime hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-prime hover:text-white transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
                <a href={WHATSAPP_LINK} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-green-health hover:text-white transition-all shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[10px] text-center md:text-left uppercase tracking-widest font-bold">
          <p>© 2026 Sorriso Prime Odontologia - CNPJ 00.000.000/0000-00</p>
          <p>CRO-SP: 123456 | RT: Dr. Lucas Moraes</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4 animate-bounce">
      <div className="glass px-4 py-3 rounded-2xl shadow-xl text-xs font-bold italic text-blue-prime relative hidden md:block">
        Dúvidas? Fale conosco!
        <div className="absolute w-3 h-3 glass border-t-0 border-l-0 rotate-45 -right-1.5 top-1/2 -translate-y-1/2"></div>
      </div>
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="no-referrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-16 h-16 bg-green-health rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageCircle className="w-9 h-9" />
        <div className="absolute inset-0 bg-green-health rounded-full animate-ping opacity-20 -z-10"></div>
      </motion.a>
    </div>
  );
};

const SpecialOffer = () => {
  return (
    <div className="bg-blue-prime py-3 text-center text-white text-sm font-bold px-4">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <span className="animate-pulse">🔥</span>
        PROMOÇÃO: 20% OFF em Clareamento a Laser para novos pacientes este mês! 
        <a href={WHATSAPP_LINK} className="underline decoration-2 underline-offset-4 hover:opacity-80 ml-2">Aproveitar agora</a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-prime">
      <SpecialOffer />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SocialProof />
        <BeforeAfter />
        <About />
        <Differentials />
        
        {/* Secondary CTA Section */}
        <section className="py-24 bg-blue-prime relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic-small">Agende sua avaliação agora</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Não perca mais tempo. Tenha o sorriso dos seus sonhos com a melhor equipe de São Paulo. 
              Restam apenas <span className="font-black text-white underline underline-offset-4">4 vagas</span> para consultoria gratuita esta semana!
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="no-referrer"
              className="bg-green-health text-white hover:shadow-green-200 px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-2xl flex items-center justify-center gap-3 w-fit mx-auto group hover:scale-105"
            >
              Quero agendar meu horário
              <MessageCircle className="w-7 h-7" />
            </a>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </section>
        
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}


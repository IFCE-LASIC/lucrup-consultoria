import React, { useState } from 'react';
import { Menu, X, CheckCircle, TrendingUp, DollarSign, BarChart3, ArrowRight, Mail, Phone, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from './assets/logo.png';
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#3a8cc6]/20 selection:text-blue-950">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="font-montserrat font-bold text-2xl tracking-tight text-blue-950 flex items-center">
                <img src={logoImg} alt="LUCRUP Logo" className="h-20" />
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solucoes" className="text-sm font-medium text-slate-600 hover:text-[#2e709e] transition-colors uppercase tracking-wider">Soluções</a>
              <a href="#resultados" className="text-sm font-medium text-slate-600 hover:text-[#2e709e] transition-colors uppercase tracking-wider">Resultados</a>
              <a
                href="https://wa.me/5585992811387"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3a8cc6] hover:bg-[#2e709e] text-white px-6 py-2.5 rounded-md font-semibold uppercase tracking-wide transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                Fale Conosco
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-950 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#solucoes" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-950 hover:bg-slate-50 rounded-md">Soluções</a>
              <a href="#resultados" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-950 hover:bg-slate-50 rounded-md">Resultados</a>
              <a href="https://wa.me/5585992811387" target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-4 bg-[#3a8cc6] text-white px-4 py-3 rounded-md font-bold uppercase">
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#3a8cc6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 mb-6 border border-[#3a8cc6]/30 rounded-full bg-white shadow-sm">
                <span className="text-[#2e709e] font-semibold text-xs tracking-widest uppercase">Consultoria Estratégica</span>
              </div>
              <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-blue-950 mb-6">
                LIBERTE-SE DO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a8cc6] to-[#2e709e]">CAOS FINANCEIRO</span> E CONQUISTE O SUCESSO.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg font-medium">
                Sua empresa fatura mas não lucra? Transformamos números em estratégia. Auditoria completa, gestão eficiente e reversão de cenário financeiro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5585992811387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-[#3a8cc6] hover:bg-[#2e709e] text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-[#3a8cc6]/30"
                >
                  Quero Sair do Caos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group bg-white">
                {/* Clean image without heavy overlay */}
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                  alt="Escritório corporativo moderno e iluminado"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Stats Card - Clean Style */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#3a8cc6]/10 p-3 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-[#3a8cc6]" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-lg">Resultados Reais</p>
                      <p className="text-[#2e709e] text-sm font-semibold">ROI Médio de 10x</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#3a8cc6]/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-blue-950 mb-4 uppercase">
              Sua empresa vende bem, mas <br className="hidden md:block" />
              <span className="relative inline-block px-2">
                <span className="absolute inset-0 bg-[#3a8cc6]/20 transform -skew-x-3 rounded-sm"></span>
                <span className="relative text-blue-950">você não vê o lucro</span>
              </span> no final do mês?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
              Identifique se o seu negócio está sofrendo com os sintomas silenciosos da falência.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gestão Desorganizada",
                desc: "Processos falhos que drenam a produtividade da sua equipe e geram retrabalho constante.",
                icon: <BarChart3 className="h-8 w-8 text-[#3a8cc6]" />
              },
              {
                title: "Estoque = Prejuízo",
                desc: "Mercadoria parada é dinheiro perdido. O descontrole de inventário está corroendo seu capital de giro.",
                icon: <DollarSign className="h-8 w-8 text-[#3a8cc6]" />
              },
              {
                title: "Contas no Escuro",
                desc: "Tomar decisões sem dados financeiros precisos é como dirigir de olhos vendados em alta velocidade.",
                icon: <TrendingUp className="h-8 w-8 text-[#3a8cc6] transform rotate-180" />
              }
            ].map((pain, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl border border-slate-100 hover:border-[#3a8cc6]/50 transition-all shadow-sm hover:shadow-xl group"
              >
                <div className="bg-slate-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#3a8cc6]/10 transition-colors">
                  {pain.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-blue-950 mb-4 uppercase">{pain.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {pain.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-20 lg:py-32 relative bg-blue-950 overflow-hidden">
        {/* Subtle Dotted Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#3a8cc6] font-bold tracking-widest uppercase text-sm">Nossa Expertise</span>
            <h2 className="font-montserrat font-bold text-3xl sm:text-5xl text-white mt-2 mb-6 uppercase">
              Os 4 Pilares da <span className="text-[#3a8cc6]">Lucratividade</span>
            </h2>
            <div className="w-24 h-1 bg-[#3a8cc6] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Consultoria Estratégica",
                desc: "Diagnóstico profundo e plano de ação para reestruturar seu modelo de negócio.",
              },
              {
                title: "Controle de Estoque",
                desc: "Metodologias para otimizar o giro e evitar perdas que impactam o caixa.",
              },
              {
                title: "Precificação & Compras",
                desc: "Estratégias para comprar melhor e precificar com margem real de lucro.",
              },
              {
                title: "BPO Financeiro",
                desc: "Terceirização completa do seu financeiro. Foco no core business, nós cuidamos dos números.",
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover: border-4 hover:border-[#3a8cc6]/50 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[#2e709e] font-bold text-xl font-montserrat">
                  0{index + 1}
                </div>
                <h3 className="font-montserrat font-bold text-lg text-blue-950 mb-3 uppercase leading-tight h-12 flex items-center">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Results */}
      <section id="resultados" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-4xl sm:text-5xl text-blue-950 mb-8 uppercase leading-none">
                Resultados que <br />
                <span className="text-[#3a8cc6]">Falam por si</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 font-medium">
                Não vendemos promessas, entregamos performance. Nossos clientes experimentam uma transformação radical na saúde financeira de suas empresas.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <CheckCircle className="text-[#3a8cc6] h-6 w-6 flex-shrink-0" />
                  <span className="text-blue-950 font-medium">Recuperação de empresas à beira da falência</span>
                </div>
                <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <CheckCircle className="text-[#3a8cc6] h-6 w-6 flex-shrink-0" />
                  <span className="text-blue-950 font-medium">Organização total de processos financeiros</span>
                </div>
                <div className="flex items-center space-x-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <CheckCircle className="text-[#3a8cc6] h-6 w-6 flex-shrink-0" />
                  <span className="text-blue-950 font-medium">Aumento real da margem de lucro líquido</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#3a8cc6] p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-xl">
                <p className="text-blue-50 font-bold uppercase text-sm tracking-wider mb-2">Retorno Sobre Investimento</p>
                <h3 className="font-montserrat font-black text-6xl text-white mb-2">10x</h3>
                <p className="text-white font-medium">ROI Médio em nossos projetos</p>
              </div>
              <div className="bg-white border border-slate-200 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <p className="text-[#3a8cc6] font-bold uppercase text-sm tracking-wider mb-2">Potencial de Crescimento</p>
                <h3 className="font-montserrat font-black text-5xl text-blue-950 mb-2">200%</h3>
                <p className="text-slate-500 font-medium">Dobre sua lucratividade</p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="font-montserrat font-bold text-2xl text-blue-950 mb-8 uppercase">
              O próximo case de sucesso pode ser o seu.
            </h3>
            <a
              href="https://wa.me/5585992811387"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#3a8cc6] hover:bg-[#2e709e] text-white px-10 py-5 rounded-md font-bold text-lg uppercase tracking-wide transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-[#3a8cc6]/30"
            >
              <Phone className="mr-2 h-6 w-6" />
              Agendar Diagnóstico
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 border-t border-blue-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <span className="font-montserrat font-bold text-2xl tracking-tight text-white block mb-6 flex items-center">
                <img src={logoImg} alt="LUCRUP Logo" className="h-15" />
              </span>
              <p className="text-slate-300 max-w-sm mb-6 font-light">
                Consultoria especializada em gestão financeira e estratégica para empresas que buscam crescimento sólido e lucratividade real.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/lucrup_consult?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#3a8cc6] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="mailto:lucrupconsultoria@gmail.com" className="text-slate-300 hover:text-[#3a8cc6] transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-white uppercase mb-6">Contato</h4>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-[#3a8cc6] flex-shrink-0" />
                  <span>+55 85 99281-1387</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-[#3a8cc6] flex-shrink-0" />
                  <span>lucrupconsultoria@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-white uppercase mb-6">Endereço</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Rua Frei Mansueto 1289,<br />
                Varjota, Fortaleza-CE<br />
                CEP: 60175-157
              </p>
              <p className="text-slate-400 text-xs mt-4">
                CNPJ: 51.310.198/0001-40<br />
                LUCRUP CONSULTORIA EM GESTÃO LTDA
              </p>
            </div>
          </div>

          <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} LUCRUP Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

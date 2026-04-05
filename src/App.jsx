import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen, Clock, Target, CheckCircle2, ChevronRight, GraduationCap, Award, Zap } from 'lucide-react';

const App = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const menuItems = ["O Método", "Experiência", "Resultados", "Garantia"];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="glass" style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        zIndex: 1000,
        borderRadius: '100px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <Shield color="#c5a059" size={28} />
          <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#c5a059', letterSpacing: '0.05em' }}>LUCAS SILVA</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
          {menuItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{item}</a>
          ))}
        </div>
        <a href="#cta" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>QUERO MINHA VAGA</a>
      </nav>

      {/* Hero Section */}
      <section className="hero container" id="home">
        <div className="hero-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="glass" style={{ 
              display: 'inline-flex', 
              padding: '0.5rem 1.2rem', 
              borderRadius: '100px', 
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              color: 'var(--accent)',
              fontWeight: 600,
              gap: '8px',
              alignItems: 'center'
            }}>
              <Zap size={16} /> NOVO CONCURSADO STF
            </div>
            <h1 className="text-gradient">Sua Aprovação no STF em 1 Ano Garantida*.</h1>
            <p>
              Eu levei 10 anos para descobrir o atalho que você vai usar agora. 
              Aprenda a estratégia real que me colocou na Suprema Corte e prepare-se para ser o próximo.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#cta" className="btn btn-primary">Começar Jornada <ChevronRight size={20} /></a>
              <a href="#metodo" className="btn btn-outline" style={{ display: 'flex', gap: '10px' }}>O Método</a>
            </div>
            
            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>10 anos</h4>
                <p style={{ fontSize: '0.8rem' }}>Experiência Real</p>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'var(--glass-border)' }}></div>
              <div>
                <h4 style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>STF</h4>
                <p style={{ fontSize: '0.8rem' }}>Aprovação Máxima</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-image-container"
          >
            <img src="/lucas-posse.png" alt="Lucas Silva Posse STF" className="hero-image" />
            <motion.div 
              className="glass floating-badge"
              style={{ padding: '1rem 1.5rem' }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ background: 'var(--accent)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award color="#000" size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>Status</div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>Empossado no STF</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos WhatsApp (Provas Sociais) */}
      <section className="container" id="resultados" style={{ padding: '4rem 0' }}>
        <div className="section-title">
          <h2 className="text-gradient">O que dizem os alunos*</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Resultados reais de quem já está aplicando o método.</p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {/* Chat 1 */}
          <motion.div {...fadeIn} className="whatsapp-chat">
            <div className="whatsapp-name">Carlos - Analista Judiciário</div>
            <div className="chat-bubble bubble-received">
              Lucas, bom dia! Cara, a técnica de discursivas do Typewriter mudou meu jogo. Tirei 9.5 no simulado deste fds!
              <div className="chat-time">09:12</div>
            </div>
            <div className="chat-bubble bubble-sent">
              Fala Carlos! Sensacional, esse é o caminho. A banca do STF adora esse padrão de resposta.
              <div className="chat-time">09:15</div>
            </div>
          </motion.div>

          {/* Chat 2 */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="whatsapp-chat">
            <div className="whatsapp-name">Mariana - Estudante</div>
            <div className="chat-bubble bubble-received">
              Finalmente entendi como organizar as matérias com o Shuffler. Tô voando no cronograma, parece que as horas rendem o dobro.
              <div className="chat-time">14:30</div>
            </div>
            <div className="chat-bubble bubble-sent">
              É isso, Mari! Eficiência é o segredo para passar em 1 ano. Continua firme!
              <div className="chat-time">14:45</div>
            </div>
          </motion.div>

          {/* Chat 3 */}
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="whatsapp-chat">
            <div className="whatsapp-name">Ricardo - Concurseiro</div>
            <div className="chat-bubble bubble-received">
              Mestre, fechei o edital de Constitucional em 3 semanas com o Scheduler. Surreal a diferença desse método. Valeu demais!
              <div className="chat-time">19:05</div>
            </div>
            <div className="chat-bubble bubble-sent">
              Boa, Ricardo! Agora foca nas peças que a vaga é sua. 🚀
              <div className="chat-time">19:10</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Autoridade / Prova Social */}
      <section className="container" id="experiencia" style={{ background: 'rgba(255,255,255,0.01)', borderRadius: '48px', padding: '6rem 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>"Foram 10 anos de estudo, mas a vitória veio com <span style={{ color: 'var(--accent)' }}>Estratégia</span>."</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Muitos acreditam que para passar em grandes tribunais é preciso apenas "sentar a bunda na cadeira". Eu descobri que sem um método direcionado para a banca e para o cargo, você apenas perde tempo.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Minha missão é encurtar o seu caminho. O que eu levei uma década para masterizar, eu vou te ensinar para que você conquiste sua vaga em até 12 meses.
            </p>
          </div>
          <div className="glass" style={{ padding: '3rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '2rem', right: '2rem' }}>
              <Target color="rgba(197, 160, 89, 0.2)" size={120} />
            </div>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>A Jornada de Lucas</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: "10 Anos de Concursos", desc: "Vivi na pele todas as mudanças das bancas." },
                { title: "Especialista em Tribunais", desc: "Foco absoluto no judiciário de alta performance." },
                { title: "Aprovado no STF", desc: "A conquista final servindo à Suprema Corte." }
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 color="var(--accent)" size={24} style={{ marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* O Protocolo STF: Metodologia Real */}
      <section className="container" id="metodo" style={{ overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
          <div>
            <div className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>
              <h2 className="text-gradient">O Protocolo STF</h2>
              <p style={{ color: 'var(--text-secondary)' }}>A metodologia que transforma 10 anos de erros em 1 ano de acertos.</p>
            </div>

            <div className="protocol-timeline">
              <motion.div {...fadeIn} className="protocol-item">
                <span className="protocol-number">ETAPA 01</span>
                <h3>Antecipação de Edital</h3>
                <p>Se você começa a estudar quando o edital sai, você já perdeu. Nosso radar antecipa as tendências da Suprema Corte meses antes da publicação.</p>
              </motion.div>

              <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="protocol-item">
                <span className="protocol-number">ETAPA 02</span>
                <h3>Raio-X de Incidência</h3>
                <p>Análise minuciosa de cada disciplina. Você vai focar 80% do seu tempo nos 20% do conteúdo que realmente garantem sua vaga.</p>
              </motion.div>

              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="protocol-item">
                <span className="protocol-number">ETAPA 03</span>
                <h3>O Mix de Performance</h3>
                <p>Equilíbrio cirúrgico entre aulas, resumos e o combustível da aprovação: <strong>MUITA QUESTÃO</strong>.</p>
              </motion.div>

              <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="protocol-item">
                <span className="protocol-number">ETAPA 04</span>
                <h3>Estudo Reverso</h3>
                <p>Invertemos a lógica tradicional. Você começa pela questão e usa a teoria como ferramenta de solução, não como fim. É a engenharia reversa da prova.</p>
              </motion.div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div 
              className="glass lead-capture"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Quero a Minha Vaga</h3>
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                Preencha os dados abaixo para qualificação na mentoria exclusiva.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <input 
                  type="text" 
                  placeholder="Nome Completo" 
                  className="form-input"
                  style={{ 
                    padding: '1rem', 
                    borderRadius: '12px', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--glass-border)',
                    color: '#fff',
                    outline: 'none'
                  }} 
                />
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="form-input"
                  style={{ 
                    padding: '1rem', 
                    borderRadius: '12px', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid var(--glass-border)',
                    color: '#fff',
                    outline: 'none'
                  }} 
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input 
                    type="text" 
                    placeholder="Telefone" 
                    className="form-input"
                    style={{ 
                      padding: '1rem', 
                      borderRadius: '12px', 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid var(--glass-border)',
                      color: '#fff',
                      outline: 'none'
                    }} 
                  />
                  <input 
                    type="text" 
                    placeholder="CPF" 
                    className="form-input"
                    style={{ 
                      padding: '1rem', 
                      borderRadius: '12px', 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid var(--glass-border)',
                      color: '#fff',
                      outline: 'none'
                    }} 
                  />
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '0.8rem', fontWeight: 600 }}>DISPONIBILIDADE DE INVESTIMENTO:</p>
                  <select 
                    style={{ 
                      width: '100%',
                      padding: '1rem', 
                      borderRadius: '12px', 
                      background: '#0a1128', 
                      border: '1px solid var(--glass-border)',
                      color: '#fff',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="" disabled selected>Selecione o range...</option>
                    <option value="0-2000">R$ 0 a R$ 2.000</option>
                    <option value="2000-7000">R$ 2.000 a R$ 7.000</option>
                    <option value="7000-15000">R$ 7.000 a R$ 15.000</option>
                  </select>
                </div>
                
                <button className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', marginTop: '1rem' }}>
                  Enviar Candidatura e Ver Método
                </button>
              </div>
              <p style={{ marginTop: '1.2rem', fontSize: '0.7rem', opacity: 0.5, textAlign: 'center' }}>
                Dados protegidos por criptografia de ponta a ponta.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container" id="cta" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass" 
          style={{ padding: '5rem 2rem', border: '1px solid var(--accent)' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Pronto para o Próximo Nível?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            As vagas para a mentoria são limitadas para garantir o acompanhamento de alta performance. 
            Não perca a chance de ter o mentor que já chegou onde você quer estar.
          </p>
          <button className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }}>
            Garanta Sua Vaga Agora
          </button>
          <p style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.6 }}>
            Inscrições abertas por tempo limitado.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container" style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield color="var(--accent)" size={20} />
          <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--accent)' }}>LUCAS SILVA</span>
        </div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          © 2026 Mentoria Lucas Silva. Todos os direitos reservados.
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Termos</a>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacidade</a>
        </div>
      </footer>
      <div style={{ textAlign: 'center', padding: '2rem', fontSize: '0.7rem', opacity: 0.5, borderTop: '1px solid var(--glass-border)' }}>
        *A garantia de aprovação está condicionada ao cumprimento integral do cronograma, metas e orientações do método Lucas Silva. 
        Resultados podem variar de acordo com a dedicação individual.
      </div>
    </div>
  );
};

export default App;

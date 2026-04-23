import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar Pubblica */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--glass-border)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            className="animate-glow"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "var(--accent-gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              boxShadow: "0 0 15px rgba(0, 240, 255, 0.4)",
            }}
          >
            ⚡
          </div>
          <span className="text-gradient" style={{ fontSize: 20, fontWeight: 800 }}>
            Creator Life OS
          </span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#features" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500, alignSelf: "center" }}>Caratteristiche</a>
          <a href="#pricing" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 14, fontWeight: 500, alignSelf: "center", marginRight: 16 }}>Prezzi</a>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="premium-btn primary" style={{ fontSize: 14, padding: "8px 24px" }}>
              Accedi / Registrati
            </button>
          </Link>
        </div>
      </nav>

      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section
          style={{
            padding: "100px 20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 20,
              border: "1px solid rgba(0,240,255,0.3)",
              background: "rgba(0,240,255,0.05)",
              color: "var(--accent-color)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Lancio Ufficiale V1.0
          </div>
          <h1
            style={{
              fontSize: "4.5rem",
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.1,
              maxWidth: 900,
              color: "#fff",
            }}
          >
             L'unico Sistema Operativo per <br />
            <span className="text-gradient">Content Creator</span> Professionisti
          </h1>
          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          >
            Gestisci video, entrate, accordi con i brand e le tue abitudini di vita. Tutto in un'unica piattaforma fluida, veloce e sincronizzata nel cloud.
          </p>

          {/* Hero Video Showcase - Cinematic Style */}
          <div
            className="glass-panel"
            style={{
              width: "100%",
              maxWidth: 800,
              marginTop: 20,
              position: "relative",
              overflow: "hidden",
              padding: 0,
              border: "1px solid rgba(0, 240, 255, 0.2)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 20px rgba(0,240,255,0.1)",
              borderRadius: 20,
            }}
          >
            <video
              src="/hero-video.mp4#t=0,10"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            />
            {/* Cinematic Overlays */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%)", zIndex: 2, pointerEvents: "none" }} />
            <div className="animate-glow" style={{ position: "absolute", bottom: 20, right: 20, padding: "4px 12px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", borderRadius: 20, fontSize: 10, color: "var(--accent-color)", zIndex: 3, border: "1px solid var(--accent-color)" }}>PRO KERNEL V1.0</div>
          </div>

          <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button
                className="premium-btn animate-float"
                style={{
                  background: "var(--accent-gradient)",
                  color: "#000",
                  padding: "16px 36px",
                  fontSize: 16,
                  fontWeight: 700,
                  borderRadius: 12,
                  boxShadow: "0 8px 30px rgba(0, 240, 255, 0.4)",
                  border: "none",
                }}
              >
                Inizia Prova Gratuita (14 gg) 🚀
              </button>
            </Link>
            <a href="#features" style={{ textDecoration: "none" }}>
              <button className="premium-btn secondary" style={{ padding: "16px 36px", fontSize: 16, borderRadius: 12 }}>
                Scopri di più
              </button>
            </a>
          </div>
        </section>
        {/* Features Section */}
        <section id="features" style={{ padding: "80px 20px", background: "rgba(0,0,0,0.5)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 className="text-gradient" style={{ textAlign: "center", fontSize: 40, marginBottom: 60 }}>
              Il Tuo Nuovo Ecosistema Pro
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 30 }}>
              <div className="glass-card" style={{ padding: 30 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>📱</div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>Preview Studio Avanzato</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Testa i tuoi contenuti visivi in un simulatore interattivo di smartphone per Instagram, TikTok e YouTube.
                </p>
              </div>
              <div className="glass-card" style={{ padding: 30 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>📊</div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>Money Tracker & Grafici</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Statistiche, Line Chart di Simulazione Crescita e Grafici a Torta interattivi. Analizza dove entrano i soldi.
                </p>
              </div>
              <div className="glass-card" style={{ padding: 30 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>⏰</div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>Routine Personalizzabile</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Crea da zero i tuoi slot giornalieri con il calendario dinamicamente ordinato al millesimo di secondo.
                </p>
              </div>
              <div className="glass-card" style={{ padding: 30 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>🎨</div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>God-Mode Theme</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Non il solito noioso dark-theme. Switcha live tra atmosfere Ciano, Arancio Cyber, Matrix e Haze Galattico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ padding: "100px 20px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 className="text-gradient" style={{ fontSize: 40, marginBottom: 20 }}>
              Piani Semplici per Creator Folli
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 18, marginBottom: 60, maxWidth: 600, margin: "0 auto 60px" }}>
              Inizia a tracciare la tua carriera gratuitamente. Sblocca il sistema operativo completo quando sei pronto a scalare.
            </p>

            <div style={{ display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center" }}>
              {/* Piano Base */}
              <div className="glass-panel" style={{ flex: "1", minWidth: 300, maxWidth: 400, padding: 40, display: "flex", flexDirection: "column", textAlign: "left" }}>
                <h3 style={{ fontSize: 24, margin: "0 0 10px" }}>Starter</h3>
                <p style={{ color: "var(--text-secondary)", margin: "0 0 24px" }}>Perfetto per chi sta lanciando i primi video.</p>
                <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 30 }}>€0<span style={{ fontSize: 16, color: "var(--text-secondary)", fontWeight: 500 }}>/mese</span></div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", flex: 1 }}>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>✅</span> <span>Fino a 30 contenuti</span></li>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>✅</span> <span>Tracciamento entrate base</span></li>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>✅</span> <span>Cloud Sync limitato</span></li>
                </ul>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button className="premium-btn secondary" style={{ width: "100%", padding: 16, fontSize: 16, borderRadius: 12 }}>Inizia Gratis</button>
                </Link>
              </div>

              {/* Piano Pro */}
              <div className="glass-panel" style={{ flex: "1", minWidth: 300, maxWidth: 400, padding: 40, display: "flex", flexDirection: "column", textAlign: "left", borderColor: "var(--accent-color)", position: "relative" }}>
                <div className="animate-glow" style={{ position: "absolute", top: -12, right: 30, background: "var(--accent-gradient)", color: "#000", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 800, border: "2px solid #000" }}>PROVA GRATUITA 14 GIORNI!</div>
                <h3 style={{ fontSize: 24, margin: "0 0 10px", color: "var(--accent-color)" }}>Pro</h3>
                <p style={{ color: "var(--text-secondary)", margin: "0 0 24px" }}>Per i Creator che fatturano e scalano col turbo.</p>
                <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 30 }}>€5<span style={{ fontSize: 16, color: "var(--text-secondary)", fontWeight: 500 }}>/mese</span></div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", flex: 1 }}>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>⚡</span> <span>Accesso completo a tutti i grafici</span></li>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>⚡</span> <span>Simulatore Preview Studio</span></li>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>⚡</span> <span>Personalizzazione colori estrema</span></li>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>⚡</span> <span>Nessun limite sulle entry al DB</span></li>
                </ul>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button className="premium-btn" style={{ width: "100%", padding: 16, fontSize: 16, borderRadius: 12, background: "var(--accent-gradient)", color: "#000", border: "none", fontWeight: 700 }}>Riscatta Prova Gratuita</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Landing */}
      <footer style={{ padding: "40px 20px", textAlign: "center", borderTop: "1px solid var(--glass-border)", color: "var(--text-secondary)", fontSize: 14 }}>
        Creator Life OS © {new Date().getFullYear()}. Realizzato da Prodigi Digitali.
      </footer>
    </div>
  );
}

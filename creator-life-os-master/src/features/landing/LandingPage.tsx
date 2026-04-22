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
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Gestisci video, entrate, accordi con i brand e le tue abitudini di vita. Tutto in un'unica piattaforma fluida, veloce e sincronizzata nel cloud.
          </p>
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

        {/* Dashboard Mockup Showcase */}
        <section style={{ padding: "0 20px 100px", display: "flex", justifyContent: "center" }}>
          <div
            className="glass-panel"
            style={{
              width: "100%",
              maxWidth: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              padding: 0,
            }}
          >
            <video
              src="/demo-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            />
            
            {/* Elementi decorativi sfocati nel mockup */}
            <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, background: "#7000ff", filter: "blur(100px)", opacity: 0.3 }} />
            <div style={{ position: "absolute", bottom: -50, left: -50, width: 200, height: 200, background: "#00f0ff", filter: "blur(100px)", opacity: 0.3 }} />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ padding: "80px 20px", background: "rgba(0,0,0,0.5)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 className="text-gradient" style={{ textAlign: "center", fontSize: 40, marginBottom: 60 }}>
              Perché scegliere Creator Life OS?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 30 }}>
              <div className="glass-card" style={{ padding: 30 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>🎬</div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>Content Machine</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Traccia le tue idee, copioni e lo stato di pubblicazione dei tuoi contenuti su tutte le piattaforme.
                </p>
              </div>
              <div className="glass-card" style={{ padding: 30 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>💰</div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>Money Tracker</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Monitora ogni centesimo, dalle entrate pubblicitarie alle spese per l'attrezzatura, sempre sotto controllo.
                </p>
              </div>
              <div className="glass-card" style={{ padding: 30 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>🤝</div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>Gestione Brand</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Salva i contatti aziendali, tieni d'occhio lo status delle trattative e le scadenze delle fatture.
                </p>
              </div>
              <div className="glass-card" style={{ padding: 30 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>☁️</div>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>Salvataggio Sicuro</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Il tuo ecosistema si sincronizza immediatamente su cloud. Nessun rischio di perdere i tuoi preziosi dati creativi. 
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
                <div style={{ position: "absolute", top: -12, right: 30, background: "var(--accent-gradient)", color: "#000", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>14 GIORNI DI PROVA</div>
                <h3 style={{ fontSize: 24, margin: "0 0 10px", color: "var(--accent-color)" }}>Pro</h3>
                <p style={{ color: "var(--text-secondary)", margin: "0 0 24px" }}>Per i Creator che fatturano e scalano.</p>
                <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 30 }}>€15<span style={{ fontSize: 16, color: "var(--text-secondary)", fontWeight: 500 }}>/mese</span></div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", flex: 1 }}>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>⚡</span> <span>Contenuti illimitati</span></li>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>⚡</span> <span>Bilancio Entrate/Uscite illimitato</span></li>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>⚡</span> <span>Gestione Brand Deals completa</span></li>
                  <li style={{ marginBottom: 12, display: "flex", gap: 10 }}><span>⚡</span> <span>Esportazioni PDF/CSV illimitate</span></li>
                </ul>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button className="premium-btn" style={{ width: "100%", padding: 16, fontSize: 16, borderRadius: 12, background: "var(--accent-gradient)", color: "#000", border: "none", fontWeight: 700 }}>Inizia Ora</button>
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

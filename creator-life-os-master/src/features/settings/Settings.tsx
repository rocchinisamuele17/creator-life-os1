import { useApp } from "../../context/AppContext";

export function Settings() {
  const { state, setState } = useApp();

  const themes = [
    { id: "cyan", name: "Viola Ciano", color: "#00f0ff", description: "Il tema predefinito Neon Tech." },
    { id: "orange", name: "Fuoco Cyber", color: "#ff7300", description: "Energia, azione e aggressività visiva." },
    { id: "purple", name: "Haze Galattico", color: "#b026ff", description: "Vibe scura, mistica e da lofi hip-hop." },
    { id: "green", name: "Matrix Hacker", color: "#00ff41", description: "Minimalista, crudo, terminal-style." }
  ] as const;

  const currentTheme = state.settings?.theme || "cyan";

  const changeTheme = (themeId: "cyan" | "orange" | "purple" | "green") => {
    setState((s) => ({
      ...s,
      settings: { ...s.settings, theme: themeId }
    }));
  };

  return (
    <div>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 20px" }}>⚙️ Impostazioni OS</h2>
      
      <div className="glass-panel" style={{ padding: 24 }}>
        <h3 style={{ margin: "0 0 16px", fontSize: 18 }}>🎨 Tema Interfaccia</h3>
        <p style={{ color: "var(--text-secondary)", marginBottom: 24 }}>
          Scegli "l'Aura" del tuo sistema operativo. Il cambiamento si applicherà immediatamente.
        </p>
        
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {themes.map((t) => (
            <div 
              key={t.id} 
              onClick={() => changeTheme(t.id)}
              style={{
                flex: "1 1 200px",
                padding: 20,
                borderRadius: 12,
                border: currentTheme === t.id ? `2px solid ${t.color}` : "1px solid rgba(255,255,255,0.1)",
                background: currentTheme === t.id ? "rgba(255,255,255,0.05)" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              <div 
                style={{ 
                  width: 32, 
                  height: 32, 
                  borderRadius: "50%", 
                  background: t.color,
                  marginBottom: 12,
                  boxShadow: `0 0 15px ${t.color}80`
                }} 
              />
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>{t.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{t.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

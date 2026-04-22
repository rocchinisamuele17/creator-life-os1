export type TabId = "dashboard" | "content" | "money" | "life" | "brands";

interface Tab {
  id: TabId;
  label: string;
}

export const TABS: Tab[] = [
  { id: "dashboard", label: "🏠 Dashboard" },
  { id: "content", label: "🎬 Content Machine" },
  { id: "money", label: "💰 Money Tracker" },
  { id: "life", label: "🧘 Vita Personale" },
  { id: "brands", label: "🤝 Brand Deals" },
];

interface TabNavProps {
  active: TabId;
  onChange: (id: TabId) => void;
}

export function TabNav({ active, onChange }: TabNavProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        overflowX: "auto",
        paddingBottom: 16,
        paddingTop: 8,
      }}
    >
      {TABS.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={isActive ? "glass-panel" : ""}
            style={{
              padding: "10px 18px",
              border: isActive ? "1px solid var(--glass-border)" : "1px solid transparent",
              borderRadius: "12px",
              background: isActive ? "var(--glass-bg)" : "transparent",
              color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
              fontSize: 13,
              fontWeight: isActive ? 600 : 500,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.2)" : "none",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderRadius = "12px";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

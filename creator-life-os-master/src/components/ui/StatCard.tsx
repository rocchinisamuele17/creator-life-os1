interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  accent?: string;
}

export function StatCard({ label, value, sub, accent }: StatCardProps) {
  return (
    <div
      className="glass-card animate-float"
      style={{
        padding: "20px 22px",
        flex: 1,
        minWidth: 140,
        display: "flex",
        flexDirection: "column",
        gap: 4
      }}
    >
      <div
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.6)",
          textTransform: "uppercase",
          letterSpacing: 1.5,
          fontWeight: 600
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 32,
          fontWeight: 800,
          color: accent || "#fff",
          lineHeight: 1.1,
          textShadow: accent ? `0 0 10px ${accent}40` : "none"
        }}
      >
        {value}
      </div>
      {sub && (
        <div
          style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { StatCard } from "../../components/ui/StatCard";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { FormField, SelectField, AddButton } from "../../components/ui/FormField";
import type { MoneyEntry, MoneyExpense } from "../../types";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ENTRY_TYPES = ["Prodotto", "Sponsorship", "Affiliazione", "Servizio", "Freelance"];
const EXPENSE_CATEGORIES = ["Tool", "Infra", "Attrezzatura", "Marketing", "Formazione"];

export function MoneyTracker() {
  const { state, setState } = useApp();
  const [showEntrata, setShowEntrata] = useState(false);
  const [showSpesa, setShowSpesa] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const [entForm, setEntForm] = useState({ source: "", amount: "", type: ENTRY_TYPES[0], date: today });
  const [spForm, setSpForm] = useState({ item: "", amount: "", category: EXPENSE_CATEGORIES[0], date: today });

  const totalIn = state.entrate.reduce((s, e) => s + e.amount, 0);
  const totalOut = state.spese.reduce((s, e) => s + e.amount, 0);
  const net = totalIn - totalOut;

  const byType: Record<string, number> = {};
  state.entrate.forEach((e) => {
    byType[e.type] = (byType[e.type] || 0) + e.amount;
  });

  const addEntrata = () => {
    const amount = parseFloat(entForm.amount);
    if (!entForm.source.trim() || isNaN(amount) || amount <= 0) return;
    const entry: MoneyEntry = { source: entForm.source.trim(), amount, type: entForm.type, date: entForm.date };
    setState((s) => ({ ...s, entrate: [...s.entrate, entry] }));
    setEntForm({ source: "", amount: "", type: ENTRY_TYPES[0], date: today });
    setShowEntrata(false);
  };

  const addSpesa = () => {
    const amount = parseFloat(spForm.amount);
    if (!spForm.item.trim() || isNaN(amount) || amount <= 0) return;
    const expense: MoneyExpense = { item: spForm.item.trim(), amount, category: spForm.category, date: spForm.date };
    setState((s) => ({ ...s, spese: [...s.spese, expense] }));
    setSpForm({ item: "", amount: "", category: EXPENSE_CATEGORIES[0], date: today });
    setShowSpesa(false);
  };

  const deleteEntrata = (idx: number) => {
    setState((s) => ({ ...s, entrate: s.entrate.filter((_, i) => i !== idx) }));
  };

  const deleteSpesa = (idx: number) => {
    setState((s) => ({ ...s, spese: s.spese.filter((_, i) => i !== idx) }));
  };

  return (
    <div>
      <h2
        style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 20px" }}
      >
        💰 Money Tracker
      </h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
        <StatCard label="Entrate" value={`€${totalIn.toLocaleString()}`} accent="#10b981" />
        <StatCard label="Spese" value={`€${totalOut}`} accent="#ef4444" />
        <StatCard
          label="Netto"
          value={`€${net.toLocaleString()}`}
          accent={net > 0 ? "#10b981" : "#ef4444"}
        />
      </div>

      <div style={{ display: "flex", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
        <div
          className="glass-panel"
          style={{
            flex: 1,
            minWidth: 300,
            padding: 18,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: 14 }}>
            Distribuzione Entrate (Pie Chart)
          </div>
          <div style={{ height: 260, width: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={Object.entries(byType).map(([name, value]) => ({ name, value }))}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {Object.keys(byType).map((_, index) => {
                    const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899'];
                    return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />;
                  })}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: 8, color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value: number) => `€${value}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Entrate */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: 18,
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>📥 Entrate</div>
          <AddButton onClick={() => setShowEntrata(!showEntrata)} label="Entrata" />
        </div>

        {showEntrata && (
          <div
            style={{
              background: "rgba(16,185,129,0.06)",
              border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: 10,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
              <FormField
                label="Fonte"
                value={entForm.source}
                onChange={(e) => setEntForm({ ...entForm, source: e.target.value })}
                placeholder="Es. Template Notion"
              />
              <FormField
                label="Importo (€)"
                type="number"
                value={entForm.amount}
                onChange={(e) => setEntForm({ ...entForm, amount: e.target.value })}
                placeholder="0"
              />
              <FormField
                label="Data"
                type="date"
                value={entForm.date}
                onChange={(e) => setEntForm({ ...entForm, date: e.target.value })}
              />
              <SelectField
                label="Tipo"
                value={entForm.type}
                onChange={(v) => setEntForm({ ...entForm, type: v })}
                options={ENTRY_TYPES}
              />
            </div>
            <button
              onClick={addEntrata}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                border: "none",
                background: "#10b981",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Aggiungi Entrata
            </button>
          </div>
        )}

        {state.entrate.map((e, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
              borderBottom:
                i < state.entrate.length - 1
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "none",
            }}
          >
            <div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{e.source}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{e.type}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#10b981" }}>+€{e.amount}</span>
              <button
                onClick={() => deleteEntrata(i)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  fontSize: 14,
                  padding: "2px 4px",
                }}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Spese */}
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: 18,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>📤 Spese</div>
          <AddButton onClick={() => setShowSpesa(!showSpesa)} label="Spesa" />
        </div>

        {showSpesa && (
          <div
            style={{
              background: "rgba(239,68,68,0.06)",
              border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: 10,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
              <FormField
                label="Voce"
                value={spForm.item}
                onChange={(e) => setSpForm({ ...spForm, item: e.target.value })}
                placeholder="Es. Canva Pro"
              />
              <FormField
                label="Importo (€)"
                type="number"
                value={spForm.amount}
                onChange={(e) => setSpForm({ ...spForm, amount: e.target.value })}
                placeholder="0"
              />
              <FormField
                label="Data"
                type="date"
                value={spForm.date}
                onChange={(e) => setSpForm({ ...spForm, date: e.target.value })}
              />
              <SelectField
                label="Categoria"
                value={spForm.category}
                onChange={(v) => setSpForm({ ...spForm, category: v })}
                options={EXPENSE_CATEGORIES}
              />
            </div>
            <button
              onClick={addSpesa}
              style={{
                padding: "7px 16px",
                borderRadius: 8,
                border: "none",
                background: "#ef4444",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Aggiungi Spesa
            </button>
          </div>
        )}

        {state.spese.map((e, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
              borderBottom:
                i < state.spese.length - 1
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "none",
            }}
          >
            <div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{e.item}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{e.category}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#ef4444" }}>−€{e.amount}</span>
              <button
                onClick={() => deleteSpesa(i)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  fontSize: 14,
                  padding: "2px 4px",
                }}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

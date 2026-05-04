import { useState } from "react";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const MEALS = ["Breakfast", "Lunch", "Dinner"];

const pastelColors = {
  Monday: "#FFE4E1",
  Tuesday: "#E1F5E1",
  Wednesday: "#E1EEFF",
  Thursday: "#FFF5E1",
  Friday: "#F5E1FF",
};

const dayAccents = {
  Monday: "#FF8C7A",
  Tuesday: "#6DBF6D",
  Wednesday: "#6AA3E8",
  Thursday: "#FFB347",
  Friday: "#C47AE8",
};

const styles = {
  app: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #FFF9F4 0%, #FFF0E8 50%, #FFF5FB 100%)",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    padding: "0 0 60px 0",
  },
  header: {
    textAlign: "center",
    padding: "48px 24px 32px",
    borderBottom: "2px dashed #F5C9B0",
    marginBottom: "40px",
  },
  tagline: {
    fontSize: "12px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: "#C8896A",
    marginBottom: "12px",
    fontFamily: "'Georgia', serif",
  },
  title: {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: "normal",
    color: "#3D2314",
    margin: "0 0 12px",
    letterSpacing: "-1px",
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: "14px",
    color: "#9B7060",
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
  },
  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    justifyContent: "center",
    marginTop: "20px",
  },
  badge: {
    background: "white",
    border: "1.5px solid #F0C8B0",
    borderRadius: "20px",
    padding: "5px 14px",
    fontSize: "11px",
    color: "#C8896A",
    letterSpacing: "0.5px",
  },
  formSection: {
    maxWidth: "680px",
    margin: "0 auto 40px",
    padding: "0 20px",
  },
  formCard: {
    background: "white",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 4px 32px rgba(200,137,106,0.12)",
    border: "1.5px solid #F5DDD0",
  },
  formTitle: {
    fontSize: "18px",
    color: "#3D2314",
    marginBottom: "24px",
    textAlign: "center",
  },
  fieldRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "11px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#9B7060",
  },
  input: {
    border: "1.5px solid #F0C8B0",
    borderRadius: "12px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "#3D2314",
    background: "#FFFAF7",
    outline: "none",
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box",
  },
  checkboxGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "24px",
  },
  checkLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#FFFAF7",
    border: "1.5px solid #F0C8B0",
    borderRadius: "20px",
    padding: "7px 14px",
    cursor: "pointer",
    fontSize: "13px",
    color: "#3D2314",
    userSelect: "none",
    transition: "all 0.2s",
  },
  generateBtn: {
    width: "100%",
    background: "linear-gradient(135deg, #E8866A, #D4614A)",
    color: "white",
    border: "none",
    borderRadius: "16px",
    padding: "16px",
    fontSize: "15px",
    letterSpacing: "1px",
    cursor: "pointer",
    fontFamily: "inherit",
    boxShadow: "0 4px 16px rgba(212,97,74,0.3)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  planSection: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },
  planHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
    flexWrap: "wrap",
    gap: "12px",
  },
  planTitle: {
    fontSize: "24px",
    color: "#3D2314",
    fontWeight: "normal",
  },
  regenerateBtn: {
    background: "white",
    border: "1.5px solid #F0C8B0",
    borderRadius: "12px",
    padding: "8px 18px",
    fontSize: "13px",
    color: "#C8896A",
    cursor: "pointer",
    fontFamily: "inherit",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
    marginBottom: "40px",
  },
  dayCard: {
    borderRadius: "20px",
    padding: "20px",
    border: "1.5px solid",
  },
  dayName: {
    fontSize: "13px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  mealBlock: {
    marginBottom: "14px",
  },
  mealType: {
    fontSize: "9px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#9B7060",
    marginBottom: "3px",
  },
  mealName: {
    fontSize: "14px",
    color: "#3D2314",
    lineHeight: 1.3,
    fontStyle: "italic",
  },
  mealTime: {
    fontSize: "10px",
    color: "#C8896A",
    marginTop: "2px",
  },
  shoppingSection: {
    background: "white",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 4px 32px rgba(200,137,106,0.1)",
    border: "1.5px solid #F5DDD0",
    maxWidth: "1100px",
    margin: "0 auto 0",
  },
  shopTitle: {
    fontSize: "20px",
    color: "#3D2314",
    marginBottom: "24px",
    fontWeight: "normal",
  },
  shopGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "24px",
  },
  shopCategory: {
    borderLeft: "3px solid #F0C8B0",
    paddingLeft: "16px",
  },
  shopCategoryName: {
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#C8896A",
    marginBottom: "10px",
  },
  shopItem: {
    fontSize: "13px",
    color: "#3D2314",
    marginBottom: "6px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  dot: {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "#F0C8B0",
    flexShrink: 0,
  },
  loader: {
    textAlign: "center",
    padding: "60px 20px",
    color: "#C8896A",
    fontSize: "15px",
    fontStyle: "italic",
  },
  spinner: {
    display: "inline-block",
    width: "32px",
    height: "32px",
    border: "3px solid #F5DDD0",
    borderTop: "3px solid #E8866A",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "16px",
  },
};

const defaultPrefs = {
  servings: "4",
  budget: "moderate",
  allergies: "",
  restrictions: [],
};

const restrictionOptions = [
  "Vegetarian", "Gluten-free", "Dairy-free", "Nut-free", "No pork",
];

// ─── SUBSCRIPTION KEYS ──────────────────────────────────────────────────────
// Format: "KEY": "YYYY-MM-DD" (expiry date, one year from purchase date)
// When a new customer buys, add their Gumroad key and set expiry 1 year ahead.
// Example: "FAMILY-XXXX-YYYY": "2027-04-28"
const SUBSCRIPTION_KEYS = {
  "DEMO-1234-ABCD": "2099-12-31",
  "DEMO-5678-EFGH": "2099-12-31",
};
// ────────────────────────────────────────────────────────────────────────────

function LicenceGate({ onUnlock }) {
  const [keyInput, setKeyInput] = useState("");
  const [error, setError] = useState("");

  const handleUnlock = () => {
    const trimmed = keyInput.trim().toUpperCase();
    const expiry = SUBSCRIPTION_KEYS[trimmed];

    if (!expiry) {
      setError("Invalid licence key. Please check your purchase confirmation email and try again.");
      return;
    }

    const today = new Date();
    const expiryDate = new Date(expiry);

    if (today > expiryDate) {
      setError("Your subscription has expired. Please renew to continue using the planner.");
      return;
    }

    // Show how many days remain
    const daysLeft = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
    onUnlock(daysLeft);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #FFF9F4 0%, #FFF0E8 50%, #FFF5FB 100%)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
    }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌿</div>
        <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C8896A", marginBottom: "12px" }}>✦ AI-Powered ✦</div>
        <h1 style={{ fontSize: "clamp(24px, 5vw, 40px)", fontWeight: "normal", color: "#3D2314", margin: "0 0 4px", letterSpacing: "-1px" }}>
          Mama-Made AI
        </h1>
        <p style={{ fontSize: "16px", color: "#C8896A", margin: "0 0 6px" }}>Family Meal Planner</p>
        <p style={{ fontSize: "14px", color: "#9B7060", fontStyle: "italic", margin: 0 }}>
          Quick, nourishing meals your whole family will love
        </p>
      </div>

      <div style={{
        background: "white",
        borderRadius: "24px",
        padding: "36px 32px",
        boxShadow: "0 4px 32px rgba(200,137,106,0.14)",
        border: "1.5px solid #F5DDD0",
        width: "100%",
        maxWidth: "420px",
      }}>
        <h2 style={{ fontSize: "17px", color: "#3D2314", textAlign: "center", marginBottom: "8px", fontWeight: "normal" }}>
          Enter Your Licence Key
        </h2>
        <p style={{ fontSize: "13px", color: "#9B7060", textAlign: "center", marginBottom: "24px", fontStyle: "italic" }}>
          You'll find this in your purchase confirmation email
        </p>

        <input
          style={{
            border: "1.5px solid #F0C8B0",
            borderRadius: "12px",
            padding: "12px 16px",
            fontSize: "15px",
            color: "#3D2314",
            background: "#FFFAF7",
            outline: "none",
            fontFamily: "monospace",
            width: "100%",
            boxSizing: "border-box",
            letterSpacing: "2px",
            textAlign: "center",
            marginBottom: "16px",
          }}
          placeholder="XXXX-XXXX-XXXX"
          value={keyInput}
          onChange={(e) => { setKeyInput(e.target.value); setError(""); }}
          onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
        />

        {error && (
          <div style={{ marginBottom: "14px" }}>
            <p style={{ color: "#E8866A", fontSize: "13px", textAlign: "center", lineHeight: 1.4, margin: "0 0 8px" }}>
              {error}
            </p>
            {error.includes("expired") && (
              <a href="https://gumroad.com" target="_blank" rel="noreferrer" style={{
                display: "block", textAlign: "center", background: "linear-gradient(135deg, #E8866A, #D4614A)",
                color: "white", borderRadius: "12px", padding: "10px", fontSize: "13px", textDecoration: "none",
              }}>
                🔄 Renew — $60/year or $9/month
              </a>
            )}
          </div>
        )}

        <button
          onClick={handleUnlock}
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #E8866A, #D4614A)",
            color: "white",
            border: "none",
            borderRadius: "14px",
            padding: "14px",
            fontSize: "15px",
            letterSpacing: "1px",
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: "0 4px 16px rgba(212,97,74,0.3)",
          }}
        >
          🔓 Unlock Planner
        </button>

        <div style={{ marginTop: "20px", background: "#FFFAF7", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#C8896A", margin: "0 0 12px" }}>Choose a plan</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
            {/* Yearly plan */}
            <div style={{ background: "white", border: "2px solid #E8866A", borderRadius: "12px", padding: "12px 8px", position: "relative" }}>
              <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", background: "#E8866A", color: "white", fontSize: "9px", letterSpacing: "1px", padding: "2px 8px", borderRadius: "10px", whiteSpace: "nowrap" }}>BEST VALUE</div>
              <p style={{ fontSize: "15px", fontWeight: "bold", color: "#3D2314", margin: "6px 0 2px" }}>$60<span style={{ fontSize: "11px", fontWeight: "normal" }}>/year</span></p>
              <p style={{ fontSize: "10px", color: "#9B7060", margin: 0, fontStyle: "italic" }}>Only $5/month</p>
            </div>
            {/* Monthly plan */}
            <div style={{ background: "white", border: "1.5px solid #F0C8B0", borderRadius: "12px", padding: "12px 8px" }}>
              <p style={{ fontSize: "15px", fontWeight: "bold", color: "#3D2314", margin: "6px 0 2px" }}>$9<span style={{ fontSize: "11px", fontWeight: "normal" }}>/month</span></p>
              <p style={{ fontSize: "10px", color: "#9B7060", margin: 0, fontStyle: "italic" }}>Cancel anytime</p>
            </div>
          </div>
          <a href="https://gumroad.com" target="_blank" rel="noreferrer" style={{ color: "#E8866A", fontSize: "12px", textDecoration: "none" }}>
            Don't have a key? Subscribe here →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MealPlanner() {
  const [unlocked, setUnlocked] = useState(false);
  const [daysLeft, setDaysLeft] = useState(null);
  const [prefs, setPrefs] = useState(defaultPrefs);
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [generated, setGenerated] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);

  if (!unlocked) return <LicenceGate onUnlock={(days) => { setUnlocked(true); setDaysLeft(days); }} />;

  const toggleRestriction = (r) => {
    setPrefs((p) => ({
      ...p,
      restrictions: p.restrictions.includes(r)
        ? p.restrictions.filter((x) => x !== r)
        : [...p.restrictions, r],
    }));
  };

  const generatePlan = async () => {
    if (!apiKey.trim()) {
      setError("Please enter your Anthropic API key above to generate a meal plan.");
      return;
    }
    setLoading(true);
    setError("");
    setPlan(null);

    const prompt = `You are a family meal planner. Generate a 5-day (Monday–Friday) meal plan with breakfast, lunch, and dinner for each day.

Requirements:
- Quick & easy meals (under 30 minutes each)
- Budget-friendly (${prefs.budget} budget)
- Healthy and nutritious
- Kid-friendly and family-approved
- Servings: ${prefs.servings} people
${prefs.allergies ? `- Avoid: ${prefs.allergies}` : ""}
${prefs.restrictions.length ? `- Dietary restrictions: ${prefs.restrictions.join(", ")}` : ""}

Also generate a consolidated shopping list grouped by category.

Respond ONLY with a valid JSON object (no markdown, no backticks, no explanation) in this exact format:
{
  "days": [
    {
      "day": "Monday",
      "meals": {
        "Breakfast": { "name": "meal name", "time": "15 mins" },
        "Lunch": { "name": "meal name", "time": "20 mins" },
        "Dinner": { "name": "meal name", "time": "25 mins" }
      }
    }
  ],
  "shopping": {
    "Produce": ["item1", "item2"],
    "Proteins": ["item1"],
    "Dairy": ["item1"],
    "Grains & Pantry": ["item1"],
    "Frozen": ["item1"],
    "Other": ["item1"]
  }
}`;

    try {
      const response = await fetch("/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      const text = data.content.map((i) => i.text || "").join("");
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setPlan(parsed);
      setGenerated(true);
    } catch (e) {
      setError("Something went wrong generating your plan. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.app}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        button:hover { opacity: 0.88; transform: translateY(-1px); }
        input:focus, select:focus { border-color: #E8866A !important; box-shadow: 0 0 0 3px rgba(232,134,106,0.1); }
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.tagline}>✦ AI-Powered ✦</div>
        <h1 style={styles.title}>Mama-Made AI</h1>
        <p style={{ ...styles.subtitle, fontSize: "16px", color: "#C8896A", fontStyle: "normal", marginBottom: "4px" }}>Family Meal Planner</p>
        <p style={styles.subtitle}>Quick, nourishing meals your whole family will love</p>
        {daysLeft !== null && (
          <div style={{
            display: "inline-block",
            marginTop: "14px",
            background: daysLeft < 30 ? "#FFF0E8" : "#F0FFF0",
            border: `1.5px solid ${daysLeft < 30 ? "#E8866A" : "#6DBF6D"}`,
            borderRadius: "20px",
            padding: "6px 16px",
            fontSize: "12px",
            color: daysLeft < 30 ? "#C8896A" : "#4A9A4A",
          }}>
            {daysLeft < 30
              ? `⚠️ Subscription expires in ${daysLeft} days — renew to keep access`
              : `✅ Subscription active · ${daysLeft} days remaining`}
          </div>
        )}
        <div style={styles.badges}>
          {["⏱ Under 30 mins", "💚 Healthy", "👨‍👩‍👧 Kid-friendly", "💰 Budget-smart"].map((b) => (
            <span key={b} style={styles.badge}>{b}</span>
          ))}
        </div>
      </div>

      {/* Form */}
      <div style={styles.formSection}>
        <div style={styles.formCard}>
          <h2 style={styles.formTitle}>Tell us about your family 🌿</h2>

          {/* API Key Field */}
          <div style={{ marginBottom: "20px", background: "#FFFAF7", border: "1.5px dashed #F0C8B0", borderRadius: "16px", padding: "16px" }}>
            <label style={{ ...styles.label, display: "block", marginBottom: "6px" }}>🔑 Anthropic API Key (for testing)</label>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <input
                style={{ ...styles.input, flex: 1, fontFamily: "monospace", fontSize: "12px" }}
                type={showKey ? "text" : "password"}
                placeholder="sk-ant-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <button
                onClick={() => setShowKey((v) => !v)}
                style={{ background: "white", border: "1.5px solid #F0C8B0", borderRadius: "10px", padding: "10px 12px", cursor: "pointer", fontSize: "12px", color: "#9B7060", whiteSpace: "nowrap" }}
              >{showKey ? "Hide" : "Show"}</button>
            </div>
            <p style={{ fontSize: "11px", color: "#B09080", marginTop: "8px", marginBottom: 0 }}>
              Your key is never saved or stored. Get yours at console.anthropic.com
            </p>
          </div>

          <div style={styles.fieldRow}>
            <div style={styles.field}>
              <label style={styles.label}>Servings</label>
              <select
                style={styles.input}
                value={prefs.servings}
                onChange={(e) => setPrefs((p) => ({ ...p, servings: e.target.value }))}
              >
                {["2", "3", "4", "5", "6"].map((n) => (
                  <option key={n} value={n}>{n} people</option>
                ))}
              </select>
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Budget</label>
              <select
                style={styles.input}
                value={prefs.budget}
                onChange={(e) => setPrefs((p) => ({ ...p, budget: e.target.value }))}
              >
                <option value="tight">Tight</option>
                <option value="moderate">Moderate</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Allergies or foods to avoid</label>
            <input
              style={{ ...styles.input, marginBottom: "16px" }}
              placeholder="e.g. shellfish, eggs, sesame..."
              value={prefs.allergies}
              onChange={(e) => setPrefs((p) => ({ ...p, allergies: e.target.value }))}
            />
          </div>

          <label style={{ ...styles.label, display: "block", marginBottom: "10px" }}>Dietary preferences</label>
          <div style={styles.checkboxGroup}>
            {restrictionOptions.map((r) => (
              <label key={r} style={{
                ...styles.checkLabel,
                background: prefs.restrictions.includes(r) ? "#FFF0E8" : "#FFFAF7",
                borderColor: prefs.restrictions.includes(r) ? "#E8866A" : "#F0C8B0",
              }}>
                <input
                  type="checkbox"
                  checked={prefs.restrictions.includes(r)}
                  onChange={() => toggleRestriction(r)}
                  style={{ accentColor: "#E8866A" }}
                />
                {r}
              </label>
            ))}
          </div>

          <button style={styles.generateBtn} onClick={generatePlan} disabled={loading}>
            {loading ? "✨ Creating your plan..." : "✨ Generate My Meal Plan"}
          </button>
          {error && <p style={{ color: "#E8866A", textAlign: "center", marginTop: "12px", fontSize: "14px" }}>{error}</p>}
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div style={styles.loader}>
          <div style={styles.spinner}></div>
          <p>Crafting your perfect week of meals...</p>
        </div>
      )}

      {/* Meal Plan */}
      {plan && (
        <div style={styles.planSection}>
          <div style={styles.planHeader}>
            <h2 style={styles.planTitle}>Your Week of Meals 🍽</h2>
            <button style={styles.regenerateBtn} onClick={generatePlan}>↺ Regenerate</button>
          </div>

          <div style={styles.grid}>
            {plan.days.map((d) => (
              <div
                key={d.day}
                style={{
                  ...styles.dayCard,
                  background: pastelColors[d.day] || "#FFF5F0",
                  borderColor: dayAccents[d.day] + "44" || "#F0C8B0",
                }}
              >
                <div style={{ ...styles.dayName, color: dayAccents[d.day] || "#C8896A" }}>
                  {d.day}
                </div>
                {MEALS.map((meal) => (
                  <div key={meal} style={styles.mealBlock}>
                    <div style={styles.mealType}>{meal}</div>
                    <div style={styles.mealName}>{d.meals[meal]?.name || "—"}</div>
                    <div style={styles.mealTime}>⏱ {d.meals[meal]?.time || ""}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Shopping List */}
          {plan.shopping && (
            <div style={styles.shoppingSection}>
              <h2 style={styles.shopTitle}>🛒 Shopping List</h2>
              <div style={styles.shopGrid}>
                {Object.entries(plan.shopping).map(([cat, items]) =>
                  items && items.length > 0 ? (
                    <div key={cat} style={styles.shopCategory}>
                      <div style={styles.shopCategoryName}>{cat}</div>
                      {items.map((item, i) => (
                        <div key={i} style={styles.shopItem}>
                          <span style={styles.dot}></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

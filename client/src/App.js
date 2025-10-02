import { useState } from "react";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);

  const api = process.env.REACT_APP_API_URL || "http://localhost:3001";

  const checkDate = async () => {
    try {
      const res = await fetch(`${api}/check-date`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          day: Number(day),
          month: Number(month),
          year: Number(year),
        }),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      setResult(data.valid ? "Ngày hợp lệ" : "Ngày không hợp lệ");
    } catch (err) {
      setResult("Lỗi kết nối server");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Check Ngày Hợp Lệ</h2>
      <input
        type="number"
        placeholder="Ngày"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tháng"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <input
        type="number"
        placeholder="Năm"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={checkDate}>Kiểm tra</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;

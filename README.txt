
DualMind: Aris & Elira

This is a frontend interface for a 2-AI debate simulator.
Each character calls a different OpenRouter model via /api/dualmind.

You must host a backend at /api/dualmind that:
- Accepts a JSON body: { question: "..." }
- Returns: { aris: "...", elira: "..." }

Aris and Elira avatars are customizable (add your own PNGs).

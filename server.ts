import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client key lazily as required by security & key-safety guidelines
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is missing");
      }
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // API router for chat
  app.post("/api/chat", async (req, res: express.Response) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "Invalid messages array" });
        return;
      }

      const client = getGeminiClient();
      
      // Convert messages to contents format for generateContent
      const promptParts = messages.map((m: any) => {
        const role = m.sender === "user" ? "user" : "model";
        return {
          role,
          parts: [{ text: m.text }],
        };
      });

      // DYMonth's highly structured system instructions prompt
      const systemInstruction = `당신은 광고보다 성과와 매출에 집중하는 프리미엄 마케팅 에이전시 디와이먼스(DYMonth)의 수석 마케팅 컨설턴트(Chief Marketing Consultant)입니다.

상담 신청을 해온 고객에게 단순 광고 영업사원이 아닌, 신뢰감 있고 풍부한 전문 지식을 가진 실제 마케팅 전문가처럼 든든한 조언과 상담 서비스를 제공합니다.

[역할 및 페르소나]
- 네이버 플레이스 전문 컨설턴트
- 검색광고 전문 컨설턴트
- 블로그 마케팅 전문 컨설턴트
- 홈페이지 마케팅 전문 컨설턴트
- 브랜드 신뢰도 구축 전문 컨설턴트

[상담 목표]
고객의 마케팅적 문제를 정확하게 진단하고 맞춤형 해결방안을 제시하여 신뢰를 얻습니다.

[답변 프로세스 및 방식]
상담 시 대화 중 자연스럽게 다음 정보를 단계적으로 확인하거나 대응하십시오:
1. 고객의 업종을 먼저 파악하십시오. (업종을 아직 제시하지 않은 상태라면 가볍고 정중히 여쭤봅니다.)
2. 현재 광고를 진행하고 있는지 확인해 보십시오.
3. 주요 지역과 타겟 고객 대상을 확인하십시오.
4. 문제의 유력한 원인을 날카롭고 구체적으로 분석하십시오.
   * 플레이스 노출 부족
   * 리뷰 경쟁력 부족
   * 상세정보 최적화 미흡
   * 경쟁업체 대비 콘텐츠 부족
   * 핵심 인텐트 키워드 이탈 등
5. 실질적으로 핵심 매출을 만들어낼 수 있는 마케팅 해법을 전문가 수준으로 구체적 설명하십시오.
6. 대화 속에서 자연스럽게 DYMonth 공식 '무료 진단 폼 신청' 페이지를 통해 더 정밀한 무료 기기 진단을 받도록 제안하십시오.

[말투 및 톤앤매너]
- 신뢰 중심의 차분하고 전문적인 말투, 정중하고 신뢰감 있는 경어체 사용
- 광고나 계약을 무작정 밀어붙이는 영업사원이 아닌, 고객의 마케팅 문제를 함께 진단하고 해결해 나가는 동반자(파트너) 및 컨설턴트의 자세
- 과장된 표현("100% 보장", "무조건 성공", "무조건 매출 상승") 사용 절대 금지
- 날카로우면서도 한눈에 내용이 들어오도록 글머리 기호(•, -) 및 마크다운 볼드 텍스트 등을 활용해 깔끔하고 명료하게 설명 (짧고 핵심적으로 설명)

[상담 종료 진단 정보 유도 형식]
만약 구체적인 맞춤형 무료 정밀진단을 제안하는 시점 혹은 상담을 종료하며 추가 정보를 안내할 때는 다음 가이드를 활용해 가독성 있게 정보를 유도하십시오:

"보다 정확한 분석과 정밀한 맞춤 진단을 위해 아래 정보를 보내주시면, 현업 최고 전문 마케팅 본부장이 심도 있게 실태를 확인한 진단 리포트를 안내해 드리겠습니다.
* 업체명:
* 지역:
* 업종:
* 플레이스 링크 (선택):"

[금지사항]
- 무작위식 유료 광고 계약 종용 금지
- 허무맹랑한 무작위적 상위노출이나 무조건적 가짜 이윤 보증 금지
- "무조건 매출 상승" 같은 강압적이거나 정량적 매출 보증 어휘 사용 절대 지양`;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: promptParts,
        config: {
          systemInstruction,
        },
      });

      res.json({ text: response.text || "죄송합니다. 메시지 생성 과정에서 오류가 발생했습니다." });
    } catch (error: any) {
      console.error("Gemini API Error in /api/chat:", error);
      res.status(500).json({ error: error.message || "서버 내부 오류가 발생했습니다." });
    }
  });

  // Serve Vite in dev mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

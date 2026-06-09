import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<
    { role: string; content: string }[]
  >([]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setChat((prev) => [...prev, userMessage]);

    const res = await fetch(
      "http://localhost:8000/chat",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }
    );

    const data = await res.json();

    setChat((prev) => [
      ...prev,
      {
        role: "assistant",
        content: data.response,
      },
    ]);

    setMessage("");
  }
  const suggestions = [
  "Tell me about SETU",
  "How does Sentilytics work?",
  "Explain Drishti",
  "What are your AI skills?",
  "Why GSoC 2027?",
  "Show tech stack",
];

  return (
    <div
      className="
      bg-black/80
      backdrop-blur-xl
      border border-cyan-500/30
      rounded-3xl
      p-6
      "
    >
      <h2
        className="
        text-3xl
        font-bold
        text-cyan-400
        mb-6
        "
      >
        Ask Ayushi AI
      </h2>

      <div
        className="
        h-[400px]
        overflow-y-auto
        space-y-4
        "
      >
        {chat.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user"
                ? "text-right"
                : "text-left"
            }
          >
            <div
              className="
              inline-block
              px-4 py-3
              rounded-xl
              bg-cyan-500/10
              "
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="
          flex-1
          bg-black
          border
          border-cyan-500/30
          rounded-xl
          px-4 py-3
          "
          placeholder="Ask about SETU..."
        />
        <div className="flex flex-wrap gap-3 mb-6">
  {suggestions.map((item) => (
    <button
      key={item}
      onClick={() => setMessage(item)}
      className="
      px-4
      py-2
      rounded-full
      border
      border-cyan-500/30
      bg-cyan-500/10
      hover:bg-cyan-500/20
      transition
      "
    >
      {item}
    </button>
  ))}
</div>

        <button
          onClick={sendMessage}
          className="
          px-6
          py-3
          bg-cyan-500
          text-black
          rounded-xl
          font-bold
          "
        >
          Send
        </button>
      </div>
    </div>
  );
}
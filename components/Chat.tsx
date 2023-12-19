"use client";

import React from "react";
import { useChat } from "ai/react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AvatarFallback, Avatar, AvatarImage } from "@/components/ui/avatar";

/**
 * Formata a hora atual para uma string legível.
*/
const formatTime = (): string => new Date().toLocaleTimeString();

/**
 * Componente Message que renderiza mensagens do usuário ou do assistente.
 */
const Message = ({ role, message }: { role: string; message: string }) => {
  const messageBgColor = role === "user" ? "bg-blue-100" : "bg-gray-100";

  return (
    <div className="flex items-start space-x-2 space-y-2">
      {role === "user" && (
        <Avatar>
          <AvatarImage
            src="https://github.com/vitormalencar.png"
            alt="User Avatar"
          />
          <AvatarFallback>UA</AvatarFallback>
        </Avatar>
      )}
      <div>
        {role === "assistant" && <Badge>Bot</Badge>}
        <div className={`${messageBgColor} rounded-lg p-2`}>
          <pre className="text-sm whitespace-pre-wrap">{message}</pre>
        </div>
        <p className="text-xs text-gray-500">{formatTime()}</p>
      </div>
    </div>
  );
};

/**
 * Componente principal Chat que renderiza a interface do chat.
 */
const Chat: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <div>
        <div className="p-8 ">
          <h1 className="text-2xl font-bold mb-4">J.A.R.V.I.S 🤖</h1>
          <p className="text-gray-500 mb-4">
            Seu bot pessoal para te ajudar na sua jornada de aprendizado.
          </p>

          <div className="overflow-y-auto h-screen max-h-[600px]">
            {messages.map((msg, index) => (
              <div key={index} className="p-2 my-2 rounded-md">
                <Message role={msg.role} message={msg.content} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 left-0 right-0 flex items-center p-4 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <Input
          value={input}
          className="flex-grow mr-2"
          onChange={handleInputChange}
          placeholder="Escreva sua mensagem..."
        />
        <Button type="submit">Enviar</Button>
      </form>
    </>
  );
};

export default Chat;

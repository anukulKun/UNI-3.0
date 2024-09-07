"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [name, setName] = useState<string>("");
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim() !== "") {
      setShowCertificate(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Generate Your Certificate
          </h1>
          <p className="text-muted-foreground">
            Enter your name to create a personalized certificate.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Generate Certificate
          </Button>
        </form>
        {showCertificate && (
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://imgs.search.brave.com/4qrd-vockhRK0U6OPs_J5dLQcJXbkaOPz9VFG4jnY2Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFX3U2/WWU2NE0vMS8wLzE2/MDB3L2NhbnZhLXBl/YWNoLXNpbXBsZS1j/ZXJ0aWZpY2F0ZS1v/Zi1hcHByZWNpYXRp/b24tTlVQY0Jkc0FQ/Tk0uanBn"
                alt={`Certificate for ${name}`}
                width={600}
                height={400}
                className="w-full max-w-[600px] h-auto"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold text-foreground">
                  Congratulations, {name}!
                </h2>
                <p className="text-muted-foreground">
                  This certificate is awarded to you for your outstanding
                  achievements.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

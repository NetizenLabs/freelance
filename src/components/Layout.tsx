import React from "react";
import { Calculator } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "wouter";

export function Layout({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <span className="mr-2">←</span> Back to calculator
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground text-lg">
              {description}
            </p>
          )}
        </div>
        <div className="prose prose-gray dark:prose-invert prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-xl prose-h3:font-medium prose-p:text-muted-foreground max-w-none">
          {children}
        </div>
      </main>
    </div>
  );
}

"use client";

import { Gamepad2, Plus, Sparkles } from "lucide-react";
// import { Button } from "./ui/button";

const EmptyGameListState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-gaming relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 glass-card rounded-3xl p-12 max-w-lg w-full text-center animate-fade-in">
        <div className="relative mx-auto w-32 h-32 mb-8 animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-20 blur-xl" />
          <div className="relative w-full h-full rounded-full bg-muted/50 flex items-center justify-center border border-border/50">
            <div className="animate-float">
              <Gamepad2 className="w-16 h-16 text-primary" strokeWidth={1.5} />
            </div>
          </div>

          <div className="absolute -top-2 -right-2 animate-spin-slow">
            <Sparkles className="w-6 h-6 text-warning" />
          </div>
          <div className="absolute -bottom-1 -left-3 animate-spin-slow-reverse">
            <Sparkles className="w-5 h-5 text-secondary" />
          </div>
        </div>

        <h2 className="font-display text-3xl font-bold mb-4 text-gradient-primary animate-slide-up">
          No Game Added Yet
        </h2>

        <p className="text-muted-foreground text-lg mb-8 leading-relaxed animate-slide-up animation-delay-100">
          Your gaming journey awaits! Share your favourite game and help fellow gamers discover amazing titles.
        </p>

        <div className="animate-slide-up animation-delay-200">
          {/* <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl glow-primary transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Your First Review
          </Button> */}
        </div>

        <div className="mt-10 h-1 rounded-full bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scale-x" />
      </div>
    </div>
  );
};

export default EmptyGameListState;

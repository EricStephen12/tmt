"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { Loader2, ShoppingCart } from "lucide-react";

interface PaystackCheckoutProps {
  bookId: string;
  amount: number;
  bookTitle: string;
}

export default function PaystackCheckout({ bookId, amount, bookTitle }: PaystackCheckoutProps) {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!user) {
      openSignIn();
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookId,
          amount,
          email: user.primaryEmailAddress?.emailAddress,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to initialize payment");
      }

      // Redirect to Paystack Checkout URL
      window.location.href = data.authorization_url;
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        disabled={true}
        className="group relative inline-flex items-center justify-center opacity-60 cursor-not-allowed transition-all duration-500"
      >
        <div className="absolute inset-0 bg-white translate-x-1 translate-y-1 opacity-20"></div>
        <div className="relative px-12 py-5 bg-slate-800 text-white font-sans text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-3 overflow-hidden">
          <span className="relative z-10">
            Payment Coming Soon
          </span>
          <ShoppingCart className="w-3.5 h-3.5 relative z-10 opacity-50" />
        </div>
      </button>
      {error && (
        <p className="text-[10px] text-red-500 font-sans tracking-wide text-center uppercase font-bold mt-2">
          {error}
        </p>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  newsletterSchema,
  type NewsletterFormValues,
} from "@/lib/validations/newsletter";
import { subscribeToUpdates } from "@/lib/actions/newsletter";

export function NewsletterSignup({
  label,
  placeholder,
  buttonLabel,
  successMessage,
}: {
  label: string;
  placeholder: string;
  buttonLabel: string;
  successMessage: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "", website: "" },
  });

  async function onSubmit(values: NewsletterFormValues) {
    const result = await subscribeToUpdates(values);
    if (!result.success) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success(successMessage);
    setSubmitted(true);
    reset({ email: "", website: "" });
  }

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-secondary-foreground/70">
        {label}
      </p>
      {submitted ? (
        <p className="mt-3 text-sm font-semibold text-accent">{successMessage}</p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-3 flex max-w-xs items-stretch gap-2"
          noValidate
        >
          <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />
          <Input
            type="email"
            placeholder={placeholder}
            aria-invalid={!!errors.email}
            className="border-2 border-white/40 bg-white/10 text-secondary-foreground placeholder:text-secondary-foreground/50 focus-visible:border-white"
            {...register("email")}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            size="icon"
            className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90"
            aria-label={buttonLabel}
          >
            <Send className="size-4" />
          </Button>
        </form>
      )}
      {errors.email ? (
        <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>
      ) : null}
    </div>
  );
}

"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { submitContactForm } from "@/lib/actions/contact";
import { company } from "@/lib/content/company";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  office: "either",
  subject: "general",
  message: "",
  website: "",
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  async function onSubmit(values: ContactFormValues) {
    const result = await submitContactForm(values);
    if (!result.success) {
      toast.error("Something went wrong. Please try again or call us directly.");
      return;
    }
    if (!result.delivered) {
      toast.warning(
        `Thanks for reaching out - our online form isn't fully connected yet. Please also call ${company.phone} or email ${company.email} directly so we don't miss your message.`
      );
    } else {
      toast.success("Thanks! We received your message and will be in touch soon.");
    }
    setSubmitted(true);
    reset(defaultValues);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-muted p-6 text-center">
        <p className="font-medium">Thank you for contacting us.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We&apos;ll get back to you as soon as possible.
        </p>
        <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="name" error={errors.name?.message}>
          <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
        </FormField>
        <FormField label="Email" htmlFor="email" error={errors.email?.message}>
          <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <Input id="phone" type="tel" {...register("phone")} aria-invalid={!!errors.phone} />
        </FormField>
        <FormField label="Preferred Office" htmlFor="office" error={errors.office?.message}>
          <Controller
            control={control}
            name="office"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="office" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="baltimore">Baltimore</SelectItem>
                  <SelectItem value="laurel">Laurel</SelectItem>
                  <SelectItem value="either">Either</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </FormField>
      </div>

      <FormField label="Subject" htmlFor="subject" error={errors.subject?.message}>
        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="subject" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="billing">Billing / Insurance</SelectItem>
                <SelectItem value="appointment">Appointment</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </FormField>

      <FormField label="Message" htmlFor="message" error={errors.message?.message}>
        <Textarea id="message" rows={5} {...register("message")} aria-invalid={!!errors.message} />
      </FormField>

      <Button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

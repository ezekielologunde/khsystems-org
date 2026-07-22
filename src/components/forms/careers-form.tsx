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
import { careersSchema, positionLabels, type CareersFormValues } from "@/lib/validations/careers";
import { submitCareersForm } from "@/lib/actions/careers";
import { company } from "@/lib/content/company";

const defaultValues: CareersFormValues = {
  name: "",
  email: "",
  phone: "",
  position: "general",
  availability: "",
  message: "",
  website: "",
};

const MAX_RESUME_BYTES = 4 * 1024 * 1024; // 4MB

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersFormValues>({
    resolver: zodResolver(careersSchema),
    defaultValues,
  });

  async function onSubmit(values: CareersFormValues) {
    setResumeError(null);
    if (resumeFile && resumeFile.size > MAX_RESUME_BYTES) {
      setResumeError("Resume must be smaller than 4MB.");
      return;
    }

    const resume = resumeFile
      ? { filename: resumeFile.name, base64: await fileToBase64(resumeFile) }
      : null;

    const result = await submitCareersForm({ ...values, resume });
    if (!result.success) {
      toast.error("Something went wrong. Please try again or call us directly.");
      return;
    }
    if (!result.delivered) {
      toast.warning(
        `Thanks for applying - our online form isn't fully connected yet. Please also call ${company.phone} so your application isn't missed.`
      );
    } else {
      toast.success("Thanks! Your application has been submitted.");
    }
    setSubmitted(true);
    setResumeFile(null);
    reset(defaultValues);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-muted p-6 text-center">
        <p className="font-medium">Thank you for your application.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Qualified applicants will be contacted for an interview.
        </p>
        <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
          Submit another application
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
        <FormField label="Position" htmlFor="position" error={errors.position?.message}>
          <Controller
            control={control}
            name="position"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="position" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(positionLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </FormField>
      </div>

      <FormField
        label="Availability"
        htmlFor="availability"
        error={errors.availability?.message}
      >
        <Input
          id="availability"
          placeholder="e.g. Immediately, weekdays 9am-5pm"
          {...register("availability")}
          aria-invalid={!!errors.availability}
        />
      </FormField>

      <FormField label="Resume (PDF or DOC, max 4MB)" htmlFor="resume" error={resumeError ?? undefined}>
        <Input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
        />
      </FormField>

      <FormField label="Cover Letter / Message (optional)" htmlFor="message" error={errors.message?.message}>
        <Textarea id="message" rows={4} {...register("message")} />
      </FormField>

      <Button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";
import {
  satisfactionSurveySchema,
  ratingFields,
  type SatisfactionSurveyFormValues,
} from "@/lib/validations/satisfaction-survey";
import { submitSatisfactionSurvey } from "@/lib/actions/satisfaction-survey";

const defaultValues: SatisfactionSurveyFormValues = {
  visitDate: "",
  serviceReceived: "omhc",
  schedulingRating: "5",
  courtesyRating: "5",
  qualityRating: "5",
  waitTimeRating: "5",
  overallRating: "5",
  comments: "",
  anonymous: false,
  name: "",
  email: "",
  website: "",
};

export function SatisfactionSurveyForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SatisfactionSurveyFormValues>({
    resolver: zodResolver(satisfactionSurveySchema),
    defaultValues,
  });

  const anonymous = watch("anonymous");

  async function onSubmit(values: SatisfactionSurveyFormValues) {
    const result = await submitSatisfactionSurvey(values);
    if (!result.success) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    if (!result.delivered) {
      toast.warning("Thanks for your feedback - it's been logged, though our online delivery isn't fully connected yet.");
    } else {
      toast.success("Thank you for sharing your feedback!");
    }
    setSubmitted(true);
    reset(defaultValues);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-muted p-6 text-center">
        <p className="font-medium">Thank you for your feedback!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          We use every survey response to improve our services.
        </p>
        <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
          Submit another response
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Visit Date" htmlFor="visitDate" error={errors.visitDate?.message}>
          <Input id="visitDate" type="date" {...register("visitDate")} aria-invalid={!!errors.visitDate} />
        </FormField>
        <FormField label="Service Received" htmlFor="serviceReceived" error={errors.serviceReceived?.message}>
          <Controller
            control={control}
            name="serviceReceived"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="serviceReceived" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="omhc">Outpatient Mental Health Clinic (OMHC)</SelectItem>
                  <SelectItem value="prp">Psychiatric Rehabilitation Program (PRP)</SelectItem>
                  <SelectItem value="medication-management">Medication Management</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </FormField>
      </div>

      <div className="space-y-4 rounded-lg border border-border p-4">
        {ratingFields.map((rf) => (
          <div key={rf.key} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-medium">{rf.label}</span>
            <Controller
              control={control}
              name={rf.key}
              render={({ field }) => (
                <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-3">
                  {["1", "2", "3", "4", "5"].map((n) => (
                    <label key={n} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                      <RadioGroupItem value={n} />
                      {n}
                    </label>
                  ))}
                </RadioGroup>
              )}
            />
          </div>
        ))}
      </div>

      <FormField label="Comments (optional)" htmlFor="comments" error={errors.comments?.message}>
        <Textarea id="comments" rows={4} {...register("comments")} />
      </FormField>

      <Controller
        control={control}
        name="anonymous"
        render={({ field }) => (
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked === true)}
            />
            Submit anonymously
          </label>
        )}
      />

      {!anonymous ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Name (optional)" htmlFor="name" error={errors.name?.message}>
            <Input id="name" {...register("name")} />
          </FormField>
          <FormField label="Email (optional)" htmlFor="email" error={errors.email?.message}>
            <Input id="email" type="email" {...register("email")} />
          </FormField>
        </div>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
        {isSubmitting ? "Submitting..." : "Submit Survey"}
      </Button>
    </form>
  );
}

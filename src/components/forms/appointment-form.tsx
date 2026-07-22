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
  appointmentSchema,
  reasonLabels,
  type AppointmentFormValues,
} from "@/lib/validations/appointment";
import { submitAppointmentForm } from "@/lib/actions/appointment";
import { company } from "@/lib/content/company";

const defaultValues: AppointmentFormValues = {
  name: "",
  email: "",
  phone: "",
  office: "baltimore",
  preferredDate: "",
  preferredTime: "morning",
  reason: "new-client",
  clientStatus: "new",
  medicaidConfirmed: true,
  notes: "",
  website: "",
};

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues,
  });

  async function onSubmit(values: AppointmentFormValues) {
    const result = await submitAppointmentForm(values);
    if (!result.success) {
      toast.error("Something went wrong. Please try again or call us directly.");
      return;
    }
    if (!result.delivered) {
      toast.warning(
        `Thanks for your request - our online form isn't fully connected yet. Please also call ${company.phone} to confirm your appointment.`
      );
    } else {
      toast.success("Thanks! We'll reach out to confirm your appointment.");
    }
    setSubmitted(true);
    reset(defaultValues);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-muted p-6 text-center">
        <p className="font-medium">Thank you for your request.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Our team will contact you to confirm your appointment.
        </p>
        <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
          Request another appointment
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
        <FormField label="Office Location" htmlFor="office" error={errors.office?.message}>
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
                </SelectContent>
              </Select>
            )}
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Preferred Date" htmlFor="preferredDate" error={errors.preferredDate?.message}>
          <Input id="preferredDate" type="date" {...register("preferredDate")} aria-invalid={!!errors.preferredDate} />
        </FormField>
        <FormField label="Preferred Time" htmlFor="preferredTime" error={errors.preferredTime?.message}>
          <Controller
            control={control}
            name="preferredTime"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="preferredTime" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </FormField>
      </div>

      <FormField label="Reason for Visit" htmlFor="reason" error={errors.reason?.message}>
        <Controller
          control={control}
          name="reason"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="reason" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(reasonLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </FormField>

      <FormField label="Are you a new or existing client?" htmlFor="clientStatus" error={errors.clientStatus?.message}>
        <Controller
          control={control}
          name="clientStatus"
          render={({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-6">
              <label className="flex items-center gap-2 text-sm">
                <RadioGroupItem value="new" id="status-new" />
                New Client
              </label>
              <label className="flex items-center gap-2 text-sm">
                <RadioGroupItem value="existing" id="status-existing" />
                Existing Client
              </label>
            </RadioGroup>
          )}
        />
      </FormField>

      <FormField label="Additional Notes (optional)" htmlFor="notes" error={errors.notes?.message}>
        <Textarea id="notes" rows={3} {...register("notes")} />
      </FormField>

      <Controller
        control={control}
        name="medicaidConfirmed"
        render={({ field }) => (
          <label className="flex items-start gap-2 text-sm">
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked === true)}
            />
            <span>I confirm that I have active Maryland Medicaid coverage.</span>
          </label>
        )}
      />
      {errors.medicaidConfirmed ? (
        <p className="text-sm text-destructive">{errors.medicaidConfirmed.message}</p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
        {isSubmitting ? "Submitting..." : "Request Appointment"}
      </Button>
    </form>
  );
}

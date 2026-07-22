"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  referralSchema,
  programLabels,
  type ReferralFormValues,
} from "@/lib/validations/referral";
import { submitReferralForm } from "@/lib/actions/referral";
import { company } from "@/lib/content/company";

const defaultValues: ReferralFormValues = {
  referrerName: "",
  referrerRelationship: "",
  referrerPhone: "",
  referrerEmail: "",
  clientName: "",
  clientDob: "",
  clientPhone: "",
  clientAddress: "",
  clientInsurance: "",
  preferredOffice: "either",
  programRequested: "not-sure",
  reason: "",
  urgency: "routine",
  knownDiagnoses: "",
  website: "",
};

export function ReferralForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReferralFormValues>({
    resolver: zodResolver(referralSchema),
    defaultValues,
  });

  async function onSubmit(values: ReferralFormValues) {
    const result = await submitReferralForm(values);
    if (!result.success) {
      toast.error("Something went wrong. Please try again or call us directly.");
      return;
    }
    if (!result.delivered) {
      toast.warning(
        `Thanks for the referral - our online form isn't fully connected yet. Please also call ${company.phone} so it isn't missed.`
      );
    } else {
      toast.success("Thank you - the referral has been submitted.");
    }
    setSubmitted(true);
    reset(defaultValues);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-muted p-6 text-center">
        <p className="font-medium">Thank you for your referral.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Our intake team will follow up as soon as possible.
        </p>
        <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
          Submit another referral
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

      <fieldset className="space-y-5">
        <legend className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Referring Party
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Your Name" htmlFor="referrerName" error={errors.referrerName?.message}>
            <Input id="referrerName" {...register("referrerName")} />
          </FormField>
          <FormField
            label="Relationship to Client"
            htmlFor="referrerRelationship"
            error={errors.referrerRelationship?.message}
          >
            <Input
              id="referrerRelationship"
              placeholder="e.g. Case manager, family member, self"
              {...register("referrerRelationship")}
            />
          </FormField>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Your Phone" htmlFor="referrerPhone" error={errors.referrerPhone?.message}>
            <Input id="referrerPhone" type="tel" {...register("referrerPhone")} />
          </FormField>
          <FormField label="Your Email" htmlFor="referrerEmail" error={errors.referrerEmail?.message}>
            <Input id="referrerEmail" type="email" {...register("referrerEmail")} />
          </FormField>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Client Information
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Client Full Name" htmlFor="clientName" error={errors.clientName?.message}>
            <Input id="clientName" {...register("clientName")} />
          </FormField>
          <FormField label="Client Date of Birth" htmlFor="clientDob" error={errors.clientDob?.message}>
            <Input id="clientDob" type="date" {...register("clientDob")} />
          </FormField>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Client Phone" htmlFor="clientPhone" error={errors.clientPhone?.message}>
            <Input id="clientPhone" type="tel" {...register("clientPhone")} />
          </FormField>
          <FormField
            label="Client Insurance / MCO"
            htmlFor="clientInsurance"
            error={errors.clientInsurance?.message}
          >
            <Input id="clientInsurance" {...register("clientInsurance")} />
          </FormField>
        </div>
        <FormField label="Client Address" htmlFor="clientAddress" error={errors.clientAddress?.message}>
          <Input id="clientAddress" {...register("clientAddress")} />
        </FormField>
        <FormField label="Preferred Office" htmlFor="preferredOffice" error={errors.preferredOffice?.message}>
          <Controller
            control={control}
            name="preferredOffice"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="preferredOffice" className="w-full">
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
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Referral Details
        </legend>
        <FormField label="Program Requested" htmlFor="programRequested" error={errors.programRequested?.message}>
          <Controller
            control={control}
            name="programRequested"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="programRequested" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(programLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </FormField>

        <FormField label="Urgency" htmlFor="urgency" error={errors.urgency?.message}>
          <Controller
            control={control}
            name="urgency"
            render={({ field }) => (
              <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-6">
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem value="routine" />
                  Routine
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem value="urgent" />
                  Urgent
                </label>
              </RadioGroup>
            )}
          />
        </FormField>

        <FormField label="Reason for Referral" htmlFor="reason" error={errors.reason?.message}>
          <Textarea id="reason" rows={4} {...register("reason")} />
        </FormField>

        <FormField
          label="Known Diagnoses (optional)"
          htmlFor="knownDiagnoses"
          error={errors.knownDiagnoses?.message}
        >
          <Textarea id="knownDiagnoses" rows={2} {...register("knownDiagnoses")} />
        </FormField>
      </fieldset>

      <Button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
        {isSubmitting ? "Submitting..." : "Submit Referral"}
      </Button>
    </form>
  );
}

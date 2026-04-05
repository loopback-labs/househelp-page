import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, {
    message: "Email must be less than 255 characters",
  }),
});

type EmailFormValues = z.infer<typeof emailSchema>;
const workerUrl = import.meta.env.VITE_WORKER_URL;

interface EmailSignupFormProps {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonLabel?: string;
  placeholder?: string;
}

export function EmailSignupForm({
  className,
  inputClassName,
  buttonClassName,
  buttonLabel = "Join the Waitlist",
  placeholder = "Enter your email",
}: EmailSignupFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: EmailFormValues) => {
    if (!workerUrl) {
      toast.error("Waitlist is temporarily unavailable. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(workerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) {
        if (response.status === 409) {
          toast.error("This email is already registered!");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
        return;
      }

      toast.success("Thanks for signing up! We'll keep you updated.");
      form.reset();
    } catch {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex w-full flex-col gap-3 sm:flex-row", className)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  type="email"
                  className={cn(
                    "h-12 rounded-2xl border-white/70 bg-white/90 px-4 text-base shadow-sm dark:border-white/10 dark:bg-card/80 dark:text-foreground dark:placeholder:text-muted-foreground",
                    inputClassName,
                  )}
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage className="px-1" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className={cn(
            "h-12 rounded-2xl bg-[linear-gradient(135deg,hsl(var(--accent)),hsl(var(--accent-strong)))] px-6 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-button)] hover:opacity-95",
            buttonClassName,
          )}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing up...
            </>
          ) : (
            buttonLabel
          )}
        </Button>
      </form>
    </Form>
  );
}

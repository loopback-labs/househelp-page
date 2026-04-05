import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" })
});

type EmailFormValues = z.infer<typeof emailSchema>;
const workerUrl = import.meta.env.VITE_WORKER_URL;

export function EmailSignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: ""
    }
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input 
                  placeholder="Enter your email" 
                  type="email"
                  className="h-11 text-base"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          size="lg" 
          className="bg-accent text-accent-foreground hover:opacity-90 transition-opacity font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing up...
            </>
          ) : (
            "Get Early Access"
          )}
        </Button>
      </form>
    </Form>
  );
}

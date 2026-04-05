import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="space-y-6 text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using househelp, you accept and agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">2. Description of Service</h2>
            <p>
              househelp provides a digital platform for managing house helper attendance, calculating
              salaries, and providing AI-powered management insights. The service is provided "as is"
              and we reserve the right to modify or discontinue features at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service in compliance with all applicable laws</li>
              <li>Not misuse or attempt to disrupt the service</li>
              <li>Respect the privacy and rights of others</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">4. Data Accuracy</h2>
            <p>
              While we strive for accuracy in salary calculations and attendance tracking, you are
              responsible for verifying all data and calculations. We are not liable for any errors
              or discrepancies in the information you input or the calculations provided.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of househelp are owned by us and are protected
              by copyright, trademark, and other intellectual property laws. You may not copy, modify,
              or distribute any part of our service without permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, househelp shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting from your use of or
              inability to use the service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">7. Account Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for violation of
              these terms or for any other reason. You may also delete your account at any time through
              the app settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">8. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. We will notify you of any
              significant changes via email or through the app. Your continued use of the service
              after such changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">9. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:contactus@merchandice.in" className="text-accent hover:underline">
                contactus@merchandice.in
              </a>
            </p>
          </section>

          <p className="text-sm pt-6 border-t border-border">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;

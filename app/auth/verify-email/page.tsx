import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-linear-to-b from-background to-muted/30">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <Image
              src="/images/aisemble-soft-color-transparent.png"
              alt="AIsemble"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <span className="text-2xl font-semibold">AIsemble</span>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Check Your Email</CardTitle>
            <CardDescription>
              We&apos;ve sent you a verification link
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thank you for signing up! Please check your email and click
                  the verification link to activate your account.
                </p>
                <p className="text-xs text-muted-foreground">
                  Don&apos;t see the email? Check your spam folder or try
                  signing up again.
                </p>
              </div>
            </div>

            <Button asChild className="w-full">
              <Link href="/auth/login">Return to Login</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

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

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; error_description?: string }>;
}) {
  const params = await searchParams;

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
            <CardTitle className="text-2xl">Authentication Error</CardTitle>
            <CardDescription>
              Something went wrong during authentication
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {params?.error_description ? (
              <p className="text-sm text-muted-foreground">
                {params.error_description}
              </p>
            ) : params?.error ? (
              <p className="text-sm text-muted-foreground">
                Error code: {params.error}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                An unspecified error occurred during authentication.
              </p>
            )}

            <Button asChild className="w-full">
              <Link href="/auth/login">Try Again</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

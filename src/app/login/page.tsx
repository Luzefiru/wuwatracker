import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertDestructive } from "@/components/ui/alert-destructive";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams: { message },
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user.");
    }

    return redirect("/convene/limited-character");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user.");
    }

    return redirect("/login?message=Check your inbox for a verification code.");
  };

  return (
    <>
      <main className="w-full lg:grid lg:grid-cols-2 h-screen place-content-center px-7 lg:p-0 lg:place-content-stretch">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login to Wuwa Tracker</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login and start saving your data
              </p>
            </div>

            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <SubmitButton formAction={signIn} pendingText="Signing In...">
                Log in
              </SubmitButton>
            </form>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="#"
                className="underline text-yellow-500 hover:text-yellow-700"
              >
                Sign up
              </Link>
            </div>

            {message ? (
              <AlertDestructive title="Error" message={message} />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="hidden bg-muted lg:block order-first">
          <Image
            src="/bg/auth-cover.png"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover object-left-bottom"
          />
        </div>
      </main>
      <Image
        src="/bg/cover.png"
        width="2560"
        height="1440"
        alt="Cover Image"
        className="fixed top-0 left-0 w-full h-full object-cover -z-20 opacity-35 mix-blend-lighten"
      />
    </>
  );
}

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useLocalStorage } from "@/hooks/use-storage";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Email needs to be more then 3 character" })
    .email(),
  pass: z
    .string()
    .min(6, { message: "Password needs to be more the 6 character" }),
  saveEmail: z.boolean().default(true).optional(),
});

export default function LoginForm() {
  const [stEmail, setLocalEmail] = useLocalStorage<string>("email");
  const { toast } = useToast();
  const { signInUser } = useAuth();
  const nave = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: stEmail,
      saveEmail: true,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLocalEmail(values.saveEmail ? values.email : "");
    try {
      if (await signInUser(values.email, values.pass)) {
        nave("/");
        toast({
          title: "Authenticated",
          description: "Logged in successfully",
        });
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        toast({
          variant: "destructive",
          title: "Authentication failed",
          description: e.code,
        });
      }
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your email and password below to login to your account.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@gmail.con...."
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pass"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*********" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="saveEmail"
              render={({ field }) => (
                <FormItem className="pt-4">
                  <FormControl className="mr-5">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Save email</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

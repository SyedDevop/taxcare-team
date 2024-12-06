import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@renderer/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@renderer/components/ui/form";
import { Input } from "@renderer/components/ui/input";
import { toast } from "../../hooks/use-toast";

const formSchema = z.object({
  basicPrice: z.string().min(1, {
    message: "Basic price is required",
  }),
  proPrice: z.string().min(1, {
    message: "Pro price is required",
  }),
  enterprisePrice: z.string().min(1, {
    message: "Enterprise price is required",
  }),
});

export function PricingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      basicPrice: "",
      proPrice: "",
      enterprisePrice: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implement the API call to update pricing
    console.log(values);
    toast({
      title: "Pricing updated",
      description: "The new pricing has been saved successfully.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="basicPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Basic Plan Price</FormLabel>
              <FormControl>
                <Input placeholder="$9.99" {...field} />
              </FormControl>
              <FormDescription>
                Enter the price for the Basic plan.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="proPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pro Plan Price</FormLabel>
              <FormControl>
                <Input placeholder="$19.99" {...field} />
              </FormControl>
              <FormDescription>
                Enter the price for the Pro plan.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="enterprisePrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enterprise Plan Price</FormLabel>
              <FormControl>
                <Input placeholder="$49.99" {...field} />
              </FormControl>
              <FormDescription>
                Enter the price for the Enterprise plan.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update Pricing</Button>
      </form>
    </Form>
  );
}

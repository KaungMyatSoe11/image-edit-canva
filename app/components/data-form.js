"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Please Enter your name" }),
  attend_course: z
    .string()
    .nonempty({ message: "Please Enter your attend Course" }),
});

export function DataForm() {
  const route = useRouter();
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      attend_course: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    route.push(
      `/coupon?name=${values.name}&attend_course=${values.attend_course}`
    );
  }

  return (
    <Card className="drop-shadow-lg">
      <CardHeader>
        <CardTitle>Get Coupon Form</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Mg Mg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="attend_course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attend Course</FormLabel>
                  <FormControl>
                    <Input placeholder="ITL-25" {...field} />
                  </FormControl>
                  <FormDescription>
                    you can ask your teacher.(eg. ITL - 12)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter className="flex justify-center pt-3">
              <Button type="submit">Get Coupon</Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

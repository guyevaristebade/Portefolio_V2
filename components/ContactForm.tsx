"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/schemas";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"; // shadcn version

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FirstName: "",
      Lastname: "",
      Email: "",
      Phone: "",
      Service: "",
      Message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="FirstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="First name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Lastname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="tel" placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="Service"
          render={({ field }) => (
            <FormItem className="w-full bg-secondary rounded-md">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="px-4 py-2 text-sm w-full">
                    <SelectValue
                      placeholder="Select a service"
                      className="text-white/80"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-secondary">
                  <SelectItem
                    value="web-development"
                    className="hover:text-secondary"
                  >
                    Web Development
                  </SelectItem>
                  <SelectItem
                    value="ux-ui-design"
                    className="hover:text-secondary"
                  >
                    UX/UI Design
                  </SelectItem>
                  <SelectItem
                    value="logo-design"
                    className="hover:text-secondary"
                  >
                    Logo Design
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  className="h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Button
            type="submit"
            className="bg-accent text-black hover:text-white p-4"
          >
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;

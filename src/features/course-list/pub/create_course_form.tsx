"use client"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTransition } from "react";
import { createNoteAction } from "../action";
import { Button } from "@/shared/ui/button";

const createNoteSchema = z.object({
  title: z.string(),
  text: z.string(),
});

export default function CreateCourseForm(
  {revalidatePagePath}: {revalidatePagePath: string}
) {
  const [isCreateTransition, startCreateTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(createNoteSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            return createNoteAction(data, revalidatePagePath);
          });
        })}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Textarea placeholder="Your note" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreateTransition}>Add</Button>
      </form>
    </Form>
  );
}

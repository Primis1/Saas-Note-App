"use client";

import { Form, FormControl, FormField, FormItem } from "@/shared/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Textarea } from "@/shared/ui/textarea";
import { updateNoteAction } from "@/feature/note/action";
import { Input } from "@/shared/ui/input";

export const noteSchema = z.object({
  title: z.string(),
  text: z.string(),
});

export default function TextUpdate({
  revalidatePagePath,
  InitialTitle,
  initialText,
  id,
}: {
  revalidatePagePath: string;
  initialText: string | undefined;
  InitialTitle: string | undefined;
  id: string;
}) {
  // const [isUpdateTransiton, startUpdateTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(noteSchema),
  });

  const [isPending, startTransition] = useTransition();

  const [propsTitle, setpropsTitle] = useState(InitialTitle);

  const [propsText, setPropsText] = useState(initialText);

  const handleTextChange = () => {
    setPropsText("event.target.value");
  };

  // const handleInputChange = (event: any) => {
  //   setpropsTitle(event.target.value);
  // };

  return (
    <Form {...form}>
      <form
        onBlur={() => {
          startTransition(
            async () =>
              await updateNoteAction(
                id,
                propsTitle,
                propsText,
                revalidatePagePath
              )
          );
        }}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  onBlur={handleInputChange}
                  value={propsTitle}
                  className="outline-none w-full bg-red"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  onBlur={handleTextChange}
                  value={propsText}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

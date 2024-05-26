"use client";

import { Form, FormControl, FormField, FormItem } from "@/shared/ui/form";
import { FileTextIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { createNoteAction } from "../action";
import { Button } from "@/shared/ui/button";
import { useRouter } from 'next/navigation'

export const noteSchema = z.object({
  title: z.string(),
  text: z.string(),
});

export default function CreateNote({
  revalidatePagePath,
  redirectToNewNote,
}: {
  revalidatePagePath: string;
  redirectToNewNote: string;
}) {
  const [isCreateTransiton, startCreateTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: "untitled",
      text: "",
    },
  });

  const router = useRouter()


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            await createNoteAction(data, revalidatePagePath);
          });
          router.push(redirectToNewNote);
        })}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Button
                  className="my-3"
                  {...field}
                  type="submit"
                  disabled={isCreateTransiton}
                >
                  <FileTextIcon />
                </Button>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
}

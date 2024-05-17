"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { FileTextIcon } from '@radix-ui/react-icons'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { createNoteAction } from "../action";
import { Button } from "@/shared/ui/button";

const createNoteSchema = z.object({
  title: z.string(),
  text: z.string(),
});

export default function CreateNote({revalidatePagePath}: {revalidatePagePath: string}) {
  const [isCreateTransiton, startCreateTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(createNoteSchema),
    defaultValues: {
      title: "untitled",
      text: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createNoteAction(data, revalidatePagePath)
          })
        })}
      >
      <FormField
        control={form.control}
        name="title"
        render={({field})=> (
          <Button className="mt-8" type="submit" disabled={isCreateTransiton}>
          <FileTextIcon />
        </Button>
        )}
      >

      </FormField>
      </form>
    </Form>
  );
}

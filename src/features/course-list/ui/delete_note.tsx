"use client";
import { dbClient } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import type { Note } from "@prisma/client";
import { useTransition } from "react";

export default function DeleteNoteBtn({
  note,
  deleteNote,
}: {
  note: Note;
  deleteNote: () => Promise<void>;
}) {
  const [isLoadingDelete, startLoadingDelete] = useTransition();

  const handlerDelete = () => {
    startLoadingDelete(async () => {
      await deleteNote();
    });
  };

  return (
    <>    
      <Card>
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{note.text}</p>
        </CardContent>
        <CardFooter>
          <Button disabled={isLoadingDelete} onClick={handlerDelete}>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

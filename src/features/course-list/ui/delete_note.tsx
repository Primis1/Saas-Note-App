import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { useTransition } from "react";

export default function DeleteNoteBtn({
  note,
  deleteNote,
}: {
  note: NoteListElement;
  deleteNote: () => Promise<void>;
}) {

  const [isLoadingDelete, startLoadingDelete] = useTransition

  const handler = {
    
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

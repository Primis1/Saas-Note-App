import { Button } from "@/shared/ui/button";
import { noteMethods } from "../note-method";
import Link from "next/link";

export default async function NoteList() {
  const noteList = await noteMethods.getNoteList();

  return (
    <ul>
      {noteList.map((note) => (
        <li key={note.id} className="pb-1">
          <Link  href={`/note-take/${note.id}`}>
            <Button variant={"ghost"} className="w-full">{note.title}</Button>
          </Link>
        </li> 
      ))}
    </ul>
  );
}

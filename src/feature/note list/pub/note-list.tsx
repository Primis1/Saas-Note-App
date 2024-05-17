import { Button } from "@/shared/ui/button";
import { noteMethods } from "../note-method";

export default async function NoteList() {
  const noteList = await noteMethods.getNoteList();

  return (
    <div>
      {noteList.map((note) => (
        <a key={note.id}>
          <Button>{note.title}</Button>
        </a>
      ))}
    </div>
  );
}

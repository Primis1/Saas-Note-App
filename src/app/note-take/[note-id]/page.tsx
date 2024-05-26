import { noteMethods } from "@/feature/note/note-method";
import TextUpdate from "@/feature/note/pub/text-form";
import { Input } from "@/shared/ui/input";
export default async function getAndDisplayNote(params: any) {
  const id = String(params.params["note-id"]);

  const note = await noteMethods.getSpecificNote({ id: id });


  // const updateNote = await noteMethods.updateNote({ id: "string", title: "string", text: "string" });

  return (
    <div className="w-screen h-[90vh] flex justify-center">
      
      <div className="w-[90vh] flex flex-col">
        <div className="mt-[6rem] h-20">
          <TextUpdate revalidatePagePath={`/note-take/${id}`} id={id} InitialTitle={note?.title} initialText={note?.text} />
        </div>
      </div>
    </div>

  );
}

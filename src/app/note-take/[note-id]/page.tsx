import { noteMethods } from "@/feature/note list/note-method";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

export default async function getAndDisplayNote(params: any) {
  let id  =  String(params.params['note-id'])

  console.log(id)

  const note = await noteMethods.getSpecificNote({id: id})

  return (
    <div className="w-screen h-[90vh] flex justify-center">
      <div className="w-[90vh] flex flex-col">
        <div className="mt-[6rem] h-20">
          <Input className="outline-none w-full bg-red" value={note?.title} required placeholder={note?.title} />
        </div>
        <Textarea className="resize-none w-full h-[70vh] overflow-y-auto bg-red">
          {note?.text}
        </Textarea>
      </div>
    </div>
  );
}

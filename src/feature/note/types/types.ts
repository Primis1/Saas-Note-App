type NoteElement = {
  id: string;
  title: string;
  text: string;
};

type TextElement = {
  id: string;
  text: string;
};

type CreateNoteElement = {
  title: string;
  text: string;
};

type DeleteNoteElement = {
  id: string;
};

type Props = {
  params: {
    id: string;
  };
};

type NoteElement = {
  id: string;
  title: string;
  text: string;
};

type CreateNoteElement = {
  title: string;
  text: string;
};

type DeleteNoteElement = {
  id: string;
};

interface ProviderBtn {
  providerName: string;
  providerIcon: JSX.Element;
}
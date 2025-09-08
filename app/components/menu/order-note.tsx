import { NoteForm } from "@/app/components/menu/note-form";

import { MessageCircleMoreIcon } from "lucide-react";

function OrderNote() {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <MessageCircleMoreIcon size={16} />
        <span className="text-sm font-medium">Alguma observação?</span>
      </div>

      <NoteForm />
    </div>
  );
}

export { OrderNote };

import { Editable} from "@/types/interfaces";
import Modal from "./Modal";

export default interface EditableModal extends Editable, Modal {
    target_id?: string;
}
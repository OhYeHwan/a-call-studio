import { observable } from "mobx";
import MessageDialog from "../components/MessageDialog/MessageDialog";

// Message Dialog를 공통으로 사용하기 위한 Store
const messageDialogStore = observable({
  _messageDialog: null,
  _open: false,
  showMessageDialog({ type, confirm, text }) {
    if (type) {
      this._messageDialog = (
        <MessageDialog type={type} confirm={confirm} text={text} />
      );
    } else {
      this._messageDialog = null;
    }
    this._open = true;
  },
  hideMessageDialog() {
    this._messageDialog = null;
    this._open = false;
  },
});

export { messageDialogStore };

import { observable } from "mobx";
import MessageSnackBar from "../components/SnackBar/MessageSnackBar";
import UploadSnackBar from "../components/SnackBar/UploadSnackBar";

// Message SnackBar, Upload SnackBar를 공통으로 사용하기 위한 Store
const snackBarStore = observable({
  _messageSnackBar: null,
  _uploadSnackBar: null,
  setMessageSnackBar(type, text) {
    if (type) {
      this._messageSnackBar = <MessageSnackBar type={type} text={text} />;
    } else {
      this._messageSnackBar = null;
    }
  },
  setUploadSnackBar(content) {
    if (content) {
      this._uploadSnackBar = <UploadSnackBar content={content} />;
    } else {
      this._uploadSnackBar = null;
    }
  },
});

export { snackBarStore };

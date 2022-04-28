import { drawerHeightStore } from "./drawerHeightStore";
import { snackBarStore } from "./snackBarStore";
import { messageDialogStore } from "./messageDialogStore";

const useStore = () => {
  return { drawerHeightStore, snackBarStore, messageDialogStore };
};

export default useStore;

import { observable } from "mobx";

const drawerHeightStore = observable({
  _height: 500,
  setHeight(height) {
    this._height = height;
  },
});

export { drawerHeightStore };

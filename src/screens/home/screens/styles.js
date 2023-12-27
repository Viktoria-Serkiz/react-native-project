import { StyleSheet } from "react-native";

import * as colors from "../../../theme/colors";

export const globalStyles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: colors.backgroundColor,
  // },

  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const itemStyles = StyleSheet.create({
  item: {
    flexDirection: "row",
    minHeight: 100,
    width: "95%",
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: colors.backgroundForItem,
    borderStyle: "solid",
    borderColor: colors.borderForItem,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 10,
  },

  photoContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },

  mainPicture: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    marginLeft: 10,
    borderRadius: 10,
  },

  itemNew: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    left: 60,
    width: 30,
    height: 25,
    borderRadius: "15%",
    borderWidth: 0.5,
    borderColor: colors.red,
    backgroundColor: colors.backgroundColor,
  },

  textNew: {
    fontSize: 8,
    textTransform: "uppercase",
    color: colors.specialText,
  },

  itemInfo: {
    width: "70%",
    marginLeft: 25,
  },

  titleBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  titleText: {
    fontSize: 15,
    textTransform: "uppercase",
  },

  favorite: {
    width: 20,
    height: 20,
  },

  priceInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  newPrice: {
    fontWeight: "bold",
    fontSize: 15,
    marginRight: 30,
  },

  oldPrice: {
    fontWeight: "400",
    fontSize: 15,
    textDecorationLine: "line-through",
  },

  about: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  description: {
    height: 20,
    width: 170,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  buyButton: {},

  buyButtonText: {
    fontSize: 15,
  },

  cartButton: {},

  cartIcon: {
    resizeMode: "contain",
    width: 40,
    height: 20,
  },
});

export const inputStyles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 64,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    width: "80%",
    backgroundColor: colors.inputColor,
  },

  iconsWrapper: {
    flexDirection: "row",
    alignItems: "center,",
    justifyContent: "space-between",
    marginRight: 20,
    marginBottom: 10,
  },

  favorite: {
    width: 25,
    height: 25,
  },

  search: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
});

export const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.overlay,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.backgroundColor,
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: colors.closeButtonInModal,
  },

  textStyle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },

  modalText: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center",
    textTransform: "uppercase",
  },

  photoGalleryImage: {
    width: 30,
    height: 50,
  },

  indicatorsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.black,
    marginHorizontal: 5,
  },
  
  activeIndicator: {
    backgroundColor: colors.blue,
  },
});

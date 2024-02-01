import { StyleSheet } from "react-native";

import * as colors from "../../../theme/colors";

export const globalStyles = StyleSheet.create({
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
    fontSize: 17,
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
    justifyContent: "flex-end",
    marginLeft: 10,
  },

  input: {
    height: 40,
    marginRight: 35,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    minWidth: "70%",
    backgroundColor: colors.inputColor,
  },

  iconsWrapper: {
    flexDirection: "row",
    alignItems: "center,",
    justifyContent: "space-between",
    marginRight: 20,
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
  },

  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },

  activeIndicator: {
    backgroundColor: colors.blue,
  },
});

export const basketStyle = StyleSheet.create({
  mainText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  items: {
    width: "100%",
    borderColor: colors.borderForItem,
    borderBottomWidth: 1,
    minHeight: 80,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 10,
  },

  wrapperForTitle: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  orderTitle: {
    marginRight: 40,
    width: "45%",
  },

  quantityWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  plusMinus: {
    fontWeight: "bold",
    fontSize: 20,
  },

  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
  },

  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },

  backToShopping: {
    color: colors.borderForItem,
    fontSize: 15,
    marginTop: 20,
  },

  confirmButton: {
    backgroundColor: colors.blue,
    padding: 10,
    marginTop: 20,
  },

  deleteOrderButton: {
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 20,
    padding: 2,
    backgroundColor: colors.backgroundForItem,
  },
});

export const loginPageStyles = StyleSheet.create({
  headerLoginText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  textInputLogin: {
    width: 350,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.borderForItem,
    padding: 20,
    borderRadius: 20,
  },
});

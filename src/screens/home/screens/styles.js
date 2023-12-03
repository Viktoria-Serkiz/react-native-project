import { StyleSheet } from "react-native";

import * as colors from "../../../theme/colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

export const itemStyles = StyleSheet.create({
  item: {
    flexDirection: "row",
    minHeight: 100,
    width: "95%",
    marginHorizontal: 10,
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
});

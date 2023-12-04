import { View, Text, Image, Alert, SafeAreaView } from "react-native";
import { globalStyles, itemStyles } from "./styles";
import favorite from "../../../utils/img/favorite.png";
import cart from "../../../utils/img/cart.png";
import { CustomButton } from "../../../utils/customComponents/CustomButton";
import * as colors from "../../../theme/colors";

export const HomeScreen = () => {
  const mockItemData = {
    title: "Pizza Papperoni",
    isNew: true,
    favorite: true,
    price: 120,
    image:
      "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
    description: `Pepperoni pizza is an American pizza variety which includes one of
    the country's most beloved toppings. Pepperoni is actually a
    corrupted form of peperoni (one “p”), which denotes a large pepper
    in Italian, but nowadays it denotes a spicy salami, usually made
    with a mixture of beef, pork, and spices.`,
  };

  const handleButtonPress = () => {
    Alert.alert("Added to cart");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={itemStyles.item}>
        <View style={itemStyles.photoContainer}>
          <Image
            style={itemStyles.mainPicture}
            source={{ uri: mockItemData.image }}
          ></Image>

          {mockItemData.isNew && (
            <View style={itemStyles.itemNew}>
              <Text style={itemStyles.textNew}>New</Text>
            </View>
          )}
        </View>

        <View style={itemStyles.itemInfo}>
          <View style={itemStyles.titleBlock}>
            <Text style={itemStyles.titleText}>{mockItemData.title}</Text>
            {mockItemData.favorite && (
              <Image style={itemStyles.favorite} source={favorite}></Image>
            )}
          </View>

          <View style={itemStyles.priceInfo}>
            <Text style={itemStyles.newPrice}>{mockItemData.price}</Text>
            <Text style={itemStyles.oldPrice}>150</Text>
          </View>

          <View style={itemStyles.about}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={itemStyles.description}
            >
              {mockItemData.description}
            </Text>
            <CustomButton
              onPress={handleButtonPress}
              title="Buy"
              source={cart}
              textColor={colors.specialText}
              width={175}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

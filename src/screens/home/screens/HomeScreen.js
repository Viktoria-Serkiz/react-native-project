import { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  FlatList,
  TextInput,
  Dimensions,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { globalStyles, itemStyles, inputStyles } from "./styles";

import CustomTouchable from "../../../common/components/CustomTouchable";

import cart from "../../../utils/img/cart.png";
import search from "../../../utils/img/search.png";
import favorite from "../../../utils/img/favorite.png";

import * as colors from "../../../theme/colors";

export const HomeScreen = ({ navigation, item }) => {
  const mockItemData = [
    {
      id: "1",
      title: "Pizza Papperoni",
      isNew: true,
      favorite: true,
      price: 120,
      image:
        "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
      description: `Pepperoni pizza is an American pizza variety which includes one of the country's most beloved toppings. Pepperoni is actually a
    corrupted form of peperoni (one “p”), which denotes a large pepper
    in Italian, but nowadays it denotes a spicy salami, usually made with a mixture of beef, pork, and spices.`,
    },
    {
      id: "2",
      title: "Vegetarian Pizza",
      isNew: false,
      favorite: false,
      price: 100,
      image:
        "https://img.freepik.com/free-photo/delicious-vegetarian-pizza_144627-25521.jpg",
      description: `Vegetarian pizza with a variety of fresh vegetables and herbs. A delightful and healthy option for pizza lovers.`,
    },
    {
      id: "3",
      title: "Margherita Pizza",
      isNew: true,
      favorite: true,
      price: 110,
      image:
        "https://img.freepik.com/free-photo/closeup-margherita-pizza-with-tomatoes_140725-6147.jpg",
      description: `Margherita pizza with classic ingredients like tomatoes, fresh mozzarella, and basil. A timeless favorite.`,
    },
    {
      id: "4",
      title: "Hawaiian Pizza",
      isNew: false,
      favorite: true,
      price: 115,
      image:
        "https://img.freepik.com/free-photo/top-view-hawaiian-pizza-with-pineapple_140725-6115.jpg",
      description: `Hawaiian pizza with a tropical twist, featuring pineapple and ham as key toppings.`,
    },
    {
      id: "5",
      title: "BBQ Chicken Pizza",
      isNew: true,
      favorite: false,
      price: 125,
      image:
        "https://img.freepik.com/free-photo/delicious-pizza-with-bbq-chicken_144627-25912.jpg",
      description: `BBQ chicken pizza with succulent chicken pieces and a drizzle of barbecue sauce.`,
    },
    {
      id: "6",
      title: "Supreme Pizza",
      isNew: false,
      favorite: true,
      price: 130,
      image:
        "https://img.freepik.com/free-photo/high-angle-supreme-pizza-with-olives_23-2148764474.jpg",
      description: `Supreme pizza loaded with a variety of toppings, including sausage, olives, bell peppers, and more.`,
    },
    {
      id: "7",
      title: "Mushroom Lovers Pizza",
      isNew: true,
      favorite: false,
      price: 115,
      image:
        "https://img.freepik.com/free-photo/top-view-mushroom-pizza_140725-6344.jpg",
      description: `Pizza for mushroom lovers, featuring a generous amount of assorted mushrooms.`,
    },
    {
      id: "8",
      title: "Four Cheese Pizza",
      isNew: false,
      favorite: true,
      price: 135,
      image:
        "https://img.freepik.com/free-photo/close-up-four-cheese-pizza_23-2148271738.jpg",
      description: `Four cheese pizza with a rich blend of mozzarella, cheddar, parmesan, and gorgonzola.`,
    },
    {
      id: "9",
      title: "Pepper and Onion Pizza",
      isNew: true,
      favorite: false,
      price: 110,
      image:
        "https://img.freepik.com/free-photo/high-angle-pepper-onion-pizza_23-2148235044.jpg",
      description: `Pizza topped with a flavorful combination of peppers and onions.`,
    },
    {
      id: "10",
      title: "Buffalo Chicken Pizza",
      isNew: false,
      favorite: true,
      price: 125,
      image:
        "https://img.freepik.com/free-photo/top-view-buffalo-chicken-pizza-with-wooden-background_23-2148686408.jpg",
      description: `Buffalo chicken pizza with spicy buffalo sauce and tender chicken pieces.`,
    },
  ];

  const { width, height } = Dimensions.get("screen");

  const handleButtonPress = () => {
    Alert.alert("Added to cart");
  };

  const [text, onChangeText] = useState("");
  const [searchResults, setSearchResults] = useState(mockItemData);
  const [refreshing, setRefreshing] = useState(false);
  const [additionalData, setAdditionalData] = useState([]);

  const handleTextChange = (inputText) => {
    onChangeText(inputText);

    const filteredResults = mockItemData.filter((item) =>
      item.title.toLowerCase().includes(inputText.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const addAdditionalData = () => {
    setTimeout(() => {
      setAdditionalData([
        {
          title: "New Item 1",
          isNew: true,
          favorite: false,
          price: 95,
          image: "https://example.com/new_item_1.jpg",
          description: "Description for new item 1",
        },
      ]);
    }, 3000);
  };

  const loadMoreData = () => {
    const newItems = Array.from({ length: 5 }).map((_, index) => ({
      title: `New Item ${index + 1}`,
      isNew: true,
      favorite: false,
      price: 90 + index,
      image: `https://example.com/new_item_${index + 1}.jpg`,
      description: `Description for new item ${index + 1}`,
    }));

    setAdditionalData((prevData) => [...prevData, ...newItems]);
  };

  const [pizzaParam, setPizzaParam] = useState("");
  const [modalParam, setModalParam] = useState("");

  const navigateToPizza = (pizza) => {
    navigation.navigate("Pizza", {
      goBackCallBack: setPizzaParam,
      pizza,
    });
  };

  const navigateToModal = (modalImg) => {
    navigation.navigate("Modal", {
      goBackCallBack: setModalParam,
      modalImg,
    });
  };

  const isFocus = useIsFocused();

  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity onPress={() => navigateToPizza(item)}>
        <View style={itemStyles.item}>
          <View style={itemStyles.photoContainer}>
            <Image
              style={itemStyles.mainPicture}
              source={{ uri: item.image }}
            />
            {item.isNew && (
              <View style={itemStyles.itemNew}>
                <Text style={itemStyles.textNew}>New</Text>
              </View>
            )}
          </View>

          <View style={itemStyles.itemInfo}>
            <View style={itemStyles.titleBlock}>
              <Text style={itemStyles.titleText}>{item.title}</Text>
              {item.favorite && (
                <Image style={itemStyles.favorite} source={favorite} />
              )}
            </View>

            <View style={itemStyles.priceInfo}>
              <Text style={itemStyles.newPrice}>{item.price}</Text>
              <Text style={itemStyles.oldPrice}>150</Text>
            </View>

            <View style={itemStyles.about}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={itemStyles.description}
              >
                {item.description}
              </Text>
              <View style={itemStyles.buttonContainer}>
                <CustomTouchable
                  onPress={() => handleButtonPress()}
                  style={itemStyles.buyButton}
                >
                  <Text style={itemStyles.buyButtonText}>Buy</Text>
                </CustomTouchable>
                <CustomTouchable
                  onPress={() => handleButtonPress()}
                  style={itemStyles.cartButton}
                >
                  <Image source={cart} style={itemStyles.cartIcon} />
                </CustomTouchable>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [text]
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={inputStyles.inputWrapper}>
        <TextInput
          style={inputStyles.input}
          onChangeText={handleTextChange}
          value={text}
          placeholder="Search..."
          keyboardType="default"
          keyboardAppearance="default"
          placeholderTextColor={colors.red}
        />

        <View style={inputStyles.iconsWrapper}>
          <CustomTouchable onPress={() => navigateToModal(item)}>
            <Image source={favorite} style={inputStyles.favorite}></Image>
          </CustomTouchable>

          <CustomTouchable>
            <Image source={search} style={inputStyles.search}></Image>
          </CustomTouchable>
        </View>
      </View>

      <FlatList
        data={[...searchResults, ...additionalData]}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};

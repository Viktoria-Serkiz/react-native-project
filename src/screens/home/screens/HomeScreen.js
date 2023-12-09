import { useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  Modal,
  FlatList,
  TextInput,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { globalStyles, itemStyles, inputStyles, modalStyles } from "./styles";

import CustomTouchable from "../../../components/CustomTouchable";

import cart from "../../../utils/img/cart.png";
import search from "../../../utils/img/search.png";
import favorite from "../../../utils/img/favorite.png";

import * as colors from "../../../theme/colors";

export const HomeScreen = () => {
  const mockItemData = [
    {
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
    },
    {
      title: "Vegetarian Pizza",
      isNew: false,
      favorite: false,
      price: 100,
      image:
        "https://img.freepik.com/free-photo/delicious-vegetarian-pizza_144627-25521.jpg",
      description: `Vegetarian pizza with a variety of fresh vegetables and herbs. A delightful and healthy option for pizza lovers.`,
    },
    {
      title: "Margherita Pizza",
      isNew: true,
      favorite: true,
      price: 110,
      image:
        "https://img.freepik.com/free-photo/closeup-margherita-pizza-with-tomatoes_140725-6147.jpg",
      description: `Margherita pizza with classic ingredients like tomatoes, fresh mozzarella, and basil. A timeless favorite.`,
    },
    {
      title: "Hawaiian Pizza",
      isNew: false,
      favorite: true,
      price: 115,
      image:
        "https://img.freepik.com/free-photo/top-view-hawaiian-pizza-with-pineapple_140725-6115.jpg",
      description: `Hawaiian pizza with a tropical twist, featuring pineapple and ham as key toppings.`,
    },
    {
      title: "BBQ Chicken Pizza",
      isNew: true,
      favorite: false,
      price: 125,
      image:
        "https://img.freepik.com/free-photo/delicious-pizza-with-bbq-chicken_144627-25912.jpg",
      description: `BBQ chicken pizza with succulent chicken pieces and a drizzle of barbecue sauce.`,
    },
    {
      title: "Supreme Pizza",
      isNew: false,
      favorite: true,
      price: 130,
      image:
        "https://img.freepik.com/free-photo/high-angle-supreme-pizza-with-olives_23-2148764474.jpg",
      description: `Supreme pizza loaded with a variety of toppings, including sausage, olives, bell peppers, and more.`,
    },
    {
      title: "Mushroom Lovers Pizza",
      isNew: true,
      favorite: false,
      price: 115,
      image:
        "https://img.freepik.com/free-photo/top-view-mushroom-pizza_140725-6344.jpg",
      description: `Pizza for mushroom lovers, featuring a generous amount of assorted mushrooms.`,
    },
    {
      title: "Four Cheese Pizza",
      isNew: false,
      favorite: true,
      price: 135,
      image:
        "https://img.freepik.com/free-photo/close-up-four-cheese-pizza_23-2148271738.jpg",
      description: `Four cheese pizza with a rich blend of mozzarella, cheddar, parmesan, and gorgonzola.`,
    },
    {
      title: "Pepper and Onion Pizza",
      isNew: true,
      favorite: false,
      price: 110,
      image:
        "https://img.freepik.com/free-photo/high-angle-pepper-onion-pizza_23-2148235044.jpg",
      description: `Pizza topped with a flavorful combination of peppers and onions.`,
    },
    {
      title: "Buffalo Chicken Pizza",
      isNew: false,
      favorite: true,
      price: 125,
      image:
        "https://img.freepik.com/free-photo/top-view-buffalo-chicken-pizza-with-wooden-background_23-2148686408.jpg",
      description: `Buffalo chicken pizza with spicy buffalo sauce and tender chicken pieces.`,
    },
  ];

  const handleButtonPress = () => {
    Alert.alert("Added to cart");
  };

  const [text, onChangeText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isSearchVisible, setSearchVisibility] = useState(false);
  const [searchResults, setSearchResults] = useState(mockItemData);

  const toggleSearchVisibility = () => {
    setSearchVisibility(!isSearchVisible);
  };

  const handleTextChange = (inputText) => {
    onChangeText(inputText);

    const filteredResults = mockItemData.filter((item) =>
      item.title.toLowerCase().includes(inputText.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const renderItem = ({ item }) => (
    <View style={itemStyles.item}>
      <View style={itemStyles.photoContainer}>
        <Image style={itemStyles.mainPicture} source={{ uri: item.image }} />
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
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={inputStyles.inputWrapper}>
        {isSearchVisible && (
          <TextInput
            style={inputStyles.input}
            onChangeText={handleTextChange}
            value={text}
            placeholder="Search..."
            keyboardType="default"
            keyboardAppearance="default"
            placeholderTextColor={colors.red}
          />
        )}
        <View style={inputStyles.iconsWrapper}>
          <CustomTouchable onPress={() => setModalVisible(true)}>
            <Image source={favorite} style={inputStyles.favorite}></Image>
          </CustomTouchable>

          <CustomTouchable onPress={toggleSearchVisibility}>
            <Image source={search} style={inputStyles.search}></Image>
          </CustomTouchable>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={modalStyles.centeredView}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={modalStyles.centeredView}>
            <TouchableOpacity activeOpacity={1} onPress={() => {}}>
              <View style={modalStyles.modalView}>
                <Text style={modalStyles.modalText}>Hello World!</Text>
                <Pressable
                  style={[modalStyles.button, modalStyles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={modalStyles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

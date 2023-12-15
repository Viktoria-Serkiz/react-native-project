import { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  Modal,
  FlatList,
  TextInput,
  Pressable,
  Share,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Linking,
  Dimensions,
  Button,
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

  const pizzaData = [
    {
      image:
        "https://img.freepik.com/premium-vector/pizza-sale-flyer_124507-1644.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-vector/pizza-time-isometric_1284-22330.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-photo/beautiful-mexican-party-decoration-with-food_23-2149317348.jpg",
    },
    {
      image:
        "https://img.freepik.com/free-psd/delicious-burger-food-menu-instagram-facebook-story-template_120329-1645.jpg",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/fast-food-street-snacks-restaurant-vector-menu_8071-22465.jpg",
    },
  ];

  const { width, height } = Dimensions.get("screen");

  const handleButtonPress = () => {
    Alert.alert("Added to cart");
  };

  const [text, onChangeText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSearchVisible, setSearchVisibility] = useState(false);
  const [searchResults, setSearchResults] = useState(mockItemData);
  const [refreshing, setRefreshing] = useState(false);
  const [additionalData, setAdditionalData] = useState([]);

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

  const handleShare = (item) => {
    const imageUrl = item.image;

    Linking.openURL(`mailto:https://www.pizzaday.com.ua/address}`);
  };

  const renderSwiper = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleShare(item)}>
        <View style={{ width: width }}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 400,
              minHeight: 500,
              maxHeight: 600,
              resizeMode: "cover",
              marginBottom: 70,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

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
        <SafeAreaView style={modalStyles.centeredView}>
          <Text style={modalStyles.modalText}>Sale</Text>
          <FlatList
            data={pizzaData}
            renderItem={({ item, index }) => (
              <View key={index} style={{ width, height }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: width * 0.8,
                    height: height * 0.6,
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const index = Math.floor(
                event.nativeEvent.contentOffset.x / width
              );
              setCurrentIndex(index);
            }}
            onLayout={() => {
              setTimeout(() => {
                const newIndex = (currentIndex + 1) % pizzaData.length;
                setCurrentIndex(newIndex);
                flatListRef?.scrollToIndex({ animated: true, index: newIndex });
              }, 5000);
            }}
            ref={(ref) => {
              flatListRef = ref;
            }}
            onPress={handleShare}
          />
          <FlatList
            data={pizzaData}
            horizontal
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View
                style={[
                  modalStyles.indicator,
                  {
                    backgroundColor:
                      index === currentIndex ? colors.blue : colors.grey,
                  },
                ]}
              />
            )}
          />
          <View style={modalStyles.buttonContainer}>
            <Pressable
              style={[modalStyles.button, modalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalStyles.textStyle}>Hide Modal</Text>
            </Pressable>
            <Pressable
              style={[modalStyles.button, modalStyles.buttonShare]}
              onPress={() =>
                renderSwiper({ item: { image: pizzaData[currentIndex].image } })
              }
            >
              <Button
                title="Share"
                style={modalStyles.textStyle}
                onPress={handleShare}
              ></Button>
            </Pressable>
          </View>
        </SafeAreaView>
      </Modal>

      <FlatList
        data={[...searchResults, ...additionalData]}
        keyExtractor={(item) => item.toString()}
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

{
  /* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <FlatList
              data={pizzaData}
              renderItem={renderSwiper}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(event) => {
                const index = Math.floor(
                  event.nativeEvent.contentOffset.x / width
                );
                setCurrentIndex(index);
              }}
            />
            <Pressable
              style={[modalStyles.button, modalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalStyles.textStyle}>Hide Modal</Text>
            </Pressable>
            <View style={modalStyles.circleIndicatorContainer}>
              {pizzaData.map((_, index) => (
                <View
                  key={index}
                  style={[
                    modalStyles.circleIndicator,
                    {
                      backgroundColor:
                        index === currentIndex ? colors.blue : colors.grey,
                    },
                  ]}
                />
              ))}
            </View>
          </View>
        </SafeAreaView>
      </Modal> */
}

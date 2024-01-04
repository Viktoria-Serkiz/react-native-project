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
import Animated, {
  BounceIn,
  BounceOut,
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { ScreenContainer } from "../../../common/components/ScreenContainer";

import { itemStyles, inputStyles } from "./styles";

import CustomTouchable from "../../../common/components/CustomTouchable";

import orderStore from "../store/Order";

import cart from "../../../utils/img/cart.png";
import search from "../../../utils/img/search.png";
import favorite from "../../../utils/img/favorite.png";

import * as colors from "../../../theme/colors";

export const HomeScreen = ({ navigation, item }) => {
  const mockItemData = orderStore.data;

  const { width, height } = Dimensions.get("screen");

  const handleButtonPress = () => {
    Alert.alert("Added to cart");
  };

  const [text, onChangeText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [additionalData, setAdditionalData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedHeader = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 64], [64, 0], Extrapolation.CLAMP),
    opacity: interpolate(scrollY.value, [0, 64], [1, 0]),
  }));

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

  const onItemBuy = (item) => {
    orderStore.setOrders(item);
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
                  <TouchableOpacity
                    style={{ backgroundColor: "yellow" }}
                    onPress={() => onItemBuy(item)}
                  >
                    <Text style={itemStyles.buyButtonText}>Buy</Text>
                  </TouchableOpacity>
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
    [orderStore.input]
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View style={[inputStyles.inputWrapper, animatedHeader]}>
        {isVisible && (
          <Animated.View entering={BounceIn} exiting={BounceOut}>
            <TextInput
              style={inputStyles.input}
              onChangeText={(value) => orderStore.setInput(value)}
              value={orderStore.input}
              placeholder="Search..."
              keyboardType="default"
              keyboardAppearance="default"
              placeholderTextColor={colors.red}
            />
          </Animated.View>
        )}

        <View style={inputStyles.iconsWrapper}>
          <CustomTouchable onPress={() => navigateToModal(item)}>
            <Image source={favorite} style={inputStyles.favorite}></Image>
          </CustomTouchable>

          <CustomTouchable onPress={() => setIsVisible(!isVisible)}>
            <Image source={search} style={inputStyles.search}></Image>
          </CustomTouchable>
        </View>
      </Animated.View>

      <Animated.FlatList
        data={orderStore.filteredArray}
        keyExtractor={(item, index) => index + ""}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
        onScroll={scrollHandler}
      />
    </SafeAreaView>
  );
};

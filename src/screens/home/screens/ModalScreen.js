import { useState, useRef } from "react";
import {
  Text,
  View,
  Image,
  Button,
  Linking,
  FlatList,
  Pressable,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { modalStyles } from "./styles";
import * as colors from "../../../theme/colors";

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

export const ModalScreen = ({ route }) => {
  const { modalImg } = route.params;

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const { width, height } = Dimensions.get("screen");

  const handleShare = () => {
    Linking.openURL(`https://www.pizzaday.com.ua/address`);
  };

  const handlePhoneNumber = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const renderSwiper = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleShare(item)} style={{ flex: 1 }}>
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

  const handleIndicatorPress = (index) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  return (
    <SafeAreaView style={modalStyles.centeredView}>
      <Text style={modalStyles.modalText}>Sale</Text>
      <FlatList
        data={pizzaData}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => handleShare(item)}
            style={{ width, height }}
          >
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
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        onLayout={() => {
          setTimeout(() => {
            const newIndex = (currentIndex + 1) % pizzaData.length;
            setCurrentIndex(newIndex);
            flatListRef.current?.scrollToIndex({
              animated: true,
              index: newIndex,
            });
          }, 5000);
        }}
        ref={flatListRef}
        onPress={handleShare}
      />
      <View style={modalStyles.indicatorsContainer}>
        {pizzaData.map((item, index) => (
          <Pressable
            key={index}
            style={[
              modalStyles.indicator,
              {
                backgroundColor:
                  index === currentIndex ? colors.blue : colors.white,
              }, 
            ]}
            onPress={() => handleIndicatorPress(index)}
          />
        ))}
      </View>
      <View style={modalStyles.buttonContainer}>
        <Pressable
          style={[modalStyles.button, modalStyles.buttonShare]}
          onPress={() => handleIndicatorPress(currentIndex + 1)}
        >
          <Button
            title="Share"
            style={modalStyles.textStyle}
            onPress={handlePhoneNumber}
          ></Button>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

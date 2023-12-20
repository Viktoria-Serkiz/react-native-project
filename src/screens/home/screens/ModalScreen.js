import { useState, useRef } from "react";
import {
  Text,
  View,
  Image,
  Modal,
  Button,
  FlatList,
  Pressable,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { modalStyles } from "./styles";

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
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const { width, height } = Dimensions.get("screen");

  // const { modalImg } = route.params;

  const navigateBack = () => {
    navigation.goBack();
    // route.params.goBackCallBack("Test value");
  };

  const handleShare = (modalImg) => {
    const imageUrl = item.image;

    Linking.openURL(`mailto:https://www.pizzaday.com.ua/address}`);
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

  return (
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
            const index = Math.floor(event.nativeEvent.contentOffset.x / width);
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
  );
};

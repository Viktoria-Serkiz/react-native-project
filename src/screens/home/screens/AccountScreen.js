import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AccountScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const storedUserData = await AsyncStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  };

  return (
    <View>
      <Text>User info</Text>
      {userData && (
        <View>
          <Text>Name: {userData.name}</Text>
          <Text>Surname: {userData.surname}</Text>
          <Text>Phone Number: {userData.phoneNumber}</Text>
        </View>
      )}
    </View>
  );
};

// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, Button } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const AccountScreen = () => {
//   const [userData, setUserData] = useState({
//     name: "",
//     surname: "",
//     phoneNumber: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     getUserData();
//   }, []);

//   const getUserData = async () => {
//     const storedUserData = await AsyncStorage.getItem("userData");
//     if (storedUserData) {
//       setUserData(JSON.parse(storedUserData));
//     }
//   };

//   const handleSave = async () => {
//     try {
//       await AsyncStorage.setItem("userData", JSON.stringify(userData));
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Error saving user data:", error);
//     }
//   };

//   return (
//     <View>
//       <Text>User info</Text>
//       {isEditing ? (
//         <View>
//           <TextInput
//             placeholder="Name"
//             value={userData.name}
//             onChangeText={(text) => setUserData({ ...userData, name: text })}
//           />
//           <TextInput
//             placeholder="Surname"
//             value={userData.surname}
//             onChangeText={(text) => setUserData({ ...userData, surname: text })}
//           />
//           <TextInput
//             placeholder="Phone Number"
//             value={userData.phoneNumber}
//             onChangeText={(text) =>
//               setUserData({ ...userData, phoneNumber: text })
//             }
//           />
//           <Button title="Save" onPress={handleSave} />
//         </View>
//       ) : (
//         <View>
//           <Text>Name: {userData.name}</Text>
//           <Text>Surname: {userData.surname}</Text>
//           <Text>Phone Number: {userData.phoneNumber}</Text>
//           <Button title="Edit" onPress={() => setIsEditing(true)} />
//         </View>
//       )}
//     </View>
//   );
// };

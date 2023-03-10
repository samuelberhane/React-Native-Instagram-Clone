import { Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const UsersCard = ({ user, followUser, removeUser }) => {
  return (
    <View
      style={{
        width: 170,
        borderWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 20,
        position: "relative",
      }}
    >
      {/* Remove user */}
      <TouchableOpacity
        style={{ position: "absolute", top: 5, right: 10 }}
        onPress={() => removeUser(user?.data?.id)}
      >
        <FontAwesome5 name="times" size={16} color="#234323" />
      </TouchableOpacity>

      {/* user image */}
      {user?.data?.profilePicture ? (
        <Image
          source={{ uri: user?.data?.profilePicture }}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            marginBottom: 5,
          }}
        />
      ) : (
        <Image
          source={require("../assets/Avatar.png")}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            marginBottom: 5,
          }}
        />
      )}

      {/* user name */}
      <Text style={{ marginBottom: 20 }}>{user?.data?.fullName}</Text>

      {/* follow user */}
      <TouchableOpacity
        onPress={() => followUser(user?.data?.id)}
        style={{
          backgroundColor: "#F65CD7",
          paddingHorizontal: 24,
          paddingVertical: 4,
          borderRadius: 3,
        }}
      >
        <Text style={{ color: "white" }}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UsersCard;

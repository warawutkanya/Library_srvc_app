import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useBorrowed } from "../../context/BorrowedContext";
import { useFavorites } from "../../context/FavoritesContext";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const BookDetail = () => {
  const { book } = useLocalSearchParams();
  const bookData = JSON.parse(book);
  const { addBorrowedItem, removeBorrowedItem, borrowedItems } = useBorrowed();
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  const [isBorrowed, setIsBorrowed] = useState(
    borrowedItems.some((item) => item.id === bookData.id)
  );
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((item) => item.id === bookData.id)
  );

  const handleBorrowToggle = () => {
    if (isBorrowed) {
      removeBorrowedItem(bookData.id);
    } else {
      addBorrowedItem(bookData);
    }
    setIsBorrowed(!isBorrowed);
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(bookData.id);
    } else {
      addFavorite(bookData);
    }
    setIsFavorite(!isFavorite);
  };

  if (!bookData) {
    return (
      <SafeAreaView className="bg-primary h-full justify-center items-center">
        <Text className="text-white text-xl">Book not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex my-6 px-4">
          <Image
            source={{ uri: bookData.thumbnail }}
            className="w-full h-60 rounded-xl mt-3"
            resizeMode="cover"
          />
          <Text className="text-2xl font-psemibold text-white mt-1">
            {bookData.title}
          </Text>
          <Text className="text-white mt-1">{bookData.genre}</Text>
          <Text className="text-white mt-1">{bookData.plot}</Text>

          <View className="mt-6 mb-8">
            <TouchableOpacity
              onPress={handleBorrowToggle}
              className={`px-6 py-3 rounded-md mb-4 ${
                isBorrowed ? "bg-red-500" : "bg-blue-500"
              }`}
            >
              <Text className="text-white text-lg font-semibold text-center">
                {isBorrowed ? "คืนหนังสือ" : "ยืม"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleFavoriteToggle}
              className={`px-4 py-3 rounded-md ${
                isFavorite ? "bg-red-500" : "bg-orange-500"
              }`}
            >
              <Text className="text-white text-lg font-semibold text-center">
                {isFavorite ? "ลบออกจากรายการโปรด" : "เพิ่มเข้าในรายการโปรด"}
              </Text>
            </TouchableOpacity>

            <CustomButton
              title="กลับสู่หน้าหลัก"
              handlePress={() => router.push("/home")}
              containerStyles="w-full my-5"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetail;

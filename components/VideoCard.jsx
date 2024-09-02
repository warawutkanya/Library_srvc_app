import { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { router, usePathname } from "expo-router";
import { icons } from "../constants";

const VideoCard = ({ book }) => {
  const [play, setPlay] = useState(false);
  const pathname = usePathname();
  const [bdquery] = useState(book.title); // Assuming book.title is unique for the query

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {book.title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {book.genre}
            </Text>
          </View>
        </View>
        <View className="w-[46px] h-[46px] rounded-lg flex justify-center items-center p-0.5"></View>
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          if (bdquery === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to book detail results across the database"
            );

          if (pathname.startsWith("/bookdetail")) {
            router.setParams({ book: JSON.stringify(book) }); // Pass book data
          } else {
            router.push({
              pathname: `/bookdetail/${bdquery}`,
              params: { book: JSON.stringify(book) }, // Pass book data without bdquery
            });
          }
        }}
        className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
      >
        <Image
          source={{ uri: book.thumbnail }}
          className="w-full h-full rounded-xl mt-3"
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default VideoCard;

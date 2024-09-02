import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFavorites } from "../../context/FavoritesContext";
import { useRouter } from "expo-router"; // Import useRouter

const Favorite = () => {
  const { favorites } = useFavorites(); // Access the favorites from context
  const router = useRouter(); // Initialize the router

  const handleItemPress = (book) => {
    // Navigate to the BookDetail screen with the book data
    router.push({
      pathname: `/bookdetail/${book.id}`, // Use book.id as the query parameter
      params: { book: JSON.stringify(book) }, // Pass book data
    });
  };

  return (
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <Text className="text-2xl text-white font-psemibold">หนังสือที่ชอบ</Text>

      {favorites.length === 0 ? (
        <Text className="text-white mt-4">ไม่มีหนังสือในรายการโปรด</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()} // Ensure unique key
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <View className="flex flex-row mb-4">
                <Image
                  source={{ uri: item.thumbnail }}
                  className="w-20 h-20 rounded-xl"
                  resizeMode="cover"
                />
                <View className="ml-3 justify-center">
                  <Text className="text-lg text-white font-psemibold">
                    {item.title}
                  </Text>
                  <Text className="text-sm text-gray-100">{item.genre}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Favorite;

import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBorrowed } from "../../context/BorrowedContext";
import { useRouter } from "expo-router"; // Import useRouter

const Borrowed = () => {
  const { borrowedItems } = useBorrowed();
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
      <Text className="text-2xl text-white font-psemibold">หนังสือที่ยืม</Text>
      {borrowedItems.length === 0 ? (
        <Text className="text-white mt-4">ยังไม่มีหนังสือที่ยืม</Text>
      ) : (
        <FlatList
          data={borrowedItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <View className="flex flex-row items-center mb-4">
                <Image
                  source={{ uri: item.thumbnail }}
                  className="w-20 h-20 rounded-xl"
                  resizeMode="cover"
                />
                <View className="ml-4">
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

export default Borrowed;

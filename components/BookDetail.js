import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router"; // Import the hook to get parameters
import { useFavorites } from "../../context/FavoritesContext"; // Import the Favorites context
import { router } from "expo-router";

const BookDetail = () => {
    const { book } = useLocalSearchParams(); // Retrieve the book data from params
    const bookData = JSON.parse(book); // Parse the book data from string to object
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = favorites.some(fav => fav.id === bookData.id);

    if (!bookData) {
        return (
            <SafeAreaView className="bg-primary h-full justify-center items-center">
                <Text className="text-white text-xl">Book not found</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="bg-primary h-full">
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

                <View className="mt-6 mb-8">
                    <TouchableOpacity
                        onPress={() => alert("Borrowed")}
                        className="bg-blue-500 px-6 py-3 rounded-md mb-4"
                    >
                        <Text className="text-white text-lg font-semibold text-center">
                            ยืม
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            if (isFavorite) {
                                removeFavorite(bookData.id);
                            } else {
                                addFavorite(bookData);
                            }
                        }}
                        className={`px-4 py-3 rounded-md ${isFavorite ? 'bg-red-500' : 'bg-orange-500'}`}
                    >
                        <Text className="text-white text-lg font-semibold text-center">
                            {isFavorite ? 'ลบจากรายการโปรด' : 'เพิ่มเข้าในรายการโปรด'}
                        </Text>
                    </TouchableOpacity>

                    <CustomButton
                        title="กลับสู่หน้าหลัก"
                        handlePress={() => router.push("/home")}
                        containerStyles="w-full my-5"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BookDetail;

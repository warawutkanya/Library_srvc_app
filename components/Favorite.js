import { SafeAreaView, FlatList, Text, View, Image } from "react-native";
import { useFavorites } from "../context/FavoritesContext"; // Import the Favorites context

const Favorite = () => {
    const { favorites } = useFavorites();

    return (
        <SafeAreaView className="bg-primary h-full px-4">
            <Text className="text-2xl text-white font-psemibold">หนังสือที่ชอบ</Text>
            {favorites.length === 0 ? (
                <Text className="text-white mt-4">ไม่มีหนังสือในรายการโปรด</Text>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View className="flex flex-row mb-4">
                            <Image
                                source={{ uri: item.thumbnail }}
                                className="w-20 h-20 rounded-xl mt-3"
                                resizeMode="cover"
                            />
                            <View className="ml-3 justify-center">
                                <Text className="text-lg text-white font-psemibold">{item.title}</Text>
                                <Text className="text-sm text-gray-100">{item.genre}</Text>
                            </View>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    );
};

export default Favorite;

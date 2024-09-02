import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import { icons } from "../../constants";

import { InfoBox } from "../../components";

const Profile = () => {
  const logout = async () => {
    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              onPress={logout}
              className="flex w-full items-end mb-10"
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg flex justify-center items-center">
              <Image
                source={{
                  uri: "https://iteachers.srvc.ac.th/images/student/66/66309030002.jpg",
                }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title="วราวุธ กันยา"
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-5 flex flex-row">
              <InfoBox
                title="คอมพิวเตอร์โปรเเกรมเมอร์"
                subtitle="เเผนก"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox title="5/1" subtitle="ห้อง" titleStyles="text-xl" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;

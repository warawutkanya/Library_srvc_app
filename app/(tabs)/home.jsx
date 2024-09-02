// File: screens/Home.jsx

import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { EmptyState, SearchInput, Trending, VideoCard } from "../../components";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "แฮร์รี่ พอตเตอร์",
      genre: "วรรณกรรมเยาวชน, แฟนตาซี, ลึกลับ,",
      thumbnail:
        "https://m.media-amazon.com/images/I/71sH3vxziLL._AC_UF1000,1000_QL80_.jpg",
      plot: "นวนิยายเป็นเรื่องราวที่เกิดขึ้นรอบตัวแฮร์รี่ พอตเตอร์ เด็กกำพร้าผู้พบว่าตนเองเป็นพ่อมดเมื่ออายุได้สิบเอ็ดปี อาศัยอยู่ในโลกแห่งผู้ไม่มีอำนาจวิเศษหรือมักเกิล ซึ่งถือเป็นประชากรปกติ[14] ความสามารถของเขานั้นมีมาโดยกำเนิดและเด็กจำพวกนี้จึงได้รับเชิญให้เข้าศึกษาในโรงเรียนซึ่งสอนทักษะที่จำเป็นแก่การประสบความสำเร็จในโลกพ่อมด[15] แฮร์รี่กลายมาเป็นนักเรียนที่โรงเรียนคาถาพ่อมดแม่มดและเวทมนตร์ศาสตร์ฮอกวอตส์ และเรื่องราวส่วนใหญ่ในนวนิยายเกิดขึ้น ณ สถานที่แห่งนี้ เมื่อแฮร์รี่เติบโตขึ้นผ่านช่วงวัยรุ่น เขาเรียนรู้ที่จะก้าวข้ามปัญหาที่เผชิญกับเขา ทั้งทางเวทมนตร์ สังคมและอารมณ์ รวมทั้งความท้าทายอย่างวัยรุ่นทั่วไป เช่น มิตรภาพและการสอบ ตลอดจนบททดสอบอันยิ่งใหญ่กว่าที่เตรียมพร้อมเขาสำหรับการเผชิญหน้าที่คอยอยู่เบื้องหน้า",
    },
    {
      id: 2,
      title: "เดอะ ฮอบบิท",
      genre: "นวนิยายแฟนตาซี",
      thumbnail: "https://i.weltbild.de/p/der-hobbit-072231934.jpg?v=7&wp=_max",
      plot: "พ่อมดแกนดัล์ฟ แกล้งหลอกบิลโบ แบ๊กกิ้นส์ ฮอบบิทคนหนึ่งให้จัดงานเลี้ยงต้อนรับธอริน กับผองเพื่อนคนแคระของเขา ที่กำลังตระเตรียมการเดินทางไปยังภูเขาโลนลี่เพื่อชิงอาณาจักรและทรัพย์สมบัติของเหล่าคนแคระคืนจากมังกรสม็อก ระหว่างงานเลี้ยง แกนดัล์ฟจึงเผยแผนที่เส้นทางลับในเทือกเขา และเกลี้ยกล่อมให้บิลโบเข้าร่วมการเดินทางไปด้วยในฐานะ หัวขโมยผู้เก่งกาจ พวกคนแคระเห็นพ้องด้วย ส่วนบิลโบตกกระไดพลอยโจนเข้าร่วมการเดินทางไปแบบงุนงง",
    },
    {
      id: 3,
      title: "ฟอร์เรสท์ กัมพ์ ",
      genre: "นวนิยาย, ดราม่า",
      thumbnail: "https://m.media-amazon.com/images/I/51pv80RoY8L.jpg",
      plot: "ในช่วงสามทศวรรษแห่งความโกลาหล ฟอร์เรสท์ ดำเนินชีวิตผ่านกระแสช่วงเหตุการณ์ต่างๆที่ผันเขาจากคนร่างกายพิการไปเป็นดาราอเมริกันฟุตบอล จากวีรบุรุษในสงครามเวียดนามเป็นเศรษฐีธุรกิจเรือกุ้ง จากเกียรติยศแห่งทำเนียบขาวไปสู่อ้อมกอดของผู้ที่เขามีใจรักจริง ฟอร์เรสท์คือลักษณะรูปธรรมแห่งยุค คือความไร้เดียงสาในดินแดนอเมริกาที่กำลังสูญเสียความบริสุทธิ์ จิตใจของเขาตระหนักต่อสิ่งที่ไอคิวอันจำกัดของตัวเองไม่อำนวย ขอบข่ายศีลธรรมของเขาไม่เคยคลอนแคลน ชัยชนะทั้งหลายของเขากลายเป็นแรงบันดาลใจแก่เราทุกคน",
    },
  ];

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <VideoCard book={item} /> // Passing the entire book object
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  ยินดีต้อนรับ วราวุธ กันยา
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Library Srvc
                </Text>
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                หนังสือใหม่ล่าสุด
              </Text>

              <Trending posts={posts} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="ไม่เจอหนังสือ" subtitle="ไม่เจอหนังสือในหน้านี้" />
        )}
        refreshControl={
          <RefreshControl
            refreshing={false} // Update as needed
            onRefresh={() => {
              // Handle refresh logic here
            }}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

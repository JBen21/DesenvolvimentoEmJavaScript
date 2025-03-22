import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get("screen");

export default function App() {

  const minecraftPosts = [
    { user: 'Steve', avatar: 'https://minotar.net/avatar/Steve', image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4e/Steve_Artwork_3.png/revision/latest/scale-to-width-down/250?cb=20210401050354', caption: 'Hora de minerar! Espero não ter problemas...', likes: 32 },
    { user: 'Alex', avatar: 'https://i.pinimg.com/originals/a9/a4/ec/a9a4ec03fa9afc407028ca40c20ed774.jpg', image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d8/Natural_Diamond_Ore.png/revision/latest/scale-to-width-down/985?cb=20210609160843', caption: 'Achei diamantes rapaziada!', likes: 98 },
    { user: 'CreeperFan', avatar: 'https://minotar.net/avatar/Creeper', image: 'https://t.ctcdn.com.br/HCDwYHeN0DLHNVor26myAMZ_6Qk=/640x360/smart/i579288.png', caption: 'Sssssss! (Vou pegar mais um trouxa kkkk)', likes: 45 },
    { user: 'M_Enderman', avatar: 'https://mir-s3-cdn-cf.behance.net/projects/404/161c8f175494329.Y3JvcCwzNTA4LDI3NDMsMCwxMTEx.jpg', image: 'https://pm1.aminoapps.com/6586/8aabe1e2f19e2232b96300e51172ae3f8d29193e_hq.jpg', caption: 'Olhe nos meus olhos agora!! Vc não era o Bomzão? Ein? EIN?', likes: 67 },
    { user: 'BuilderMax', avatar: 'https://minotar.net/avatar/Notch', image: 'https://i.ytimg.com/vi/A23ODgNB5Bk/maxresdefault.jpg', caption: 'Construindo minha humilde casinha.', likes: 120 },
    { user: 'Piggy', avatar: 'https://minotar.net/avatar/Pig', image: 'https://preview.redd.it/mojang-added-a-crown-to-the-pig-on-the-minecraft-launcher-v0-37rrghrq07991.png?width=206&format=png&auto=webp&s=d33d6119043d2cdbc112351de40f046323462625', caption: 'Oink! Oink!(Até agora tudo indo de acordo com o Plano.) ', likes: 25 },
    { user: 'Wolfie', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJo7HrQEDaMOAS5dtRBaDe1WkP6eclGyKYg&s', image: 'https://i.ytimg.com/vi/vEfW_ykwYYs/sddefault.jpg', caption: 'Woof Woof! (Concordo Plenamente.)', likes: 52 },
    { user: 'Villager01', avatar: 'https://minotar.net/avatar/Villager', image: 'https://i.ytimg.com/vi/HsXGyEps1R8/maxresdefault.jpg', caption: 'Hmmmm...Realmente Faz sentido.', likes: 40 },
    { user: 'Blaze_King', avatar: 'https://minecraftfaces.com/wp-content/bigfaces/big-blaze-face.png', image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1b/BlazeAndPlayer.png/revision/latest/scale-to-width-down/250?cb=20201215210837', caption: 'Fogo neles! Queimem filhos da fruta!!!', likes: 73 },
    { user: 'Slimey', avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2f543a5a-652f-4186-a396-a97657c9e371/d5q2zky-8bdaf29f-a74a-4490-9016-f216a9551849.jpg', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTln6xYXLPN4G6WxAKFyI9IP_4MItZ5gArHbQ&s', caption: 'Me divertindo com meus amigos!!', likes: 18 },
  ];
  const profiles = [
    { user: 'Steve', avatar: 'https://minotar.net/avatar/Steve' },
    { user: 'Alex', avatar: 'https://i.pinimg.com/originals/a9/a4/ec/a9a4ec03fa9afc407028ca40c20ed774.jpg' },
    { user: 'CreeperFan', avatar: 'https://minotar.net/avatar/Creeper' },
    { user: 'M_Enderman', avatar: 'https://mir-s3-cdn-cf.behance.net/projects/404/161c8f175494329.Y3JvcCwzNTA4LDI3NDMsMCwxMTEx.jpg' },
    { user: 'Piggy', avatar: 'https://minotar.net/avatar/Pig' },
    { user: 'Wolfie', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJo7HrQEDaMOAS5dtRBaDe1WkP6eclGyKYg&s' },
    { user: 'Villager01', avatar: 'https://minotar.net/avatar/Villager' },
    { user: 'Blaze_King', avatar: 'https://minecraftfaces.com/wp-content/bigfaces/big-blaze-face.png' },
    { user: 'Slimey', avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2f543a5a-652f-4186-a396-a97657c9e371/d5q2zky-8bdaf29f-a74a-4490-9016-f216a9551849.jpg' },
  ];

  const ProfileScroll = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.profileScroll}>
      {profiles.map((profile, index) => (
        <View key={index} style={styles.profileItem}>
          <Image style={styles.profileAvatar} source={{ uri: profile.avatar }} />
          <Text style={styles.profileName}>{profile.user}</Text>
        </View>
      ))}
    </ScrollView>
  );

  const Post = ({ user, avatar, image, caption, likes }) => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    return (
      <View style={styles.postCard}>
        <View style={styles.postHeader}>
          <Image style={styles.avatar} source={{ uri: avatar }} />
          <Text style={styles.username}>{user}</Text>
        </View>
        <Image style={styles.postImage} source={{ uri: image }} />
        <View style={styles.postActions}>
          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <AntDesign name={liked ? 'heart' : 'hearto'} size={24} color={liked ? 'red' : 'black'} />
          </TouchableOpacity>
          <Feather name="message-circle" size={24} color="black" style={{ marginHorizontal: 12 }} />
          <TouchableOpacity onPress={() => setSaved(!saved)}>
            <Feather name={saved ? 'bookmark' : 'bookmark'} size={24} color={saved ? '#228B22' : 'black'} />
          </TouchableOpacity>
        </View>
        <Text style={styles.likes}>{liked ? likes + 1 : likes} likes</Text>
        <Text style={styles.caption}><Text style={{ fontWeight: 'bold' }}>{user} </Text>{caption}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>MineGram</Text>
      </View>
      <ProfileScroll />
      <ScrollView>
        {minecraftPosts.map((post, index) => (
          <Post
            key={index}
            user={post.user}
            avatar={post.avatar}
            image={post.image}
            caption={post.caption}
            likes={post.likes}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95d86d',
  },
  header: {
    height: 60,
    backgroundColor: '#5a3d1b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileScroll: {
    marginVertical: 10,
    paddingLeft: 10,
  },
  profileItem: {
    alignItems: 'center',
    marginRight: 15,
    width: 70,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#5a3d1b',
  },
  profileName: {
    marginTop: 5,
    fontSize: 20,
    color: '#3c2f1c',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  postCard: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#3c2f1c',
    backgroundColor: '#d9c79f',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3c2f1c',
  },
  postImage: {
    width: width,
    height: 300,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  likes: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  caption: {
    paddingHorizontal: 10,
    fontSize: 14,
    paddingBottom: 10,
  },
});
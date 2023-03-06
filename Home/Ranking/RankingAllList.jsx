import { useNavigation } from "@react-navigation/native"
import { View, StyleSheet } from "react-native"
import { TopMenu } from "../../components/TopMenu";
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import axios from "axios";
import { FlatList } from "react-native";



export const RankingAllList = () => {

  //DBから取ってきたデータを配列で管理
  const [ allRanking, setAllRanking ] = React.useState([]);

  //DBから全ランキングを取ってくる
  const fetchAllRanking = () => {
    axios.get("https://642e-2404-7a87-660-1800-a8da-c941-b79b-3f97.jp.ngrok.io/api/rankings")
    .then((res) => {
      // console.log(res.data);
      setAllRanking(res.data);
    })
    .catch((e) => {
      console.log(e);
    }) 
  }

  //タイトル左のアイコン
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  //画面遷移
  const navigation = useNavigation();

  //ランキングカード用コンポーネント
  const RankingCard = (item) => {
    console.log(item);
    return ( 
    <Card style={{
      marginVertical: 10
    }}>
      <Card.Title title={item.fish_id} left={LeftContent} titleStyle={{fontSize: 24, paddingTop: 5}}/>
      <Card.Actions>
        <Text>{item.start}</Text>
        <Button onPress={() => {navigation.navigate('RankingDetail', {
          fish_id:item.fish_id,
        })}}>詳細を見る</Button>
      </Card.Actions>
    </Card>
    )
  }
  //-------ここまで

  //初回マウント時にデータフェッチ
  React.useEffect(() => {
    fetchAllRanking();
  }, [])

  return (
    <View style={styles.container}>
      <TopMenu/>
      <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={allRanking}
      renderItem={({item}) => <RankingCard start={item.start} end={item.end} num={item.num_of_participant} fish_id={item.fish_id}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:"#08073D"
  },
  topmenu: {
      height: 50
  }
})
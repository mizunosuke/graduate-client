import { View, Text } from "react-native"

export const RankingDetail = (props) => {
  console.log(props.route.params);
  const { fish_id } = props.route.params;
  return (
    <View>
        <Text>{fish_id}</Text>
    </View>
  )
}
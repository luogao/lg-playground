import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import isEqual from 'lodash.isequal'
import { useNavigation } from '@react-navigation/native'
import Arrow from '../../components/Arrow'

type Props = {
  item: RouteItemConfig
}

const Item: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate(item.name)
  }

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handlePress}>
      <Text style={styles.label}>{item.name}</Text>
      <Arrow />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#c9c9c9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
  },
})

export default React.memo(Item, isEqual)

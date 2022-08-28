import React from 'react'
import { View } from 'react-native'
import isEqual from 'lodash.isequal'
import { Twitter, TwitterFlatList } from './twitter'

type Props = {}

const FlashListDemo: React.FC<Props> = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Twitter />
    </View>
  )
}

export default React.memo(FlashListDemo, isEqual)

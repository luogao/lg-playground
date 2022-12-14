import React, { useContext, useState } from 'react'
import { FlatList, View } from 'react-native'

import { DebugContext } from '../Debug'

import { tweets } from './data/tweets'
import TweetCell from './TweetCell'
import { Header, Footer, Divider, Empty } from './Twitter'

const TwitterFlatList = () => {
  const debugContext = useContext(DebugContext)
  const [data, setData] = useState(tweets)

  const handleEndReached = () => {
    setData([...data, ...tweets])
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        testID='FlatList'
        keyExtractor={(item) => {
          return item.id
        }}
        renderItem={({ item }) => {
          return <TweetCell tweet={item} />
        }}
        ListHeaderComponent={Header}
        ListHeaderComponentStyle={{ backgroundColor: '#ccc' }}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={Empty()}
        onEndReached={handleEndReached}
        data={debugContext.emptyListEnabled ? [] : data}
        initialScrollIndex={debugContext.initialScrollIndex}
        viewabilityConfig={{
          waitForInteraction: true,
          itemVisiblePercentThreshold: 50,
          minimumViewTime: 1000,
        }}
        // onViewableItemsChanged={(info) => {
        //   console.log(info)
        // }}
      />
    </View>
  )
}

export default TwitterFlatList

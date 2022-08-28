import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import isEqual from 'lodash.isequal'
import routesConfig from '../../routes/config'
import Item from './Item'

type Props = {}

const Home: React.FC<Props> = (props) => {
  return (
      <ScrollView style={{ flex: 1 }}>
        {routesConfig.map((route) => (
          <Item key={route.name} item={route} />
        ))}
      </ScrollView>
  )
}

export default React.memo(Home, isEqual)

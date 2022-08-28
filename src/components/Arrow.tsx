import React from 'react'
import { StyleSheet, View } from 'react-native'
import isEqual from 'lodash.isequal'

type Props = {}

const Arrow: React.FC<Props> = (props) => {
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.line,
          {
            transform: [
              { translateX: 5 },
              { rotate: '45deg' },
              { translateY: 0.5 },
              { translateX: -5 },
            ],
          },
        ]}
      />
      <View
        style={[
          styles.line,
          {
            transform: [
              { translateX: 5 },
              { rotate: '-45deg' },
              { translateY: -0.5 },
              { translateX: -5 },
            ],
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 12,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: 10,
    height: 1.5,
    backgroundColor: '#9d9d9d',
    position: 'absolute',
    borderRadius: 10,
  },
})

export default React.memo(Arrow, () => true)

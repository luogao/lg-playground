import FlashListDemo from '../pages/FlashListDemo'
import { TwitterFlatList } from '../pages/FlashListDemo/twitter'

const routesConfig: RouteItemConfig[] = [
  {
    name: 'FlashListDemo',
    component: FlashListDemo,
  },
  {
    name: 'FlatListDemo',
    component: TwitterFlatList,
  },
]

export default routesConfig

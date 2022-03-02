import { App } from 'vue'
import {
  Button,
  List,
  PullRefresh,
  Image as VanImage,
  Form,
  Field,
  Icon,
  Cell,
  CellGroup,
  Search,
  Tag,
  Uploader,
  Skeleton,
  Loading,
  Divider,
  NavBar,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Picker,
  Popup,
  DatetimePicker,
  Empty,
  ActionSheet,
  TreeSelect,
  DropdownMenu,
  DropdownItem,
  Popover
} from 'vant'

// https://vant-contrib.gitee.io/vant/v3/#/zh-CN
const plugins = [
  Button,
  List,
  VanImage,
  PullRefresh,
  Form,
  Field,
  Icon,
  Cell,
  CellGroup,
  Search,
  Tag,
  Uploader,
  Skeleton,
  Loading,
  Divider,
  NavBar,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Picker,
  Popup,
  DatetimePicker,
  Empty,
  ActionSheet,
  TreeSelect,
  DropdownMenu,
  DropdownItem,
  Popover
]

export default {
  install(vm: App): void {
    plugins.forEach(item => {
      vm.component(item.name, item)
    })
  }
}

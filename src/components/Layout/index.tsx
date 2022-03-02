import { defineComponent, KeepAlive } from 'vue'

//import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    //const route = useRoute()

    return () => (
      <router-view>
        {{
          default: ({ Component, route }: { Component: any; route: any }) => (
            <>
            {/* @ts-ignore */}
              <KeepAlive>
                {route.meta.keepalive &&
                  <Component is={Component} key={route.name} />
                }
              </KeepAlive>
              {!route.meta.keepalive && <Component is={Component} key={route.name} />}
            </>
          )
        }}
      </router-view>
    )
  }
})

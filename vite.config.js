import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar', 'cardProps', 'useNGrid', 'useNGridItem',
                      'useNGi', 'useNCarousel', 'useNCarouselItem', 'useNBackTop'],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  base:'./',
})

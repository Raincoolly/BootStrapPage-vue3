<template>
    <div class="pdf">
        <template v-for="item in pageNum" :key="item"  class="pdf-page" >
            <canvas :id="`pdf-canvas-${item}`"></canvas>
        </template>
    </div>
</template>

<script>
import { reactive,toRefs,nextTick,onMounted } from 'vue'
import pdfJS from "pdfjs-dist";
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry'
pdfJS.workerSrc = workerSrc;
export default {
  name: 'PdfPreview',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      url:'',
      pageNum: 0,
      pdfCtx: null
    })
    onMounted(() => {
      if (props.url) {
        state.url = props.url
        loadingTaskPdf (state.url)
      } 
    })
    const loadingTaskPdf = (url) => {
      const loadingTask = pdfJS.getDocument(url)
      loadingTask.promise.then(pdf => {
        state.pdfCtx = pdf
        state.pageNum = pdf.numPages
        nextTick(() => {
          renderPdf()
        })
      })
    }
    const renderPdf = (num = 1) => {
      state.pdfCtx.getPage(num).then(page => {
        // 获取元素
        const canvas = document.getElementById(`pdf-canvas-${num}`)
        const ctx = canvas.getContext('2d')
        // 设置缩放值
        const viewport = page.getViewport(1.4)
        canvas.height = viewport.height 
        canvas.width = viewport.width 
        page.render({
          canvasContext: ctx,
          viewport: viewport
        })
        //是否达到最大页数
        if (num < state.pageNum) {
          renderPdf(num + 1)
        } 
      })
    }
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
.pdf{
  width:100%;
  min-height: 850px;
  overflow: scroll;
}
.pdf canvas{
  display: block;
  margin: 0 auto;
  width: 100%;
}
</style>
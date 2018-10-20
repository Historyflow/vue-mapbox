import controlMixin from './controlMixin'

export default {
  name: 'FullscreenControl',
  mixins: [controlMixin],

  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },

  data () {
    return {
      control: undefined
    }
  },

  created () {
    this.control = new this.mapbox.FullscreenControl()
  },

  methods: {
    $_deferredMount (payload) {
      this.map = payload.map
      this.map.addControl(this.control, this.position)
      this.$emit('added', this.control)
      payload.component.$off('load', this.$_deferredMount)
    }
  }
}

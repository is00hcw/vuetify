export default {
  methods: {
    genHeader () {
      return this.$createElement('div', {
        'class': 'picker--date__header'
      }, [
        this.genSelector()
      ])
    },
    genSelector () {
      return this.$createElement('div', {
        'class': 'picker--date__header-selector'
      }, [
        this.$createElement('v-btn', {
          props: {
            dark: this.dark,
            icon: true
          },
          nativeOn: {
            click: e => {
              e.stopPropagation()
              this.tableDate = new Date(this.tableYear, this.tableMonth - 1)
            }
          }
        }, [
          this.$createElement('v-icon', 'chevron_left')
        ]),
        this.$createElement('div', {
          'class': 'picker--date__header-selector-date'
        }, [
          this.$createElement(this.computedTransition, [
            this.$createElement('strong', {
              key: this.tableMonth
            }, new Date(this.tableYear, this.tableMonth).toLocaleString(this.locale, this.headerDateFormat))
          ])
        ]),
        this.$createElement('v-btn', {
          props: {
            dark: this.dark,
            icon: true
          },
          nativeOn: {
            click: e => {
              e.stopPropagation()
              this.tableDate = new Date(this.tableYear, this.tableMonth + 1)
            }
          }
        }, [
          this.$createElement('v-icon', 'chevron_right')
        ])
      ])
    }
  }
}

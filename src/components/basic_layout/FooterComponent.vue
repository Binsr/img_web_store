 <template>
    <div class="footerWraper">
      <div class="top">
        <div class="status">We have more than 340 million images as of June 30, 2020.</div>
        <div class="language">English</div>
      </div>

      <div class="content">
        <div class="section" v-for="(section, i) in sections" :key="i">
          <span class="title"> {{section.title}} </span>
          <a :href="item.link" v-for="(item, i) in section.data" :key="i"> {{item.name}} </a>
        </div>
        <div class="stagod-da-je-ovo">
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </div>
      </div>

      <div class="bottom">
        <div class="copyright">© 2020 Stock Serbia.</div>
        <div>countries|countries|countries|countries|countries|countries</div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      content: [],
      company: [],
      legal: [],
      support: [],
    }
  },
  computed: {
    sections () {
      let arr = [
      {
        title: 'CONTENT',
        data: this.content
      },
      {
        title: 'COMPANY',
        data: this.company
      },
      {
        title: 'LEGAL',
        data: this.legal
      },
      {
        title: 'SUPPORT',
        data: this.support
      },
      ]
      return arr;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // todo, izvuci imena i putanje do content stranica i populate this.content sa objektima koji imaju "name" i "link"
      

      // fake data for testing
      for (let i = 1; i <= 5; i++) {
        const element = {
          name: `Test link num.${i}`,
          link: '/test'
        };
        this.content.push(element);
        this.company.push(element);
        this.legal.push(element);
        this.support.push(element);
      }
    }
  }
}
</script>

<style scoped>
.footerWraper {
  color: var(--text-color-main);
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top, .bottom {
  box-sizing: border-box;
  width: calc(100% - 100px);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom {
  margin-top: 10px;
  border-top: 1px solid var(--text-color-main);
}
.content {
  box-sizing: border-box;
  width: calc(100% - 100px);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.content .section {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.content .stagod-da-je-ovo {
  height: 100%;
  display: flex;
}
.box {
  background: white;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  margin-left: 20px;
}
.section .title {
  font-weight: bold;
}
.section a {
  margin-top: 7px;
}


</style>
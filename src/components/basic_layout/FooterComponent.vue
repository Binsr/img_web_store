 <template>
    <div class="footerWraper">
      <div class="top"> </div>

      <div class="content">
        CONTENT <br>
        Crative <br>
        Editorial<br>
        Free<br>
      </div>

      <div class="company">
        COMPANY <br>
        Crative <br>
        Editorial<br>
        Free<br>
      </div>

      <div class="legal">
        LEGAL <br>
        Crative <br>
        Editorial<br>
        Free<br>
      </div>

      <div class="support">
        SUPPORT <br>
        Crative <br>
        Editorial<br>
        Free<br>
      </div>

      <div class="something">
        SOMETHING <br>
        Crative <br>
        Editorial<br>
        Free<br>
      </div>
      <div class="left">
      </div>
      <div class="right">
      </div>

    </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footerWraper{
  color: white;
  margin: auto;
  background-color:black; 
  height: 200px; 
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 100px 50px;
  grid-template-areas: 
  "top top top top top"
  "content company legal support something"
  "left right right right right";
  }
  .top{
    grid-area: top;
  }
  .content{
    grid-area: content;
  }
  .company{
    grid-area: company;
  }
  .legal{
    grid-area: legal;
  }
  .support{
    grid-area: support;
  }
  .something{
    grid-area: something;
  }


</style>
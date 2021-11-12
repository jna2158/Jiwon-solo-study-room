<template>
  <div class="panel">
    <p class="panel-tabs">
    <a :class="{'is-active': activeTab === 'Clinical'}" @click="activeTab = 'Clinical'">
      Clinical
    </a>
    <a :class="{'is-active': activeTab === 'Image'}" @click="activeTab = 'Image'">
      Image
    </a>
  </p>
  <p class="panel-block">
    <table class="table" v-show="activeTab === 'Clinical'" :key="'Clinical'">
      <tbody>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <textarea disabled>InformationPanelInformationPanelInformationPanelInformationPanelInformationPanelInformationPanelInformationPanelInformationPanelInformationPanelInformationPanelInformationPanel</textarea>
      </tbody>
    </table>

    <table v-show="activeTab === 'Image'" :key="'Image'">
      <tbody>
        <tr>
          <td>name</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>width</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>height</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>resolution</td>
          <td>~~~</td>
        </tr>
        <tr>
          <td>magnification</td>
          <td>~~~</td>
        </tr>
      </tbody>
    </table>
  </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'Clinical'
    }
  }
}
</script>

<style scoped>
.panel {
  border: 1px solid rgb(16, 10, 53);
  width: 200px;
}

.panel-tabs {
  margin-bottom: 5px;
}

.panel-block {
  border: 1px solid blue;
  margin: 0px;
  max-height: 420px;
  overflow: auto;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  border: 1px solid black;
  margin: 2px;
}

::-webkit-scrollbar-button:vertical:decrement, 
::-webkit-scrollbar-button:vertical:increment {
  border: 1px solid black;
}

a,
a.is-active{
  margin: 0px 7px 0px 7px;
  padding: 5px;
  border: 1px solid black;
}

.table {
  margin-bottom: 0 !important;
  width: 100%;
  table-layout: fixed;
}

.is-active {
  color: white;
  font-weight: 600;
  background-color: #4472C4;
}

td {
  word-wrap: break-word;
}

td:first-child {
  font-family: $font-roboto-medium;
  font-weight: 600;
  color: $color_gray_light;
  width: 10em;
  padding-top: 8px;
  font-size: 0.9em;
  text-transform: uppercase;
}
td:last-child {
  font-family: $font-roboto-regular;
  color: $color_gray_dark;
}

textarea {
  height: 70px;
  width:180px;
}

.buttons {
  justify-content: center;
}

.buttons.navigation {
  margin-top: 0.7em;
  margin-bottom: 0;
  border-width: 0;
}

.fa-angle-left {
  margin-right: 0.4em;
}

.fa-angle-right {
  margin-left: 0.4em;
}

.panel-options {
  padding: 0px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
}

.btn-calibration {
  width: 49%;
  margin-right: 3px;
  background-color: $color_purple;
  font-size: 1px;
}

.btn-info {
  width: 48%;
  margin-left: 3px;
  background-color: $color_blue_light;
  line-height: 35px;
  font-size: 1px;
}

.btn-download {
  width: 100%;
  background-color: $color_blue;
}

.icon-download {
  width: 10px;
  margin-right: 5px;
}

.pre-img {
  width: 50%;
  float: left;
  font-size: 11px;
}

.next-img {
  width: 50%;
  float: left;
  font-size: 11px;
  text-align: right;
}

.icon-navigation {
  font-size: 10px;
  padding: 2px;
  margin: 0px 5px;
}

.icon-navi {
  width: 10px;
}

.fa-angle-left, .fa-angle-right {
  margin: 0px;
}
</style>
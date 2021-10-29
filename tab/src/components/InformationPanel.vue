<template>
  <div>
    <p class="panel-tabs">
      <a :class="{'is-active': activeTab === 'Clinical'}" @click="activeTab = 'Clinical'">
        Clinical
      </a>
      <a :class="{'is-active': activeTab === 'Images'}" @click="activeTab = 'Image'">
        Image
      </a>
    </p>
    <p class="panel-block">
      <table class="table">
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

}
</script>

<style>

</style>
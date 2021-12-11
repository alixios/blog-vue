<template>
<!--定义导航元素-->
  <div class="nav-bar-item">
    <!-- 具名插槽   -->
     <slot name="item-icon"> </slot>
     <slot name="item-text"> </slot>
  </div>
</template>

<script>

export default {
    name: 'NavBarItem'
}
</script>

<style>

</style>

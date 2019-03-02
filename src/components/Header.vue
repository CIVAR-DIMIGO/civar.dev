<script>
export default {
  name: 'Header'
}
</script>

<template>
  <div class="header">
    <div class="header__name">
      <span>
        <a href="/">CIVAR</a>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$tape-color: #ffca12;

.header {
  width: 100%;
  height: 2em;
  background-color: $tape-color;
  background: repeating-linear-gradient(
    45deg,
    $tape-color,
    $tape-color 20px,
    black 20px,
    black 40px
  ), $tape-color;
  display: flex;
  justify-content: center;
  align-items: center;

  &__name {
    background-color: $tape-color;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 100%;

    span {
      font-family: 'Press Start 2P', cursive;
      font-size: 2em;
      margin-top: .1em;
      margin-left: .5em;
      margin-right: .5em;
      display: inline-block;
      
      a {
        color: black;
      }
    }
  }
}
@media (max-width: 700px) {
  div.header {
    height: 2em;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 15px,
      black 15px,
      black 25px
    ), $tape-color;

    span {
      font-size: 1.5em;
    }
  }
}
</style>

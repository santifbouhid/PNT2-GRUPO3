<script>
export default {
    name: 'Footer'
}
</script>

<template>
    <footer class="footer">
        <p>copyRights <font-awesome-icon icon="coffee" /> by Grupo-3</p>
    <ul class="footer-links">
      <li><a href="/terms-and-conditions">Términos y Condiciones</a></li>
      <li><a href="/privacy-policy">Política de Privacidad</a></li>
      <li><a href="/copyrights">Copyrights</a></li>
    </ul>
    </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}
.footer-links {
  list-style: none;
  padding: 0;
}
.footer-links li {
  display: inline;
  margin: 0 10px;
}
.footer-links a {
  color: white;
  text-decoration: none;
}
.footer-links a:hover {
  text-decoration: underline;
}
.footer-description {
  margin-top: 10px;
}
</style>
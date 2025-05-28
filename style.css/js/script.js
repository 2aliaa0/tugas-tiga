<script>
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function(item) {
    item.addEventListener('click', function() {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    })
  });
</script>
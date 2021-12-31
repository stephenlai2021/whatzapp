<div class="welcome">
  <img
    src="whatsapp_web.jpg"
    alt="logo pic"
    style="height: calc(100%); width: 100%; object-fit: contain;"
  />
</div>

<style>
  .welcome {
    position: relative;
    flex: 90%;
    background: #e5ddd5;
  }
  .welcome::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(pattern.jpg);
    opacity: 0.06;
  }
</style>

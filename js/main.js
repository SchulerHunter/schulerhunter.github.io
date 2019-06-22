window.app = new Vue({
  el: '#main',
  data() {
    return {
      header: `        
      <b-navbar class="headerNav" toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">Icon Here</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto">
            <b-nav-text>
              <h3>Hunter The .Dev</h3>
            </b-nav-text>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item-dropdown text="Learn More">
              <b-dropdown-item href="/About">About Me</b-dropdown-item>
              <b-dropdown-item href="/Resume">Resume</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="/Timeline">Timeline</b-nav-item>
            <b-nav-item href="/Contact">Contact Me</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>`,
      footer:`
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="https://www.facebook.com/hunter.schuler.9">
            <i class="fab fa-facebook-square fa-lg"></i>
          </b-nav-item>
          <b-nav-item href="https://www.linkedin.com/in/hunter-schuler/">
            <i class="fab fa-linkedin fa-lg"></i>
          </b-nav-item>
          <b-nav-item href="https://github.com/SchulerHunter">
            <i class="fab fa-github-square fa-lg"></i>
          </b-nav-item>
          <b-nav-item href="https://www.instagram.com/hschuler14/">
            <i class="fab fa-instagram fa-lg"></i>
          </b-nav-item>
          <b-nav-item href="mailto:Hunter@HunterThe.Dev">
            <i class="fas fa-envelope-square fa-lg"></i>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-navbar-brand href="/">Icon Here</b-navbar-brand>
          <b-nav-text>
            <sub>Est. 2019</sub>
          </b-nav-text>
        </b-navbar-nav>
      </b-navbar>`
    }
  }
})
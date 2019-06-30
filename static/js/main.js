Vue.config.productionTip = false;

const header = Vue.component('headerNav', {
  data: function () {
    return {
      links: {
        home: '/',
        about: '/about',
        resume: '/resume',
        timeline: '/timeline',
        contact: '/contact'
      }
    }
  },
  template: `
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
          <b-nav-item :href="links.home">Home</b-nav-item>
          <b-nav-item-dropdown text="Learn More">
            <b-dropdown-item :href="links.about">About Me</b-dropdown-item>
            <b-dropdown-item :href="links.resume">Resume</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item :href="links.timeline">Timeline</b-nav-item>
          <b-nav-item :href="links.contact">Contact Me</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>`
})

const Footer = Vue.component('footerNav', {
  data: function() {
    return {
      footerLinks: {
        facebook: {
          link: "https://www.facebook.com/hunter.schuler.9",
          icon: "fab fa-facebook-square fa-lg"
        },
        linkedin: {
          link: "https://www.linkedin.com/in/hunter-schuler/",
          icon: "fab fa-linkedin fa-lg"
        },
        github: {
          link: "https://github.com/SchulerHunter",
          icon: "fab fa-github-square fa-lg"
        },
        instagram: {
          link: "https://www.instagram.com/hschuler14/",
          icon: "fab fa-instagram fa-lg"
        },
        email: {
          link: "mailto:Hunter@HunterThe.Dev",
          icon: "fas fa-envelope-square fa-lg"
        }
      }
    }
  },
  template: `
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav class="mx-auto">
        <b-nav-item v-for="group in footerLinks" :href="group.link">
          <i :class="group.icon"></i>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-navbar-brand href="/">Icon Here</b-navbar-brand>
        <b-nav-text>
          <sub>Est. 2019</sub>
        </b-nav-text>
      </b-navbar-nav>
    </b-navbar>`
})

const app = new Vue({
  el: '#main',
  data: function() {
    return {
    }
  }
})
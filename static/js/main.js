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
    <b-navbar class="header" toggleable="lg" type="dark" variant="dark">
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
    <b-navbar class="footer" type="dark" variant="dark">
      <b-navbar-nav class="mx-auto">
        <b-nav-item v-for="group in footerLinks" :href="group.link" :key="group.keys">
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
      events:
      {
        earlyLife: {
          date: "2000 - 2014",
          header: "Childhood",
          info: `
            When I was younger I was always changing what I wanted to be,
            from Genetic Engineer to Aerospace Engineer, after spending
            time with my brother one day, I decided that computers are
            something that I could see in my future, and here I am now.`
        },
        HSFreshmanYear: {
          date: "August 2014 - June 2015",
          header: "Start high school at Southern Lehigh High School",
          info: `
            Given a macbook and limited knowledge of programming, 
            I teach myself how to program with python by reading 
            books and examples online, I begin teaching myself python.`
        },
        firstCSCource: {
          date: "Summer 2015",
          header: "My First College Computer Science Course",
          info: `
            Due to my lack of interest in regular schooling,
            my parents enroll me in an online C++ course taught
            by a local community college. This confirms my interest
            in computer science.`
        },
        HSSophomoreYear: {
          date: "August 2015 - June 2016",
          header: "Sophomore Year at Southern Lehigh",
          info: `
            With my growing interest in computers, I decide to join
            the school robotics team, computing in the FIRST Robotics 
            competition.I decide to get ahead in math and begin moving 
            ahead to talk Calc in my Junior year.`
        },
        secondCSCourse: {
          date: "Summer 2016",
          header: "Second Computer Science Course",
          info: `
            My parents decide it would be best to enroll me in 
            another computer science course, this time in Java. 
            Meanwhile I bought myself a Raspberry Pi and Arduino to 
            start playing with embedded systems.`
        },
        HSJuniorYear: {
          date: "August 2016 - June 2017",
          header: "Junior Year",
          info: `
            This year I ended up switching schools. The new school didn't
            offer macbooks to the student so my programming slowed down to
            only being at home, but this gave me more of a chance to focus 
            on band, theater, track, and soccer. I ended up completing the 
            math curriculum offered by my school with the completion of Calc BC.`
        },
        HSSeniorYear: {
          date: "August 2017 - June 2018",
          header: "Senior Year",
          info: `
            Since I was out of courses I could take at the new school except
            for those required by Seniors, I dual-enrolled with the local community college,
            where I proceeded to take 18 credits over the year.`
        },
        firstInternship: {
          date: "December 2017 - August 2018",
          header: "My First Intership - Avantor",
          info: `
            Technically being a college student, I was able to apply for a Junior Data Analyst
            position at a local pharmaceutical supply company called Avantor Performance Materials.
            There I proceeded to do data analytics work in the procurement department and,
            working with SAP utilities, I began utilizing my programming experience to create 
            a program to stream line the analytics process.`
        },
        UPFreshmanYear: {
          date: "August 2018 - June 2019",
          header: "Begin College at Penn State Main Campus",
          info: `
            I finally began my first year of college. Here I immediately got involved in clubs,
            such as IEEE where I became and officer and ACM. I decided that I would take a dual major
            in both Computer Science and Physics and began the intense courseload needed to proceed.`,
          learnmore: "https://github.com/SchulerHunter"
        },
        freshmanCornellCup: {
          date: "November 2018 - July 2019",
          header: "Compete in the Cornell Cup",
          info: `
            I began working with a team of students within IEEE who planned to compete in the
            Cornell Cup. Our project was to create a 3D hologram grapher to help with learning
            Multivariable Calculus. Though we did not get picked for the competition, we continued
            to work on the program as a mini project.`,
          learnmore: "https://github.com/rahulsanjay18/3dGraph"
        },
        freshmanResearchPosition: {
          date: "December 2018 - Ongoing",
          header: "First Reasearch Position - LIGO @ PSU",
          info: `
            During my freshman year, I achieved a research position role in the Physics department,
            working as a programmer in conjunction with LIGO. I worked as a developer assisting in the
            creation of a new site for the researchers of LIGO and astronomers alike to host their findings
            and custom tools. Along with this, I assisted in the creation of a dashboard to analyze the data 
            recieved from the detectors.`,
            learnmore: "https://gwsci.org"
        },
        secondInternship: {
          date: "June 2019 - August 2019",
          header: "A Second Internship - JHU APL",
          info: `
            I managed to get an interhsip in my freshman year at the John's Hopkins Applied Physics Lab,
            where I worked on Project ESSENCE, a biosurvaillance software used at the local, state, and federal level
            to monitor disease progression and impact in communal areas. I also worked with SAGES, ESSENCE open source
            couter-part to be used the same, however in areas with less resources.`,
          learnmore: "https://www.jhuapl.edu/sages/"
        }

      }
    }
  }
})
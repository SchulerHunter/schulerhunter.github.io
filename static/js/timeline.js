const timeline = new Vue({
    el: '#timeline',
    data: function() {
        return {
            events: {
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
    },
    methods: {
        handleScroll() {
            console.log('scrolling')
        },
        onMount() {
            document.getElementById("timeline").addEventListener('scroll', this.handleScroll);
        }
    },
    mounted() {
        this.onMount();
    },
    beforeDestroy() {
        document.getElementById("timeline").removeEventListener('scroll', this.handleScroll);
        console.log('scrolling Destroyed');
    },
})

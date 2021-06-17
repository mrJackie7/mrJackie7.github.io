const totalProjects = document.getElementById('total-projects')
const listProjects = document.querySelector('.projects-list')

const projects = [
  {
    image: './img/cdh-overview.webp',
    title: 'CoderDev Hub',
    hashtag: [
      '#Javascript',
      '#MERN',
      '#SocialMedia',
      '#MongoDB',
      '#ResponsiveWebsite',
      '#SinglePageApplication',
    ],
    description: `In this project, I work with something called MERN-Stack: MongoDB, ExpressJS,cReactJS and NodeJS for makeing a social media that specialized for anyone, either hobbyist or professional to having a chat. I deployed it to heroku so my app goes online. The database I used is MongoDB Atlas so when i am deploying my app, its database also gone online and ready to use. Just remind you, that this need 30 second to be set up, because as a free tier term, it's not running 24/7, so when we close this app and not open this app for certain of time, it will gone hibernate.`,
    demoLink: 'https://stark-bayou-09054.herokuapp.com/',
    code: 'https://github.com/mrJackie7/coderdev-hub',
  },
  {
    image: './img/dfb-overview.webp',
    title: 'Dummy Frontend Bootcamp',
    hashtag: ['#HTML', '#Bootstrap', '#ResponsiveWebsite', '#Bootstrap5.0'],
    description: `In this project, I relearning Bootstrap because there is a new version (5.0) that just came up last week. Most layout I'm created came from Bootstrap itself. It Also mobile responsive, so whe in certain window sizes (or in any other devices), the layout adapt itself to its screen device.`,
    demoLink: 'https://determined-brattain-541c40.netlify.app/',
    code: 'https://github.com/mrJackie7/dummy-frontend-bootcamp-website',
  },
  {
    image: './img/weather-app-overview.webp',
    title: 'Simple Weather App',
    hashtag: [
      '#HTML',
      '#CSS',
      '#Javascript',
      '#VanillaJavascript',
      '#weatherApi',
      '#ResponsiveWebsite',
    ],
    description: `In this project, I make an app taht i really want to build since i found <a href='https://openweathermap.org/guide'>this link</a> for making a forecasting, weather app. I get the data from openweatherapi (the link i just mentioned), build it with a very simple-old-fashioned-way HTML/CSS/Javascript combo, fetch the api data in Vanilla Javascript and you got the very simple weather app that working as it purposed to be. The app itself also mobile responsive, so you can check the weather on your phone.`,
    demoLink: 'https://admiring-goldwasser-413a34.netlify.app/',
    code: 'https://github.com/mrJackie7/weather-app',
  },
  {
    image: './img/loruki-overview.webp',
    title: 'Loruki Dummy Hosting Website',
    hashtag: ['#HTML', '#CSS'],
    description: `In this project, I just want mentioning my old project when I still in university. Thsi Website is pretty simple and easy, just build it with HTML and CSS. It also mobile responsive, but not so major, just to adjust itself with any screen sizes.`,
    demoLink: 'https://loruki-dummyweb.netlify.app/',
    code: 'https://github.com/mrJackie7/Loruki-Dummy-Web',
  },
]

showProject(projects)

function showProject(projects) {
  totalProjects.innerText = `(${projects.length})`
  let data = ``
  projects.forEach((project) => {
    let hashtagHTML = hashtagToHTML(project)
    data += `
    <div class='mt-4 px-2 rounded shadow'>
      <div class="card mb-3" style="max-width: 100%;">
        <div class="row g-0">
          <div class="col-md-4 py-5">
            <img src="${project.image}" alt="${project.image}" style='object-fit: cover; width: 100%; height: 250px;'>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">${project.title}</h3>
              <p class="card-text"><small>${project.description}</small></p>
              <div class="d-flex align-items-center" style='flex-wrap: wrap !important'>
                ${hashtagHTML}
              </div>
              <div class="m-3">
                <a href='${project.demoLink}' target="_blank" rel="nofollow"><button class="btn btn-primary">Demo</button></a>
                <a href='${project.code}' target="_blank" rel="nofollow"><button class="btn btn-light border-primary text-primary">Code</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  })

  listProjects.innerHTML = data

  RebuildEvent()
}

function searchHashtag(hashtag) {
  let searchResult = projects.filter((project) => {
    return project.hashtag.includes(hashtag.innerText)
  })

  console.log(searchResult)
  let data = ``

  searchResult.forEach((project) => {
    let hashtagHTML = hashtagToHTML(project)
    data += `
    <div class='mt-4 px-2 rounded shadow'>
      <div class="card mb-3" style="max-width: 100%;">
        <div class="row g-0">
          <div class="col-md-4 py-5">
            <img src="${project.image}" alt="${project.image}" style='object-fit: cover; width: 100%; height: 250px;'>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text"><small>${project.description}</small></p>
              <div class="d-flex align-items-center" style='flex-wrap: wrap !important'>
                ${hashtagHTML}
              </div>
              <div class="m-3">
                <a href='${project.demoLink}' target="_blank" rel="nofollow"><button class="btn btn-primary">Demo</button></a>
                <a href='${project.code}' target="_blank" rel="nofollow"><button class="btn btn-light border-primary">Code</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  })

  listProjects.innerHTML = data

  RebuildEvent()
}

function hashtagToHTML(project) {
  let arrayHashtag = project.hashtag.map((hashtag) => {
    return `<div class="m-1 hashtag-item"><small>${hashtag}</small></div>`
  })

  let hashtagHTML = ``
  arrayHashtag.forEach((hashtag) => {
    hashtagHTML += hashtag
  })

  return hashtagHTML
}

function RebuildEvent() {
  const eventHashtag = document.querySelectorAll('.hashtag-item')
  eventHashtag.forEach((hashtag) => {
    hashtag.addEventListener('click', () => {
      searchHashtag(hashtag)
    })
  })
}

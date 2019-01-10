#Right before you begin
##Make sure NODE JS installed
# pintu-crypto
Install [Node JS](https://nodejs.org/en/ "Node's Homepage")

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


##Detail Project
###Folder Structure

    ├── build                   # Compiled files (alternatively `webpack`)
    ├── node_modules            # Modules installed
    ├── public                  # Base project (index.html)
    ├── src                     # Source files (alternatively `lib` or `app`)
    │   ├── assets              # Assets folder (font, picture, video)
        ├── components          # Components folder
            ├── AboutHeroImage  # Components Hero Image(used in About.vue)
            ├── BlogContainer   # Components Blog Container (used in Blog.vue)
            ├── CardStep        # Components Card Step (used in Home.vue)
            ├── Footer          # Components Footer (used in every views page)
            ├── GooglePlay      # Components Google Play (used in Home.vue)
            ├── HeroImage       # Components Hero Image (used in Blog.vue) 
            ├── HowTo           # Components Hero Image (used in Home.vue)
            ├── JoinUs          # Components Join Us (used in About.vue)
            ├── ModalSubs       # Components Modal Subscribe (used in Home.vue)
            ├── Navbar          # Components Navbar Image (used in App.vue)
            ├── OpenPositions   # Components Open Positions (used in About.vue)
            ├── OurName         # Components Our Name (used in About.vue)
            ├── OurValues       # Components Our Values (used in About.vue)
            ├── OurWorkplace    # Components Our Workplace (used in About.vue)
            ├── Subscribe       # Components Subscribe (used in Home.vue)
        ├── config              # Config folder (set before starting project)
        ├── plugins             # Plugin folder
            ├── vuetify.js      # vuetify plugin 
        ├── views               # Page folder (layout for every route)
            ├── About           # About page (route "/")
            ├── Blog            # Blog page (route "/")
            ├── Home            # Home page (route "/")
            ├── ThanksPage      # ThanksPage page (route "/")
        ├── App.vue             # Entry Point
        ├── main.js             # Main aplications script
        ├── router.js           # Router file
        ├── store.js            # Store project file
    ├── babel.config.js         # Babel config for older browser
    ├── postcss.config.js       # Stylus/scss css config
    ├── vue.config.js           # Vue config for building app  
    └── webpack.config.js       # Webpack config to config modules

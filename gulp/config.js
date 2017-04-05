const src = './app'
const dest = './dist'

module.exports = {
    styles: {
        src: `${src}/css/**/*.{sass,scss}`,
        dest: `${dest}/css/`
    },
    pug: {
        src: `${src}/**/*.pug`,
        dest: `${dest}/`
    },
    images: {
        src: `${src}/img/**`,
        dest: `${dest}/img`
    },
    clean: {
        all: dest,
        styles: `${dest}/css/**`,
        pug: `${dest}/**/.html`
    },
    browsersync: {
        development: {
            server: {
                baseDir: [dest]
            },
            port: 9999,
            ui: {
                port: 9997,
                weinre: {
                    port: 9996
                }
            },
            open: false,
            files: [`${dest}/css/**/*.css`, `${dest}/js/**/*.js`, `${dest}/**/*.html`],
            notify: {
                styles: [
                    'display: hidden; padding: 5px 15px; font-family: sans-serif; position: fixed; font-size: 0.9em; z-index: 9999; right: 5px; top: 5px; border-bottom-right-radius: 5px; margin: 0px; color: #f8f8f8; text-align: center; background: linear-gradient(to left, #f85032 , #e73827);'
                ]
            },
            host: '185.112.23.237',
            logConnections: true,
            logFileChanges: true,
            logLevel: 'info',
        }
    },
    watch: {
        styles: `${src}/css/**/*.{scss,sass}`,
        pug: `${src}/**/*.pug`,
        scripts: `${src}/js/**/*.js`
    }
};
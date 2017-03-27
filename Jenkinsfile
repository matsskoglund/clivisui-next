node {
    stage ("checkout") {
        checkout scm 
    }
    stage ("build"){    
        sh "npm install"
        sh "ng build --aot --env=prod --prod --output-path dist"
    }
}
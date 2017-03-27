node {
    stage ("checkout") {
        checkout scm 
    }
    stage ("build"){    
        sh "ng build --aot --env=prod --prod --output-path dist"
    }
}
node {
    stage ("checkout") {
        checkout scm 
    }
    stage ("build"){    
        sh "npm install"
        sh "ng build --aot --env=prod --prod --base-href=nas --output-path nas"
    }
    stage ("publish"){
        sh "scp dist/* 192.168.1.20:/volume1/web/nas"
    }
}
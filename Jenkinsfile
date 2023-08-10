pipeline {
   agent { 
    docker { 
        image 'mcr.microsoft.com/playwright:v1.34.0-jammy' 
    } 
   }
   stages {
      stage('e2e-tests') {
         steps {
            sh '''
            npm install
            npx playwright test
            '''
         }
      }
   }
}
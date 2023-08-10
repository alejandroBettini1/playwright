pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.36.0-jammy'
        }
    }
    stages {
        stage('Mi Etapa Personalizada') {
            steps {
                sh 'npm install'
                sh 'npx playwright test'
            }
        }
    }
}

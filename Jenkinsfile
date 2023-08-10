pipeline {
    agent none
    stages {
        stage('Docker-in-Docker') {
            agent {
                docker {
                    image 'docker:dind'
                }
            }
            steps {
                sh 'docker info' // Ejemplo de comando en Docker-in-Docker
            }
        }
        stage('Playwright Tests') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.36.0-jammy'
                }
            }
            steps {
                sh 'npm install'
                sh 'npx playwright test'
            }
        }
    }
}

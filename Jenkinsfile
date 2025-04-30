pipeline {
    agent any

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
        NODE_ENV = 'development'
    }

    tools {
        nodejs 'NodeJS_18' // Make sure this name matches the one in Jenkins > Global Tool Configuration
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/omkeshri/devops-project.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Stop and Remove Old Containers') {
            steps {
                bat 'docker-compose down'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Start Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            echo 'Build finished.'
        }
    }
}

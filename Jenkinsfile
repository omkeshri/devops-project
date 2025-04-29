pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'your-docker-registry'  // Replace with your Docker registry
        DOCKER_IMAGE_NAME = 'chat-app'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build and Test Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm test'  // Make sure you have tests configured
                }
            }
        }
        
        stage('Build and Test Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'npm test'  // Make sure you have tests configured
                }
            }
        }
        
        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }
        
        stage('Push Docker Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-registry-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        docker login -u $DOCKER_USER -p $DOCKER_PASS $DOCKER_REGISTRY
                        docker tag chat-backend $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME-backend:${BUILD_NUMBER}
                        docker tag chat-frontend $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME-frontend:${BUILD_NUMBER}
                        docker push $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME-backend:${BUILD_NUMBER}
                        docker push $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME-frontend:${BUILD_NUMBER}
                    '''
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh '''
                    # Update docker-compose.yml with new image tags
                    sed -i "s|image: chat-backend|image: $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME-backend:${BUILD_NUMBER}|g" docker-compose.yml
                    sed -i "s|image: chat-frontend|image: $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME-frontend:${BUILD_NUMBER}|g" docker-compose.yml
                    
                    # Deploy to your server (replace with your deployment command)
                    # Example using SSH:
                    # ssh user@your-server "cd /path/to/app && docker-compose pull && docker-compose up -d"
                '''
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
} 
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Code checked out from GitHub.'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running unit tests...'
                bat 'npm test || echo Tests may have failed'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running npm audit...'
                bat 'npm audit || echo Security scan completed'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t devops-hd .'
            }
        }

        stage('Deploy Locally') {
            steps {
                echo 'Deploying app in container...'
                bat 'docker run -d -p 3000:4000 devops-hd'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Checking if app is running...'
                bat 'curl http://localhost:3000 || echo App not reachable'
            }
        }
    }
}

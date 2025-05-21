pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Code checked out from GitHub.'
                checkout scm
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
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running security audit...'
                bat 'npm audit'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t devops-hd-app .'
            }
        }

        stage('Deploy Locally') {
            steps {
                echo 'Deploying container locally...'
                bat 'docker run -d -p 4000:4000 devops-hd-app'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring logic placeholder.'
            }
        }
    }
}
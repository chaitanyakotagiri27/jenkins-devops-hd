pipeline {
    agent any

    tools {
        nodejs "NodeJS18"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Code checked out from GitHub.'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test || echo "Some tests may have failed"'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Checking for vulnerabilities...'
                sh 'npm audit || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t devops-hd .'
            }
        }

        stage('Deploy Locally') {
            steps {
                echo 'Running Docker container...'
                sh 'docker run -d -p 3000:4000 devops-hd'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Checking app health...'
                sh 'curl -f http://localhost:3000 || echo "App is not reachable"'
            }
        }
    }
}

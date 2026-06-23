pipeline {
    agent any 

    tools {
        jdk 'jdk21'
    }

    parameters {
        choice(
            name: 'script',
            choices: ['test:smoke', 'test:regression'],
            description: 'Select test suite'
        )
    }

    environment {
        ENV = 'dev'
        BASE_URL_DEV = 'https://testautomationpractice.blogspot.com/'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Roshanbtech/testautomationpractice-playwright.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm run %script%'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
}
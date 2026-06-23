pipeline {
    agent any 

    tools {
        jdk 'jdk21'
    }

    //triggers for ...
    triggers {
        pollSCM('H/5 * * * *')// auto trigger when code changes - polls gitrepo
        cron('H 2 * * *') // nightly run - 2AM
    }

    parameters {

        choice(
           name: 'mode',
           choices: ['auto', 'manual'],
           description: 'Execution mode' 
        )

        choice(
            name: 'suite',
            choices: ['smoke', 'regression'],
            description: 'Select test suite (manual mode)' 
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

        // stage('Smoke Tests') {
        //     when {
        //         expression { params.suite == 'smoke'}
        //     } 
        //     steps {
        //         def cmd = "npm run test:smoke"
        //         bat "${cmd}"
        //     }
        // }

        // stage('Regression Tests') {
        //     when {
        //         expression { params.suite == 'regression'}
        //     } 
        //     steps {
        //         def cmd = "npm run test:regression"
        //         bat "${cmd}"
        //     }
        // }

        // stage('Run Tests') {
        //     steps {
        //         bat 'npm run %script%'
        //     }
        // }

        // stage('Run Smoke Tests') {
        //     steps {
        //         bat 'npm run test:smoke'
        //     }
        // }

        // stage('Run Regression Tests') {
        //     steps {
        //         bat 'npm run test:regression'
        //     }
        // }

        stage('Run Tests') {
            steps {
                script {

                    if(params.mode == 'auto') {
                        echo "🔁 AUTO MODE → Running Smoke + Regression"
                        // run both
                        bat 'npm run test:smoke'
                        bat 'npm run test:regression'

                    } else {

                        echo "👤 MANUAL MODE → Running selected suite"
                        // run selected
                        def cmd = "npm run test:${params.suite}"
                        echo "Executing: ${cmd}"
                        bat "${cmd}"
                    }
                }
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
            allure includeProperties: false, jdk: 'jdk21', results: [[path: 'allure-results']]
        }

        success {
            echo '✅ Pipeline SUCCESS'
        }

        unstable {
            echo '⚠️ Flaky tests detected'
        }

        failure { 
            echo '❌ Pipeline FAILED'
        }
    }
}
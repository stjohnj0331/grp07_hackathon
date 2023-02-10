pipeline {
 	agent any
	tools {nodejs "node"}
	stages{
		stage('Checkout') {
			git (branch:'main',url: 'https://github.com/stjohnj0331/grp07_hackathon.git')
		}

		stage('Install Dependencies'){
			 bat'''
			 cd client-frontend
			 npm install
			 '''
		}
		stage('Build'){
			 bat'''
			 set PATH=C:/"Program Files"/nodejs
			 cd client-frontend/src
			 npm run build
			 '''
		}
		stage('Deploy'){
			bat'''
			npm start
			'''
		}
	}
}




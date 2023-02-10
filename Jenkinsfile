pipeline {
 	agent any
	tools {nodejs "node"}
	stages{
		stage('Checkout') {
			steps{
				git (branch:'main',url: 'https://github.com/stjohnj0331/grp07_hackathon.git')
			}
		}

		 stage('Install Dependencies'){
			 steps{
				 bat'''
				 npm install
				 cd client-frontend
				 npm install
				 set PATH=C:/"Program Files"/nodejs
				 cd server-backend
				 npm install
				 '''
			 }
		 }
		 stage('Build'){
			 steps{
				 bat'''
				 set PATH=C:/"Program Files"/nodejs
				 cd client-frontend
				 npm run build
				 cd server-backend
				 npm run build
				 '''
			 }
		 }
		 stage('Deploy'){
			 steps{
				bat'''
				npm install -g serve
				serve -s build
				'''
			 }
		 }
	}
 }




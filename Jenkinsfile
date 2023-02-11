pipeline {
 	agent any
	//tools {nodejs "node"}
	stages{
		stage('Checkout') {
			steps{
				git (branch:'main',url: 'https://github.com/stjohnj0331/grp07_hackathon.git')
			}
		}
		 stage('Build Client'){
			 steps{
				 bat'''
				 set PATH=C:/"Program Files"/nodejs
				 cd client-frontend
				 npm install
				 npm run build
				 '''
			 }
			 
		 }
		 stage('Build Backend Server'){//using port 4000
			steps{
				bat'''
				set PATH=C:/"Program Files"/nodejs
				cd server-backend
				npm install
				npm run build
				'''
			 }
		 }
		 stage('Build Auth Server'){//using port 5000
			steps{
				bat'''
				set PATH=C:/"Program Files"/nodejs
				cd server-backend/AuthServer
				npm install
				npm run build
				'''
			 }
		 }
		 stage('Deploy'){
			 steps{
				bat'''
				cd server-backend
				node index.js
				cd AuthServer
				node authServer.js
				'''
			 }
		 }
	}
 }




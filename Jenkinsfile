node {
 stage('Checkout') {
 git (branch:'main',url: 'https://github.com/stjohnj0331/grp07_hackathon.git')
 }

 stage('Install Dependencies'){
 bat'''
 set PATH=C:/"Program Files"/nodejs
 cd client-frontend
 npm install
 cd server-backend
 npm install
 '''
 }
 stage('Build'){
 bat'''
 set PATH=C:/"Program Files"/nodejs
 cd client-frontend
 npm run build
 cd server-backend
 npm run build
 '''
 }
 stage('Deploy'){
	bat'''
		set PATH=./server-backend
		npm run start
	''',
	bat '''
		set PATH=./client-frontend
		npm run start
	'''
}







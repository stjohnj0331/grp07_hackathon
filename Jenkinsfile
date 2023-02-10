node {
 stage('Checkout') {
 git (branch:'main',url: 'https://github.com/stjohnj0331/grp07_hackathon.git')
 }

 stage('Install Dependencies'){
 bat'''
 set PATH=C:/"Program Files"/nodejs
 cd client-frontend
 npm install
 '''
 }
 stage('Build'){
 bat'''
 set PATH=C:/"Program Files"/nodejs
 cd client-frontend
 npm run build
 '''
 }

 stage('Deploy'){
 // replace this with our own build script
 // bat '''xcopy build\\* \\Software\\nginx-1.22.0\\html\\ /s /y'''
 }
}


stage('Start Database') {
	bat'''
		set PATH=C:\MongoDB\Server\4.0\Bin
		mongod
	''',

	bat'''
		set PATH=C:\MongoDB\Server\4.0\Bin
		mongod
	'''
}
stage("Load data"){
	bat'''
		set PATH=C:\MongoDB\Server\4.0\Bin
		mongoimport --uri mongodb://localhost:27017/employees --collection employees --drop --file c:/grp07_hackathon/server-backend/data.json --jsonArray
	'''
}
stage('Install dependencies') {
	bat'''
		set PATH=./server-backend
		npm i
	''',
	bat '''
		set PATH=./client-frontend
		npm i
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
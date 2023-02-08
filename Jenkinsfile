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
 //bat '''xcopy build\\* \\Software\\nginx-1.22.0\\html\\ /s /y'''
 }
}


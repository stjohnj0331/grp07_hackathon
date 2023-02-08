node {
 stage('Checkout') {
 git (branch:'main',url: 'https://github.com/stjohnj0331/grp07_hackathon.git')
 }

 stage('Install Dependencies'){
 bat'''
 set PATH=C:/"Program Files"/nodejs
 npm install
 '''
 }
 stage('Build'){
 bat'''
 set PATH=C:/"Program Files"/nodejs
 npm run build
 '''
 }

 stage('Deploy'){
 //bat '''xcopy build\\* \\Software\\nginx-1.22.0\\html\\ /s /y'''
 }
}


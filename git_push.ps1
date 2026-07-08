$git = "C:\Program Files\Git\cmd\git.exe"
& $git init
& $git config user.name "Shimsy"
& $git config user.email "shimsy@example.com"
& $git add .
& $git commit -m "Initial commit with Firebase Firestore integration"
& $git branch -M main
& $git remote add origin https://github.com/shimsy20240996-lang/Shimsy-Portfolio.git
& $git push -u origin main

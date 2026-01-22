@echo off

echo Starting frontend and backend...

cd /d "G:\PROJECTS\FACEBOOK\FB-REACT" 
start "" code .


:: Frontend
start cmd /k "cd frontend && npm run dev -- --host"

:: Backend
start cmd /k "cd backend && nodemon server.js"

echo All servers started.
